const {chromium}=require('playwright'),fs=require('node:fs');
const host='https://chelovek-neiroset.ru',slug='/case-ai-video-iz-foto/',url=host+slug;
const expectedTitle='Создание видео из фото с помощью ИИ — кейс Vikey AI',expectedDesc='Кейс Vikey AI: создание двух AI-видео из исходных фотографий. Показываю формат «исходник → результат» и возможности нейросетей для динамичной подачи визуального материала.';
const report={timestamp:new Date().toISOString(),passed:false,checks:{},devices:{},errors:[]};
function check(k,v,data={}){report.checks[k]={passed:!!v,...data}}
async function attempt(k,fn){try{await fn()}catch(e){report.errors.push(k+': '+String(e.stack||e));check(k,false,{error:String(e.message||e)})}}
async function main(){const browser=await chromium.launch({headless:true,args:['--no-sandbox']});try{
 const api=await browser.newContext();
 await attempt('HTTP',async()=>{let r=await api.request.get(url,{timeout:45000,maxRedirects:0});check('HTTP',r.status()===200,{status:r.status()})});
 await attempt('Redirect',async()=>{let r=await api.request.get(host+'/case-ai-video-iz-foto',{timeout:45000,maxRedirects:0}),loc=r.headers().location||'';check('Redirect',[301,302,307,308].includes(r.status())&&(loc===slug||loc===url),{status:r.status(),location:loc})});
 await attempt('Sitemap',async()=>{let r=await api.request.get(host+'/sitemap.xml',{timeout:45000}),xml=await r.text(),urls=[...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(x=>x[1].trim());check('Sitemap',r.status()===200&&urls.length===16&&urls.includes(url),{status:r.status(),urlCount:urls.length,hasCase:urls.includes(url)})});
 for(const [label,path,href] of [['Home to case','/',slug],['AI video to case','/ai-video-dlya-biznesa/',slug],['AI creatives to case','/ai-kreativy-dlya-biznesa/',slug],['Case to AI video',slug,'/ai-video-dlya-biznesa/'],['Case to AI creatives',slug,'/ai-kreativy-dlya-biznesa/']])await attempt(label,async()=>{const p=await api.newPage();try{const r=await p.goto(host+path,{waitUntil:'domcontentloaded',timeout:45000});const links=await p.locator('a').evaluateAll((aa,target)=>aa.filter(a=>a.getAttribute('href')===target).length,href);check(label,r.status()===200&&links>0,{status:r.status(),links})}finally{await p.close()}});
 await api.close();
 for(const [device,width,height,isMobile] of [['iPhone',390,844,true],['Android',412,915,true],['Desktop',1440,900,false]])await attempt('Browser '+device,async()=>{
  const ctx=await browser.newContext({viewport:{width,height},isMobile,hasTouch:isMobile,deviceScaleFactor:isMobile?3:1});
  const p=await ctx.newPage();const mp4Requests=[];const responses=[];
  p.on('request',r=>{if(/\/assets\/ai-video-result-0[12]\.mp4(?:\?|$)/.test(r.url()))mp4Requests.push(r.url())});
  p.on('response',r=>{if(/\/assets\/ai-video-result-0[12]\.mp4(?:\?|$)/.test(r.url()))responses.push({url:r.url(),status:r.status()})});
  try{
   await p.addInitScript(()=>{window.__cls=0;window.__layout=[];try{new PerformanceObserver(list=>{for(const e of list.getEntries())if(!e.hadRecentInput){window.__cls+=e.value;window.__layout.push(e.value)}}).observe({type:'layout-shift',buffered:true})}catch(e){}});
   const response=await p.goto(url,{waitUntil:'domcontentloaded',timeout:45000});await p.waitForTimeout(1100);
   const seo=await p.evaluate(()=>({title:document.title,description:document.querySelector('meta[name="description"]')?.content||'',robots:document.querySelector('meta[name="robots"]')?.content||'',canonical:document.querySelector('link[rel="canonical"]')?.href||'',ogUrl:document.querySelector('meta[property="og:url"]')?.content||'',h1:[...document.querySelectorAll('h1')].map(e=>e.textContent.trim().replace(/\s+/g,' ')),faq:document.querySelectorAll('details').length,cta:!!document.querySelector('a[href="/#calc"]'),footer:!!document.querySelector('footer'),manifest:!!document.querySelector('link[rel="manifest"]'),videoElements:document.querySelectorAll('video').length,overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth+1,swSupported:'serviceWorker' in navigator}));
   const preClickRequests=mp4Requests.length;
   const buttons=p.getByRole('button',{name:'Смотреть AI-видео'});
   const buttonCount=await buttons.count();
   const examples=p.locator('section[id^="example-"]');
   const paired=[];
   for(const i of [1,2]){
     const n=String(i).padStart(2,'0'),section=examples.filter({has:p.locator('#NO_MATCH_'+n)}); // placeholder unused, use explicit id
     const el=p.locator('#example-'+i);
     const images=await el.locator('img').evaluateAll(els=>els.map(img=>({url:img.currentSrc||img.src,complete:img.complete,naturalWidth:img.naturalWidth,rect:{x:img.getBoundingClientRect().x,right:img.getBoundingClientRect().right,width:img.getBoundingClientRect().width}})));
     paired.push({n,images,buttonPresent:await el.getByRole('button',{name:'Смотреть AI-видео'}).count()===1,videoBefore:await el.locator('video').count(),correctSource:images.some(x=>x.url.includes('ai-video-source-'+n)),correctPoster:images.some(x=>x.url.includes('ai-video-result-'+n+'-poster'))});
   }
   for(const i of [1,2]){await p.locator('#example-'+i).scrollIntoViewIfNeeded();await p.waitForTimeout(450);}
   const imagesAfterScroll=await p.locator('#example-1 img, #example-2 img').evaluateAll(els=>els.map(i=>({url:i.currentSrc||i.src,loaded:i.complete&&i.naturalWidth>0,left:i.getBoundingClientRect().left,right:i.getBoundingClientRect().right})));
   const noBefore=preClickRequests===0&&mp4Requests.length===0&&seo.videoElements===0&&paired.every(x=>x.videoBefore===0);
   const plays=[];
   for(const i of [1,2]){
     const el=p.locator('#example-'+i),button=el.getByRole('button',{name:'Смотреть AI-видео'});
     await button.click();
     const v=el.locator('video');
     await v.waitFor({state:'attached',timeout:10000});
     const src=await v.getAttribute('src');
     const playback=await v.evaluate(async(video)=>{video.muted=true;let err='';try{await Promise.race([video.play(),new Promise((_,reject)=>setTimeout(()=>reject(new Error('play timeout')),12000))])}catch(e){err=String(e.message||e)};return {error:err,paused:video.paused,readyState:video.readyState,videoWidth:video.videoWidth,videoHeight:video.videoHeight,duration:Number.isFinite(video.duration)?video.duration:null,time:video.currentTime}});
     await p.waitForTimeout(1200);
     const after=await v.evaluate(video=>({paused:video.paused,readyState:video.readyState,time:video.currentTime,error:video.error?.message||''}));
     plays.push({n:String(i).padStart(2,'0'),src,playback,after,started:src.includes('ai-video-result-0'+i+'.mp4')&&playback.videoWidth>0&&playback.duration>0&&!after.paused&&after.time>playback.time+0.2});
   }
   const refreshed=await p.reload({waitUntil:'domcontentloaded',timeout:45000});await p.waitForTimeout(900);
   const afterPage=await p.evaluate(()=>({overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth+1,cls:window.__cls||0,faq:document.querySelectorAll('details').length,buttonCount:[...document.querySelectorAll('button')].filter(x=>x.textContent.includes('Смотреть AI-видео')).length,footer:!!document.querySelector('footer')}));
   const sw=await p.evaluate(async()=>('serviceWorker' in navigator)?(await navigator.serviceWorker.getRegistrations()).length:0);
   const originalCLS=await p.evaluate(()=>window.__cls||0);
   const result={width,height,status:response?.status(),refresh:refreshed?.status(),seo,preClickRequests,mp4Requests,mp4Responses:responses,paired,imagesAfterScroll,noBefore,plays,afterPage,sw,originalCLS};
   report.devices[device]=result;
   const allSeo=seo.title===expectedTitle&&seo.description===expectedDesc&&seo.robots==='index,follow'&&seo.canonical===url&&seo.ogUrl===url&&seo.h1.length===1&&seo.h1[0]==='Создание видео из фото с помощью ИИ';
   const allPaired=paired.length===2&&paired.every(x=>x.correctSource&&x.correctPoster&&x.buttonPresent)&&imagesAfterScroll.length===4&&imagesAfterScroll.every(x=>x.loaded&&x.left>=-1&&x.right<=width+1);
   const allPlays=plays.length===2&&plays.every(x=>x.started);
   const cls=afterPage.cls;
   check('Browser '+device,response?.status()===200&&refreshed?.status()===200&&allSeo&&seo.faq===6&&seo.cta&&seo.footer&&!seo.manifest&&buttonCount===2&&allPaired&&noBefore&&allPlays&&!seo.overflow&&!afterPage.overflow&&cls<=0.1&&afterPage.faq===6&&afterPage.buttonCount===2&&sw===0,{status:response?.status(),refresh:refreshed?.status(),allSeo,faq:seo.faq,cta:seo.cta,pairedOK:allPaired,preClickMP4:preClickRequests,allPlays,overflow:seo.overflow||afterPage.overflow,cls,sw,videoResults:plays.map(v=>({n:v.n,src:v.src,started:v.started,duration:v.playback.duration,playError:v.playback.error,readyState:v.after.readyState,currentTime:v.after.time}))});
  }finally{await ctx.close()}
 });
}finally{await browser.close()}}
(async()=>{try{await main()}catch(e){report.errors.push('fatal: '+String(e.stack||e))}finally{report.passed=Object.values(report.checks).length===11&&Object.values(report.checks).every(v=>v.passed)&&Object.keys(report.devices).length===3&&report.errors.length===0;fs.writeFileSync('.github/ai-photo-video-browser-report-temp.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({passed:report.passed,failed:Object.entries(report.checks).filter(([k,v])=>!v.passed),errors:report.errors,devices:Object.fromEntries(Object.entries(report.devices).map(([k,v])=>[k,{preClickRequests:v.preClickRequests,plays:v.plays,cls:v.afterPage.cls,overflow:v.afterPage.overflow,sw:v.sw}]))},null,2));process.exitCode=report.passed?0:1}})();