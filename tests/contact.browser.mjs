import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.CONTACT_TEST_URL || 'http://127.0.0.1:4173';
assert.ok(['localhost', '127.0.0.1'].includes(new URL(base).hostname), 'These submission tests are local-only');
const endpoint = 'https://formsubmit.co/benbrown@hex-perpetual.com';
const browser = await chromium.launch({ headless: true });
after(() => browser.close());

async function setup(t, options = {}) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, ...options });
  t.after(() => context.close());
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  const submissions = [];
  let respond = (route) => route.fulfill({ contentType: 'text/html', body: '<h1>Mock FormSubmit verification</h1>' });
  // Never send a real inquiry: intercept the exact recipient endpoint and block
  // all other external requests. The provider's verification is mocked only.
  await context.route('**/*', async (route) => {
    const request = route.request();
    if (request.url() === endpoint) {
      submissions.push({ method: request.method(), fields: Object.fromEntries(new URLSearchParams(request.postData())) });
      return respond(route);
    }
    if (new URL(request.url()).origin !== new URL(base).origin) return route.abort();
    return route.continue();
  });
  await page.goto(`${base}/contact`);
  await page.getByRole('heading', { name: 'CONTACT', exact: true }).waitFor();
  return { page, errors, submissions, responder: (value) => { respond = value; } };
}

async function fill(page) {
  await page.getByLabel('NAME', { exact: true }).fill('Offline Browser Test');
  await page.getByLabel('EMAIL', { exact: true }).fill('nobody@example.com');
  await page.getByLabel('ORGANIZATION', { exact: true }).fill('Offline Test Organization');
  await page.getByLabel('MESSAGE', { exact: true }).fill('Local mocked fixture. Do not send this inquiry.');
}

async function submit(page) {
  await Promise.all([
    page.waitForURL(endpoint),
    page.getByRole('button', { name: 'Send Message', exact: true }).click(),
  ]);
}

function checkSubmission(submission) {
  assert.equal(submission.method, 'POST');
  assert.deepEqual(submission.fields, {
    _subject: 'Hex Game Studio website inquiry', _template: 'table',
    name: 'Offline Browser Test', email: 'nobody@example.com',
    organization: 'Offline Test Organization', message: 'Local mocked fixture. Do not send this inquiry.',
  });
  assert.equal(submission.fields._captcha, undefined, 'FormSubmit CAPTCHA stays enabled by default');
  assert.equal(submission.fields._next, undefined, 'Provider owns confirmation and errors');
}

async function screenshot(page, name) {
  if (!process.env.CONTACT_SCREENSHOT_DIR) return;
  await mkdir(process.env.CONTACT_SCREENSHOT_DIR, { recursive: true });
  await page.getByRole('button', { name: 'Send Message', exact: true }).scrollIntoViewIfNeeded();
  await page.screenshot({ path: path.join(process.env.CONTACT_SCREENSHOT_DIR, name) });
}

test('native validation blocks empty, malformed-email and whitespace-only name/organization submissions', async (t) => {
  const { page, submissions, errors } = await setup(t);
  await page.getByRole('button', { name: 'Send Message', exact: true }).click();
  assert.equal(await page.locator('#name').evaluate((input) => input.validity.valueMissing), true);
  await fill(page);
  for (const field of ['name', 'organization']) {
    await page.locator(`#${field}`).fill('   ');
    await page.getByRole('button', { name: 'Send Message', exact: true }).click();
    assert.equal(await page.locator(`#${field}`).evaluate((input) => input.validity.patternMismatch), true);
    await fill(page);
  }
  await page.locator('#email').fill('not-an-email');
  await page.getByRole('button', { name: 'Send Message', exact: true }).click();
  assert.equal(await page.locator('#email').evaluate((input) => input.validity.typeMismatch), true);
  for (const [field, max] of [['name', 120], ['email', 254], ['organization', 200], ['message', 5000]]) {
    assert.equal(await page.locator(`#${field}`).getAttribute('maxlength'), String(max));
  }
  assert.equal(submissions.length, 0);
  assert.deepEqual(errors, []);
});

test('valid native POST sends named fields and reply-to email, with CAPTCHA enabled and no early success', async (t) => {
  const { page, submissions, errors } = await setup(t);
  assert.equal(await page.locator('form').getAttribute('action'), endpoint);
  await fill(page);
  await screenshot(page, 'contact-formsubmit-desktop.png');
  assert.equal(await page.getByText(/message has been (sent|submitted|accepted)/).count(), 0);
  await submit(page);
  await page.getByRole('heading', { name: 'Mock FormSubmit verification' }).waitFor();
  assert.equal(submissions.length, 1);
  checkSubmission(submissions[0]);
  assert.deepEqual(errors, []);
});

test('site JavaScript is unnecessary: mobile form validates and posts to the same provider', async (t) => {
  const { page, submissions } = await setup(t, { javaScriptEnabled: false, viewport: { width: 390, height: 844 }, isMobile: true });
  assert.equal(await page.locator('form').isVisible(), true);
  assert.equal(await page.locator('#message').isEnabled(), true);
  assert.equal(await page.getByRole('link', { name: 'email us directly', exact: true }).getAttribute('href'), 'mailto:benbrown@hex-perpetual.com');
  await fill(page);
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), 'no horizontal mobile overflow');
  await screenshot(page, 'contact-formsubmit-mobile-nojs.png');
  await submit(page);
  await page.getByRole('heading', { name: 'Mock FormSubmit verification' }).waitFor();
  checkSubmission(submissions[0]);
});

test('provider error stays visible; Back preserves the draft and allows a deliberate retry', async (t) => {
  const { page, submissions, responder, errors } = await setup(t);
  responder((route) => route.fulfill({ status: 500, contentType: 'text/html', body: '<h1>Mock provider error: message not confirmed</h1>' }));
  await fill(page);
  await submit(page);
  await page.getByRole('heading', { name: 'Mock provider error: message not confirmed' }).waitFor();
  await page.goBack();
  assert.equal(await page.locator('#message').inputValue(), 'Local mocked fixture. Do not send this inquiry.');
  assert.equal(await page.getByRole('button', { name: 'Send Message', exact: true }).isEnabled(), true);
  responder((route) => route.fulfill({ contentType: 'text/html', body: '<h1>Mock provider confirmation</h1>' }));
  await submit(page);
  await page.getByRole('heading', { name: 'Mock provider confirmation' }).waitFor();
  assert.equal(submissions.length, 2);
  checkSubmission(submissions[1]);
  assert.deepEqual(errors, []);
});

test('network failure does not produce site success or erase the draft when returning', async (t) => {
  const { page, submissions, responder } = await setup(t);
  responder((route) => route.abort('failed'));
  await fill(page);
  await page.getByRole('button', { name: 'Send Message', exact: true }).click();
  await page.waitForURL('chrome-error://chromewebdata/', { waitUntil: 'domcontentloaded' });
  assert.equal(await page.getByText(/Your message has been/).count(), 0);
  await page.goBack();
  assert.equal(await page.locator('#message').inputValue(), 'Local mocked fixture. Do not send this inquiry.');
  assert.equal(submissions.length, 1);
});
