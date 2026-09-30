# Contact form

The contact page is a server-rendered native HTML form. It posts directly to
`https://formsubmit.co/benbrown@hex-perpetual.com`; there is no local API, mail key
or sending service SDK. FormSubmit receives the visitor's details and message.
The page discloses this and always offers the existing direct-email link.

Fields `name`, `email`, `organization` and `message` are named and required.
Browser validation checks email format, non-whitespace name/organization and
length limits. These are browser checks, not a claim of server-side validation.
The `email` field supplies FormSubmit's documented Reply-To behavior. The subject
is `Hex Game Studio website inquiry`, with the table email template.

CAPTCHA remains enabled by FormSubmit's default: there is no `_captcha=false`.
No autoresponder, CC, blacklist or honeypot is configured. FormSubmit handles its
verification, activation, thank-you and error pages; the site never fabricates a
success message or redirects past them. The form tells visitors to finish the
next page's spam check and use direct email if the flow does not complete.

The site form submits even without site JavaScript. FormSubmit's CAPTCHA may
require JavaScript on its own page; direct email remains available. Native browser
history retained the draft in local Chromium tests after mocked provider and
network errors. There is no application retry, idempotency guarantee, persistent
draft storage or custom delivery-status tracking. A deliberate resubmission may
produce another message; provider acceptance does not prove inbox receipt.

## Verification without sending

```bash
npm test
npm run build
npm run start -- --hostname 127.0.0.1 --port 4173
# In another terminal, with Playwright and Chromium installed:
npm run test:contact:browser
```

`PLAYWRIGHT_MODULE` may point to an existing `playwright/index.mjs` from a tooling
runtime. `CONTACT_TEST_URL` defaults to `http://127.0.0.1:4173` and rejects external
hosts. Every FormSubmit POST is intercepted and every other external browser
request is blocked. The suite covers native validation, exact encoded fields,
default CAPTCHA, no early success, no-JavaScript mobile submission, provider
failure, network failure, browser Back/draft restoration and explicit retry.
`CONTACT_SCREENSHOT_DIR` optionally saves desktop/mobile evidence.

`npm test` also verifies that the existing Cash Clock V4 and archived V1 assets
remain unchanged. Repository-wide ESLint has existing failures outside the
contact page; changed-source lint and production build are checked separately.

## Activation and live verification

Ben approved this provider, publication and a labeled activation/test submission
on September 30, 2026. FormSubmit requires a one-time email activation. Its
confirmation email must be acted on by Ben; neither delivery nor activation is
assumed from a successful page load. Keep CAPTCHA enabled. If CAPTCHA requires
human completion, pause rather than bypass or solve it without authorization.

After production verification, submit one clearly labeled activation/test inquiry
to the fixed recipient. Report the provider's exact outcome and ask Ben to confirm
and activate the email. After activation, verify one labeled test's acceptance and
ask Ben to confirm inbox receipt. No paid service, account credentials or new
ongoing access are required by this implementation.

Official references: [setup and activation](https://formsubmit.co/),
[named fields, Reply-To, CAPTCHA and confirmation behavior](https://formsubmit.co/documentation).
