import {cp,readFile,writeFile,readdir,stat,mkdir,rename} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import path from 'node:path';
const source=path.resolve(process.argv[2]||'');
const target=path.resolve('public/cash-clock/v5-demo');
const manifestName='cash-clock-v5-release-manifest.json';
const sha=data=>createHash('sha256').update(data).digest('hex');
async function inventory(dir,base=''){
 const files=[];
 for(const e of await readdir(dir,{withFileTypes:true})){
  const rel=path.posix.join(base,e.name),full=path.join(dir,e.name);
  if(e.isDirectory())files.push(...await inventory(full,rel));
  else if(rel!==manifestName)files.push({path:rel,bytes:(await stat(full)).size,sha256:sha(await readFile(full))});
 }
 return files.sort((a,b)=>a.path<b.path?-1:a.path>b.path?1:0);
}
const hash=files=>sha(files.map(f=>`${f.path}\0${f.sha256}\n`).join(''));
assert.ok(process.argv[2],'Provide the frozen V5 artifact directory');
const manifest=JSON.parse(await readFile(path.join(source,manifestName),'utf8'));
const before=await inventory(source);
assert.ok(['cash-clock-v5-2026-09-30','cash-clock-v5-2026-10-01'].includes(manifest.release));
assert.equal(hash(before),manifest.artifact.treeSha256ExcludingManifest);
assert.deepEqual(before,manifest.files);
assert.match(manifest.sourceInputs,/^clean/);
assert.equal(manifest.build.profile,'partner-v1');
assert.equal(manifest.scenarioFixture.sha256,'f2d0f54384923a06025a33ad7c44b99e6c0df0224747f7f1a8b4bd4ca6887f01');
const releaseDir=path.resolve('.codex-context/releases',manifest.release);
const staging=path.join(releaseDir,'import-candidate'),backup=path.join(releaseDir,'previous-v5-demo');
for(const folder of [staging,backup])try{await stat(folder);throw new Error(`Already exists: ${folder}`);}catch(e){if(e.code!=='ENOENT')throw e;}
let replacing=false;
try{
 await stat(target);replacing=true;
 const prior=JSON.parse(await readFile(path.join(target,manifestName),'utf8'));
 assert.equal(process.argv[3],`--replace=${prior.release}`,'Explicit previous release required');
 const expected=await Promise.all(prior.files.map(async file=>{
  const data=await readFile(path.join(target,file.path));
  const canonical=file.path==='index.html'?Buffer.from(data.toString().replace('\n    <base href="/cash-clock/v5-demo/" />','').replace('<title>Cash Clock V5 Demo</title>','<title>Cash Clock V5 — Local Weight Review</title>')):data;
  assert.equal(sha(canonical),file.sha256,`Existing artifact drift: ${file.path}`);
  return {path:file.path,bytes:data.length,sha256:sha(data)};
 }));
 assert.deepEqual(await inventory(target),expected.sort((a,b)=>a.path<b.path?-1:a.path>b.path?1:0));
}catch(e){if(e.code!=='ENOENT')throw e;else if(replacing)throw e;}
const html=await readFile(path.join(source,'index.html'),'utf8');
assert.ok(!html.includes('<base'));
assert.ok(html.includes('<title>Cash Clock V5 — Local Weight Review</title>'));
await mkdir(releaseDir,{recursive:true});
await cp(source,staging,{recursive:true,errorOnExist:true,force:false});
await writeFile(path.join(staging,'index.html'),html.replace('<head>','<head>\n    <base href="/cash-clock/v5-demo/" />').replace('<title>Cash Clock V5 — Local Weight Review</title>','<title>Cash Clock V5 Demo</title>'));
const after=await inventory(staging);
assert.deepEqual(after.filter((f,i)=>f.sha256!==before[i]?.sha256).map(f=>f.path),['index.html']);
if(replacing)await rename(target,backup);
await rename(staging,target);
const receipt={release:manifest.release,sourceCommit:manifest.sourceCommit,sourceTreeSha256:hash(before),websiteTreeSha256:hash(after),fileCountExcludingManifest:after.length,bytesExcludingManifest:after.reduce((s,f)=>s+f.bytes,0),backup:replacing?backup:null,transformation:'Only index.html: insert V5 base href and replace Local Weight Review title. No JS, CSS, image, audio, fixture or manifest edits.'};
await writeFile(path.join(releaseDir,'import-result.json'),JSON.stringify(receipt,null,2)+'\n');
console.log(JSON.stringify(receipt,null,2));
