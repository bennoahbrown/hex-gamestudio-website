import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const dir=path.join(root,'public/cash-clock/v5-demo');
const sha=data=>createHash('sha256').update(data).digest('hex');
const manifest=JSON.parse(await readFile(path.join(dir,'cash-clock-v5-release-manifest.json')));
async function list(dir,prefix=''){
 const result=[];for(const e of await readdir(dir,{withFileTypes:true})){
  const name=path.posix.join(prefix,e.name);if(e.isDirectory())result.push(...await list(path.join(dir,e.name),name));else result.push(name);
 }return result.sort();
}
test('V5 is the exact frozen artifact except documented HTML metadata',async()=>{
 assert.equal(manifest.sourceCommit,'1055c98ac5611349817460ba0c8f9cac8b57f254');
 assert.equal(manifest.files.length,341);
 assert.deepEqual(await list(dir),[...manifest.files.map(f=>f.path),'cash-clock-v5-release-manifest.json'].sort());
 for(const f of manifest.files){
  let bytes=await readFile(path.join(dir,f.path));
  if(f.path==='index.html'){
   const html=bytes.toString();assert.match(html,/<base href="\/cash-clock\/v5-demo\/" \/>/);assert.match(html,/noindex,nofollow/);
   bytes=Buffer.from(html.replace('\n    <base href="/cash-clock/v5-demo/" />','').replace('<title>Cash Clock V5 Demo</title>','<title>Cash Clock V5 — Local Weight Review</title>'));
  }
  assert.equal(bytes.length,f.bytes,f.path);assert.equal(sha(bytes),f.sha256,f.path);
 }
 assert.equal(sha(manifest.files.map(f=>`${f.path}\0${f.sha256}\n`).join('')),manifest.artifact.treeSha256ExcludingManifest);
 assert.ok(!manifest.files.some(f=>/\.(psd|tps|php|map|ini)$/.test(f.path)));
 assert.equal(sha(await readFile(path.join(dir,manifest.scenarioFixture.file))),manifest.scenarioFixture.sha256);
});
test('V5 publication preserves current production contact implementation',async()=>{
 const name='src/app/(main)/contact/page.js';
 assert.deepEqual(await readFile(path.join(root,name)),execFileSync('git',['show',`1c3e36da79935903ca79e32e0a20bb7c4cae2fd3:${name}`],{cwd:root}));
});
