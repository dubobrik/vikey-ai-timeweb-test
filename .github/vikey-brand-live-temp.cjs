const {chromium}=require('playwright'),fs=require('node:fs');
const base='https://chelovek-neiroset.ru',slug='/case-sayt-lichnogo-brenda/',url=base+slug,external='https://savanadivik.ru/';
const expected={title:'Создание сайта для личного бренда — кейс Vikey AI',description:'Кейс Vikey AI: создание сайта для личного бренда на примере проекта личных консультаций. Структура, атмосферная визуальная подача, услуги, мобильная версия и контакты.',h1:'Создание сайта для личного бренда'};
const routes=['/','/privacy','/sayty-dlya-biznesa/','/ii-assistent-dlya-biznesa/','/telegram-boty-dlya-biznesa/','/avtomatizaciya-biznesa-ai/','/ai-video-dlya-biznesa/','/upakovka-proekta/','/case-sayt-gostevye-domiki/','/case-b2b-horeca/','/case-ai-telegram-bot/','/case-cifrovoy-avatar/','/case-sayt-chastnogo-specialista/',slug];
const report={timestamp:new Date().toISOString(),checks:{},devices:{},regressions:[],errors:[]};
function put(n,pass,data={}){report.checks[n]={pass:!!pass,...data}}
async function test(n,fn){try{await fn()}catch(e){report.errors.push(n+': '+String(e.message||e));put(n,false,{error:String(e.message||e)})}}
async function run(){
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
try{
 const ctx=await browser.newContext({viewport:{width:1440,height:900}});
 try{
  await test('HTTP',async()=>{const r=await ctx.request.get(url,{maxRedirects:0,timeout:35000});put('HTTP',r.status()===200,{status:r.status()})});
  await test('Redirect',async()=>{const r=await ctx.request.get(base+'/case-sayt-lichnogo-brenda',{maxRedirects:0,timeout:35000});const loc=r.headers()['location']||'';put('Redirect',[301,302,307,308].includes(r.status())&&(loc===slug||loc===url),{status:r.status(),location:loc})});
  await test('Sitemap',async()=>{const r=await ctx.request.get(base+'/sitemap.xml',{timeout:35000});const s=await r.text();const urls=[...s.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(m=>m[1].trim());put('Sitemap',r.status()===200&&urls.length===14&&urls.includes(url),{status:r.status(),count:urls.length,hasCase:urls.includes(url)})});
  for(const [key,route,href] of [['Home to case','/',slug],['Service to case','/sayty-dlya-biznesa/',slug],['Case to service',slug,'/sayty-dlya-biznesa/'],['External site',slug,external]]){
   await test(key,async()=>{const p=await ctx.newPage();try{const r=await p.goto(base+route,{waitUntil:'domcontentloaded',timeout:40000});const count=await p.locator('a').evaluateAll((elements,link)=>elements.filter(a=>a.getAttribute('href')===link).length,href);put(key,r.status()===200&&count>0,{status:r.status(),links:count})}finally{await p.close()}})
  }
  await test('Metadata',async()=>{const p=await ctx.newPage();try{const r=await p.goto(url,{waitUntil:'domcontentloaded',timeout:40000});const d=await p.evaluate(()=>({title:document.title,description:document.querySelector('meta[name="description"]')?.content||'',robots:document.querySelector('meta[name="robots"]')?.content||'',canonical:document.querySelector('link[rel="canonical"]')?.href||'',ogUrl:document.querySelector('meta[property="og:url"]')?.content||'',h1:[...document.querySelectorAll('h1')].map(x=>x.textContent.trim().replace(/\s+/g,' ')),faq:document.querySelectorAll('details').length,calc:!!document.querySelector('a[href="/#calc"]'),webp:[...document.images].some(i=>i.src.includes('savana-site-preview')&&i.src.toLowerCase().includes('webp')),manifest:!!document.querySelector('link[rel="manifest"]')}));put('Metadata',r.status()===200);for(const [k,v,w] of [['Title',d.title,expected.title],['Description',d.description,expected.description],['Robots',d.robots,'index,follow'],['Canonical',d.canonical,url],['og:url',d.ogUrl,url]])put(k,v===w,{actual:v});put('H1',d.h1.length===1&&d.h1[0]===expected.h1,{actual:d.h1});put('FAQ',d.faq===6,{count:d.faq});put('CTA',d.calc);put('WebP',d.webp);put('No manifest',!d.manifest)}finally{await p.close()}})
  for(const route of routes){await test('Regression '+route,async()=>{const r=await ctx.request.get(base+route,{timeout:35000});report.regressions.push({route,status:r.status(),pass:r.status()===200});put('Regression '+route,r.status()===200,{status:r.status()})})}
 }finally{await ctx.close()}
 for(const [name,w,h] of [['iPhone',390,844],['Android',412,915],['Desktop',1440,900]]){
 await test('Device '+name,async()=>{
  const context=await browser.newContext({viewport:{width:w,height:h},isMobile:name!=='Desktop',hasTouch:name!=='Desktop',deviceScaleFactor:name==='Desktop'?1:3});
  const p=await context.newPage();
  try{
   await p.addInitScript(()=>{window.__cls=0;try{new PerformanceObserver(l=>{for(const e of l.getEntries())if(!e.hadRecentInput)window.__cls+=e.value}).observe({type:'layout-shift',buffered:true})}catch(e){}});
   const r=await p.goto(url,{waitUntil:'domcontentloaded',timeout:40000});await p.waitForTimeout(1800);
   const d=await p.evaluate(async()=>{const img=[...document.images].find(i=>i.src.includes('savana-site-preview'));const rect=document.querySelector('h1')?.getBoundingClientRect();const ir=img?.getBoundingClientRect();const touchButtons=[...document.querySelectorAll('a[href="/#calc"],a[href="/#contact"]')];return {overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth+1,cls:window.__cls||0,imageLoaded:!!img&&img.complete&&img.naturalWidth>0,imageFits:!!ir&&ir.width>0&&ir.left>=-1&&ir.right<=innerWidth+1,h1Fits:!!rect&&rect.left>=-1&&rect.right<=innerWidth+1,faqCount:document.querySelectorAll('details').length,ctaCount:touchButtons.length,smallButtons:touchButtons.some(x=>x.getBoundingClientRect().height<36),header:!!document.querySelector('header'),footer:!!document.querySelector('footer'),sw:'serviceWorker' in navigator?(await navigator.serviceWorker.getRegistrations()).length:0}});
   let faqWorks=false;const details=p.locator('details').first();if(await details.count()){await details.locator('summary').click();faqWorks=await details.evaluate(el=>el.open)}
   const refresh=await p.reload({waitUntil:'domcontentloaded',timeout:40000});
   const ok=r.status()===200&&refresh.status()===200&&!d.overflow&&d.cls<=0.1&&d.imageLoaded&&d.imageFits&&d.h1Fits&&d.faqCount===6&&faqWorks&&d.ctaCount>0&&!d.smallButtons&&d.header&&d.footer&&d.sw===0;
   report.devices[name]={pass:ok,status:r.status(),refresh:refresh.status(),width:w,height:h,faqWorks,...d};put('Device '+name,ok,report.devices[name]);
  }finally{await context.close()}
 })
 }
}finally{await browser.close()}
}
(async()=>{try{await run()}catch(e){report.errors.push('fatal: '+String(e.stack||e))}finally{report.passed=Object.keys(report.checks).length>=30&&Object.values(report.checks).every(x=>x.pass)&&report.regressions.length===routes.length&&Object.keys(report.devices).length===3&&report.errors.length===0;fs.writeFileSync('.github/vikey-brand-live-report-temp.json',JSON.stringify(report,null,2)+'\n');console.log('AUDIT='+JSON.stringify({passed:report.passed,failed:Object.entries(report.checks).filter(([k,v])=>!v.pass).map(([k])=>k),errors:report.errors}));process.exitCode=report.passed?0:1}})();
