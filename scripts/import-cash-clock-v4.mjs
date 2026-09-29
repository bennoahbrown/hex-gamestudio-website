import {cp,readFile,writeFile,readdir,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';

const source=path.resolve(process.argv[2]||'');
const target=path.resolve('public/cash-clock/live-demo-v4');
const manifestName='cash-clock-v4-release-manifest.json';
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
if(!process.argv[2])throw new Error('Provide the frozen Cash Clock dist directory');
const manifest=JSON.parse(await readFile(path.join(source,manifestName),'utf8'));
const before=await inventory(source);
if(hash(before)!==manifest.artifact.treeSha256ExcludingManifest)throw new Error('Source artifact checksum mismatch');
if(!manifest.sourceInputs?.startsWith('clean')||manifest.build.profile!=='partner-v1'||manifest.scenarioFixture.sha256!=='f2d0f54384923a06025a33ad7c44b99e6c0df0224747f7f1a8b4bd4ca6887f01')throw new Error('V4 release provenance/restriction mismatch');
try{await stat(target);throw new Error('V4 target already exists; do not overwrite an unreviewed artifact');}catch(error){if(error.code!=='ENOENT')throw error;}
await cp(source,target,{recursive:true,errorOnExist:true,force:false});
const index=path.join(target,'index.html'),html=await readFile(index,'utf8');
if(html.includes('<base'))throw new Error('Unexpected source base element');
await writeFile(index,html.replace('<head>','<head>\n    <base href="/cash-clock/live-demo-v4/" />'));
const after=await inventory(target);
const changes=after.filter((f,i)=>f.sha256!==before[i]?.sha256).map(f=>f.path);
if(changes.length!==1||changes[0]!=='index.html')throw new Error('Unexpected import transformation');
console.log(JSON.stringify({release:manifest.release,sourceCommit:manifest.sourceCommit,sourceTreeSha256:hash(before),websiteTreeSha256:hash(after),fileCountExcludingManifest:after.length,bytesExcludingManifest:after.reduce((s,f)=>s+f.bytes,0),transformation:'Only index.html: insert base href /cash-clock/live-demo-v4/; source manifest preserved byte-identically'},null,2));
