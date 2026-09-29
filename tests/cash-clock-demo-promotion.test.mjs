import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir,access} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import path from 'node:path';
import config from '../next.config.mjs';

const baseline='14253966956c29607ae6aee16888cc4033c9c43b';
const root=path.resolve(import.meta.dirname,'..');
async function files(dir,relative=''){
 const result=[];
 for(const entry of await readdir(dir,{withFileTypes:true})){
  if(entry.name==='.DS_Store')continue;
  const rel=path.posix.join(relative,entry.name),full=path.join(dir,entry.name);
  if(entry.isDirectory())result.push(...await files(full,rel));else result.push(rel);
 }
 return result.sort();
}
for(const [oldName,newName,count] of [['live-demo','v1-demo',426],['live-demo-v4','live-demo',402]]){
 test(`${newName} preserves every frozen ${oldName} byte except its base href`,async()=>{
  const prefix=`public/cash-clock/${oldName}/`,newRoot=path.join(root,'public/cash-clock',newName);
  const oldFiles=execFileSync('git',['ls-tree','-r','--format=%(objectname) %(path)',baseline,'--',prefix],{cwd:root,encoding:'utf8'}).trim().split('\n').map(line=>({sha:line.slice(0,40),rel:line.slice(41+prefix.length)}));
  assert.equal(oldFiles.length,count);assert.deepEqual(await files(newRoot),oldFiles.map(f=>f.rel).sort());
  for(const file of oldFiles){
   const actual=await readFile(path.join(newRoot,file.rel));
   if(file.rel==='index.html'){
    const before=execFileSync('git',['show',`${baseline}:${prefix}index.html`],{cwd:root,encoding:'utf8'});
    assert.equal(actual.toString(),before.replace(`<base href="/cash-clock/${oldName}/" />`,`<base href="/cash-clock/${newName}/" />`));
   }else assert.equal(createHash('sha1').update(`blob ${actual.length}\0`).update(actual).digest('hex'),file.sha,file.rel);
  }
 });
}
test('only canonical live and archived V1 demo entry rewrites remain',async()=>{
 assert.deepEqual(await config.rewrites(),[
  {source:'/cash-clock/live-demo',destination:'/cash-clock/live-demo/index.html'},
  {source:'/cash-clock/v1-demo',destination:'/cash-clock/v1-demo/index.html'},
 ]);
 for(const retired of ['v2-demo','live-demo-v2','live-demo-v3','live-demo-v4']){
  await assert.rejects(access(path.join(root,'public/cash-clock',retired)),{code:'ENOENT'});
 }
 const landing=await readFile(path.join(root,'src/app/(main)/cash-clock/demo/page.js'),'utf8');
 assert.match(landing,/const LIVE_DEMO_URL = "\/cash-clock\/live-demo"/);
});
