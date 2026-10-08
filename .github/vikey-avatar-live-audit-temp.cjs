const { chromium } = require("playwright");
const fs=require("node:fs");
const origin="https://chelovek-neiroset.ru", path="/case-cifrovoy-avatar/", url=origin+path;
const expected={title:"Создание цифрового аватара для личного бренда — кейс Vikey AI",desc:"Кейс Vikey AI: создание цифрового аватара для личного бренда — идея образа, визуальный стиль, голос, AI-видео и подготовка ролика для сайта и контента."};
const report={timestamp:new Date().toISOString(),url,checks:{},devices:{},errors:[]};
function put(name,pass,detail={}){report.checks[name]={pass:!!pass,...detail};}
async function test(name,fn){try{await fn()}catch(e){put(name,false,{error:String(e.message||e)});report.errors.push(name+": "+String(e.message||e));}}
async function main(){
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
 const context=await browser.newContext({viewport:{width:1440,height:900}});
 const request=context.request;
 await test("http200",async()=>{const r=await request.get(url,{maxRedirects:0,timeout:35000});put("http200",r.status()===200,{status:r.status()});});
 await test("redirect",async()=>{const r=await request.get(origin+"/case-cifrovoy-avatar",{maxRedirects:0,timeout:35000});const location=r.headers()["location"]||"";put("redirect",[301,302,307,308].includes(r.status())&&(location===path||location===url),{status:r.status(),location});});
 await test("sitemap",async()=>{const r=await request.get(origin+"/sitemap.xml",{timeout:35000});const xml=await r.text();const urls=[...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(m=>m[1].trim());put("sitemap",r.status()===200&&urls.length===12&&urls.includes(url),{status:r.status(),count:urls.length,caseFound:urls.includes(url)});});
 for(const [name,route,link] of [["homeToCase","/",path],["serviceToCase","/ai-video-dlya-biznesa/",path],["caseToService",path,"/ai-video-dlya-biznesa/"]]){
 await test(name,async()=>{const p=await context.newPage();try{const r=await p.goto(origin+route,{waitUntil:"domcontentloaded",timeout:40000});const count=await p.locator('a[href="'+link+'"]').count();put(name,r.status()===200&&count>0,{status:r.status(),count});}finally{await p.close();}});
 }
 await test("metadata",async()=>{const p=await context.newPage();try{const r=await p.goto(url,{waitUntil:"domcontentloaded",timeout:40000});const data=await p.evaluate(()=>({title:document.title,description:document.querySelector('meta[name="description"]')?.getAttribute("content")||"",robots:document.querySelector('meta[name="robots"]')?.getAttribute("content")||"",canonical:document.querySelector('link[rel="canonical"]')?.href||"",ogUrl:document.querySelector('meta[property="og:url"]')?.getAttribute("content")||"",h1:[...document.querySelectorAll("h1")].map(x=>x.textContent.trim().replace(/\s+/g," "))}));put("metadata",r.status()===200,{status:r.status()});put("title",data.title===expected.title,{actual:data.title});put("description",data.description===expected.desc,{actual:data.description});put("robots",data.robots==="index,follow",{actual:data.robots});put("canonical",data.canonical===url,{actual:data.canonical});put("ogUrl",data.ogUrl===url,{actual:data.ogUrl});put("h1",data.h1.length===1&&data.h1[0]==="Создание цифрового аватара для личного бренда",{count:data.h1.length,actual:data.h1});}finally{await p.close();}});
 await context.close();
 for(const [name,w,h] of [["iPhone",390,844],["Android",412,915],["Desktop",1440,900]]){
 await test("device-"+name,async()=>{
 const ctx=await browser.newContext({viewport:{width:w,height:h},isMobile:name!=="Desktop",hasTouch:name!=="Desktop",deviceScaleFactor:name==="Desktop"?1:3});
 const p=await ctx.newPage();let videoRequests=0;
 p.on("request",r=>{if(/digital-avatar.*\.mp4/.test(r.url()))videoRequests++;});
 try{
 await p.addInitScript(()=>{window.__layoutShift=0;try{new PerformanceObserver(list=>{for(const entry of list.getEntries())if(!entry.hadRecentInput)window.__layoutShift+=entry.value}).observe({type:"layout-shift",buffered:true})}catch(e){}});
 const first=await p.goto(url,{waitUntil:"domcontentloaded",timeout:45000});await p.waitForTimeout(1800);
 const before=await p.evaluate(()=>{const img=document.querySelector('#result-video img');const hero=document.querySelector('main section img');return {overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth+1,documentWidth:document.documentElement.scrollWidth,viewportWidth:document.documentElement.clientWidth,cls:window.__layoutShift||0,posterPresent:!!img&&img.complete&&img.naturalWidth>0,heroPoster:!!hero&&hero.complete&&hero.naturalWidth>0,videoBefore:document.querySelectorAll("video").length,h1Count:document.querySelectorAll("h1").length}});
 const deferred=videoRequests===0&&before.videoBefore===0;
 const btn=p.getByRole("button",{name:"Посмотреть видео"});const hasButton=await btn.count()>0;if(hasButton)await btn.click({timeout:10000});
 await p.waitForTimeout(850);
 const after=await p.locator("video").count();
 const reloaded=await p.reload({waitUntil:"domcontentloaded",timeout:45000});
 const result={width:w,height:h,http:first.status(),refresh:reloaded.status(),...before,deferred,buttonPresent:hasButton,videoAfterClick:after>0,videoRequestsAfterClick:videoRequests};
 result.pass=result.http===200&&result.refresh===200&&!result.overflow&&result.cls<=0.1&&result.posterPresent&&result.heroPoster&&result.deferred&&result.buttonPresent&&result.videoAfterClick&&result.h1Count===1;
 report.devices[name]=result;put("device-"+name,result.pass,result);
 }finally{await ctx.close();}
 });
 }
 }finally{await browser.close()}
}
(async()=>{try{await main()}catch(e){report.errors.push("fatal: "+String(e.stack||e))}finally{report.passed=Object.values(report.checks).length>0&&Object.values(report.checks).every(x=>x.pass)&&report.errors.length===0;fs.writeFileSync(".github/vikey-avatar-live-audit-report-temp.json",JSON.stringify(report,null,2)+"\n");console.log("LIVE_AUDIT="+JSON.stringify({passed:report.passed,failed:Object.entries(report.checks).filter(([k,v])=>!v.pass).map(([k])=>k),errors:report.errors}));process.exitCode=report.passed?0:1;}})();
