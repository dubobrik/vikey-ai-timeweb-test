const {chromium}=require('playwright'),fs=require('node:fs');
const root='https://chelovek-neiroset.ru',slug='/case-sayt-chastnogo-specialista/',url=root+slug,external='https://dubobrik-ruslan-stone-water-art-16db.twc1.net/';
const wanted={title:'Создание сайта для частного специалиста — кейс Vikey AI',description:'Кейс Vikey AI: создание сайта для частного специалиста на примере мастера по камню. Структура, портфолио работ, визуальная подача, мобильная версия и контакты.',h1:'Создание сайта для частного специалиста'};
const out={checks:{},devices:{},errors:[]};
function record(name,pass,details={}){out.checks[name]={pass:!!pass,...details}}
async function test(name,fn){try{await fn()}catch(e){out.errors.push(name+': '+String(e.message||e));record(name,false,{error:String(e.message||e)})}}
async function run(){
const b=await chromium.launch({headless:true,args:['--no-sandbox']});
try{
 const context=await b.newContext({viewport:{width:1440,height:900}});
 try{
  await test('HTTP 200',async()=>{const r=await context.request.get(url,{maxRedirects:0,timeout:40000});record('HTTP 200',r.status()===200,{status:r.status()})});
  await test('Redirect',async()=>{const r=await context.request.get(root+'/case-sayt-chastnogo-specialista',{maxRedirects:0,timeout:40000});const location=r.headers()['location']||'';record('Redirect',[301,302,307,308].includes(r.status())&&(location===slug||location===url),{status:r.status(),location})});
  await test('Sitemap',async()=>{const r=await context.request.get(root+'/sitemap.xml',{timeout:40000});const xml=await r.text();const urls=[...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(m=>m[1].trim());record('Sitemap',r.status()===200&&urls.length===13&&urls.includes(url),{status:r.status(),count:urls.length,caseFound:urls.includes(url)})});
  for(const [key,pageUrl,link] of [['Home to case','/',slug],['Service to case','/sayty-dlya-biznesa/',slug],['Case to service',slug,'/sayty-dlya-biznesa/'],['External stone site',slug,external]]){
   await test(key,async()=>{const p=await context.newPage();try{const r=await p.goto(root+pageUrl,{waitUntil:'domcontentloaded',timeout:40000});const count=await p.locator('a').evaluateAll((nodes,href)=>nodes.filter(n=>n.getAttribute('href')===href).length,link);record(key,r.status()===200&&count>0,{status:r.status(),count})}finally{await p.close()}})
  }
  await test('SEO',async()=>{
   const p=await context.newPage();
   try{
    const r=await p.goto(url,{waitUntil:'domcontentloaded',timeout:40000});
    const d=await p.evaluate(()=>({title:document.title,description:document.querySelector('meta[name="description"]')?.content||'',robots:document.querySelector('meta[name="robots"]')?.content||'',canonical:document.querySelector('link[rel="canonical"]')?.href||'',og:document.querySelector('meta[property="og:url"]')?.content||'',h1:[...document.querySelectorAll('h1')].map(x=>x.textContent.trim().replace(/\s+/g,' ')),faq:document.querySelectorAll('details').length,calc:!!document.querySelector('a[href="/#calc"]'),image:[...document.images].some(i=>i.src.includes('stone-master-preview')),manifest:!!document.querySelector('link[rel="manifest"]')}));
    record('SEO HTTP',r.status()===200,{status:r.status()});
    for(const [k,actual,want] of [['Title',d.title,wanted.title],['Description',d.description,wanted.description],['Robots',d.robots,'index,follow'],['Canonical',d.canonical,url],['og:url',d.og,url]])record(k,actual===want,{actual});
    record('One H1',d.h1.length===1&&d.h1[0]===wanted.h1,{actual:d.h1});
    record('FAQ 6',d.faq===6,{actual:d.faq});record('CTA calculator',d.calc);record('WebP poster',d.image);record('No PWA manifest',!d.manifest);
   }finally{await p.close()}
  });
 }finally{await context.close()}
 for(const [name,w,h] of [['iPhone',390,844],['Android',412,915],['Desktop',1440,900]]){
  await test('Device '+name,async()=>{
   const ctx=await b.newContext({viewport:{width:w,height:h},isMobile:name!=='Desktop',hasTouch:name!=='Desktop',deviceScaleFactor:name==='Desktop'?1:3});
   const p=await ctx.newPage();
   try{
    await p.addInitScript(()=>{window.__cls=0;try{new PerformanceObserver(list=>{for(const item of list.getEntries())if(!item.hadRecentInput)window.__cls+=item.value}).observe({type:'layout-shift',buffered:true})}catch(e){}});
    const first=await p.goto(url,{waitUntil:'domcontentloaded',timeout:40000});await p.waitForTimeout(1600);
    const d=await p.evaluate(async()=>{const img=[...document.images].find(x=>x.src.includes('stone-master-preview'));const h=document.querySelector('h1')?.getBoundingClientRect();return{overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth+1,cls:window.__cls||0,imageLoaded:!!img&&img.complete&&img.naturalWidth>0,h1Fits:!!h&&h.left>=-1&&h.right<=innerWidth+1,sw:'serviceWorker' in navigator?(await navigator.serviceWorker.getRegistrations()).length:0,header:!!document.querySelector('header'),footer:!!document.querySelector('footer')}});
    const refresh=await p.reload({waitUntil:'domcontentloaded',timeout:40000});
    const pass=first.status()===200&&refresh.status()===200&&!d.overflow&&d.cls<=0.1&&d.imageLoaded&&d.h1Fits&&d.sw===0&&d.header&&d.footer;
    out.devices[name]={pass,width:w,height:h,status:first.status(),refresh:refresh.status(),...d};record('Device '+name,pass,out.devices[name]);
   }finally{await ctx.close()}
  })
 }
}finally{await b.close()}
}
(async()=>{try{await run()}catch(e){out.errors.push('fatal: '+String(e.stack||e))}finally{out.passed=Object.keys(out.checks).length>=20&&Object.values(out.checks).every(v=>v.pass)&&Object.keys(out.devices).length===3&&out.errors.length===0;fs.writeFileSync('.github/stone-strict-live-report-temp.json',JSON.stringify(out,null,2)+'\n');console.log('AUDIT='+JSON.stringify({passed:out.passed,failed:Object.entries(out.checks).filter(([k,v])=>!v.pass).map(([k])=>k),errors:out.errors}));process.exitCode=out.passed?0:1}})();