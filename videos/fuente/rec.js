const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const keys=process.argv.slice(2);
for(const k of keys){const c=await b.newContext({viewport:{width:960,height:540},recordVideo:{dir:'raw/'+k,size:{width:960,height:540}}});
const p=await c.newPage();const e=[];p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+__dirname+'/tuto.html');const t=Date.now();await p.evaluate(k=>correr(k),k);await p.waitForFunction(()=>window.listo,null,{timeout:120000});
const v=p.video();await c.close();fs.renameSync(await v.path(),'raw/'+k+'.webm');console.log(k,((Date.now()-t)/1000).toFixed(1)+'s',e)}
await b.close()})()
