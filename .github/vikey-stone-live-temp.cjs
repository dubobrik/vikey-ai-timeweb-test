const {chromium}=require("playwright");
const fs=require("node:fs");
const base="https://chelovek-neiroset.ru";
const slug="/case-sayt-chastnogo-specialista/";
const url=base+slug;
const external="https://dubobrik-ruslan-stone-water-art-16db.twc1.net/";
const title="Создание сайта для частного специалиста — кейс Vikey AI";
const description="Кейс Vikey AI: создание сайта для частного специалиста на примере мастера по камню. Структура, портфолио работ, визуальная подача, мобильная версия и контакты.";
const routes=["/","/privacy","/sayty-dlya-biznesa/","/ii-assistent-dlya-biznesa/","/telegram-boty-dlya-biznesa/","/avtomatizaciya-biznesa-ai/","/ai-video-dlya-biznesa/","/upakovka-proekta/","/case-sayt-gostevye-domiki/","/case-b2b-horeca/","/case-ai-telegram-bot/","/case-cifrovoy-avatar/",slug];
const out={checkedAt:new Date().toISOString(),checks:{},devices:{},regressions:[],errors:[]};
const check=(key,pass,data={})=>out.checks[key]={pass:!!pass,...data};
const attempt=async(k,fn)=>{try{await fn()}catch(e){out.errors.push(k+": "+String(e.message||e));check(k,false,{error:String(e.message||e)})}};
async function main(){
 const b=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
 const c=await b.newContext({viewport:{width:1440,height:900}});
 const rq=c.request;
 await attempt("http",async()=>{const r=await rq.get(url,{maxRedirects:0,timeout:40000});check("http",r.status()===200,{status:r.status()})});
 await attempt("redirect",async()=>{const r=await rq.get(base+"/case-sayt-chastnogo-specialista",{maxRedirects:0,timeout:40000});const loc=r.headers()["location"]||"";check("redirect",[301,302,307,308].includes(r.status())&&(loc===slug||loc===url),{status:r.status(),location:loc})});
 await attempt("sitemap",async()=>{const r=await rq.get(base+"/sitemap.xml",{timeout:40000});const xml=await r.text();const urls=[...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(m=>m[1].trim());check("sitemap",r.status()===200&&urls.length===13&&urls.includes(url),{status:r.status(),count:urls.length,caseFound:urls.includes(url)})});
 for(const [key,path,href] of [["homeToCase","/",slug],["serviceToCase","/sayty-dlya-biznesa/",slug],["caseToService",slug,"/sayty-dlya-biznesa/"],["caseToExternal",slug,external]]){
 await attempt(key,async()=>{const p=await c.newPage();try{const r=await p.goto(base+path,{waitUntil:"domcontentloaded",timeout:40000});const n=await p.locator("a").evaluateAll((els,link)=>els.filter(el=>el.getAttribute("href")===link).length,href);check(key,r.status()===200&&n>0,{status:r.status(),count:n})}finally{await p.close()}})}
 await attempt("seo",async()=>{const p=await c.newPage();try{const r=await p.goto(url,{waitUntil:"domcontentloaded",timeout:40000});const d=await p.evaluate(()=>({title:document.title,description:document.querySelector('meta[name="description"]')?.content||"",robots:document.querySelector('meta[name="robots"]')?.content||"",canonical:document.querySelector('link[rel="canonical"]')?.href||"",ogUrl:document.querySelector('meta[property="og:url"]')?.content||"",h1:[...document.querySelectorAll("h1")].map(x=>x.textContent.trim().replace(/\s+/g," ")),faq:document.querySelectorAll("details").length,calc:!!document.querySelector('a[href="/#calc"]'),img:!!document.querySelector('main section img')}));check("seo",r.status()===200,{status:r.status()});for(const [key,val,exp] of [["title",d.title,title],["description",d.description,description],["robots",d.robots,"index,follow"],["canonical",d.canonical,url],["ogUrl",d.ogUrl,url]])check(key,val===exp,{actual:val});check("h1",d.h1.length===1&&d.h1[0]==="Создание сайта для частного специалиста",{actual:d.h1});check("faq",d.faq===6,{count:d.faq});check("cta",d.calc);check("preview",d.img)}finally{await p.close()}})}
 for(const path of routes)await attempt("regression:"+path,async()=>{const r=await rq.get(base+path,{timeout:40000});out.regressions.push({path,status:r.status(),pass:r.status()===200})});
 await c.close();
 for(const [device,w,h] of [["iPhone",390,844],["Android",412,915],["Desktop",1440,900]]){
 await attempt("device:"+device,async()=>{
 const ctx=await b.newContext({viewport:{width:w,height:h},isMobile:device!=="Desktop",hasTouch:device!=="Desktop",deviceScaleFactor:device==="Desktop"?1:3});
 const p=await ctx.newPage();
 try{
 await p.addInitScript(()=>{window.__cls=0;try{new PerformanceObserver(list=>{for(const e of list.getEntries())if(!e.hadRecentInput)window.__cls+=e.value}).observe({type:"layout-shift",buffered:true})}catch(e){}});
 const r=await p.goto(url,{waitUntil:"domcontentloaded",timeout:40000});await p.waitForTimeout(1800);
 const d=await p.evaluate(()=>{const im=document.querySelector("main section img");const h=document.querySelector("h1");const rect=h?.getBoundingClientRect();return {overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth+1,cls:window.__cls||0,imageReady:!!im&&im.complete&&im.naturalWidth>0,oneH1:document.querySelectorAll("h1").length===1,h1Fits:!!rect&&rect.left>=-1&&rect.right<=innerWidth+1,faqCount:document.querySelectorAll("details").length,ctaCount:document.querySelectorAll('a[href="/#calc"],a[href="/#contact"]').length,header:!!document.querySelector("header"),footer:!!document.querySelector("footer")}});
 const first=p.locator("details").first();let faqWorks=false;if(await first.count()){await first.locator("summary").click();faqWorks=await first.evaluate(e=>e.open)}
 const reload=await p.reload({waitUntil:"domcontentloaded",timeout:40000});
 const pass=r.status()===200&&reload.status()===200&&!d.overflow&&d.cls<=0.1&&d.imageReady&&d.oneH1&&d.h1Fits&&faqWorks&&d.ctaCount>0&&d.header&&d.footer;
 out.devices[device]={pass,status:r.status(),refresh:reload.status(),width:w,height:h,faqWorks,...d};check("device:"+device,pass,out.devices[device]);
 }finally{await ctx.close()}
 });
 }
 }finally{await b.close()}
}
(async()=>{try{await main()}catch(e){out.errors.push("fatal: "+String(e.stack||e))}finally{out.passed=Object.values(out.checks).length>0&&Object.values(out.checks).every(x=>x.pass)&&out.regressions.length===routes.length&&out.regressions.every(x=>x.pass)&&out.errors.length===0;fs.writeFileSync(".github/vikey-stone-live-report-temp.json",JSON.stringify(out,null,2)+"\n");console.log(JSON.stringify({passed:out.passed,failed:Object.entries(out.checks).filter(([k,v])=>!v.pass).map(([k])=>k),errors:out.errors}));process.exitCode=out.passed?0:1;}})();
