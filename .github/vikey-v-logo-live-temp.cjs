const {chromium}=require('playwright'),fs=require('node:fs');
const ROOT='https://chelovek-neiroset.ru/';
const out={checkedAt:new Date().toISOString(),checks:{},screens:{},errors:[]};
const flag=(key,pass,extra={})=>out.checks[key]={pass:!!pass,...extra};
async function safe(key,work){try{await work()}catch(e){out.errors.push(key+': '+String(e.stack||e));flag(key,false,{error:String(e.message||e)})}}
(async()=>{let browser;try{browser=await chromium.launch({headless:true,args:['--no-sandbox']});
for(const [name,width,height,mobile] of [['iPhone',390,844,true],['Android',412,915,true],['Desktop',1440,900,false]]){
await safe(name,async()=>{const ctx=await browser.newContext({viewport:{width,height},isMobile:mobile,hasTouch:mobile,deviceScaleFactor:mobile?3:1});const page=await ctx.newPage();const assets=[];const errors=[];
page.on('request',r=>{if(/vikey-v-logo\.glb|\/assets\/.*three/.test(r.url()))assets.push(r.url())});page.on('pageerror',e=>errors.push(e.message));
try{
await page.addInitScript(()=>{window.__cls=0;try{new PerformanceObserver(list=>{for(const e of list.getEntries())if(!e.hadRecentInput)window.__cls+=e.value}).observe({type:'layout-shift',buffered:true})}catch(e){}});
const response=await page.goto(ROOT,{waitUntil:'domcontentloaded',timeout:45000});await page.waitForTimeout(900);
const button=page.getByRole('button',{name:'Загрузить и вращать 3D-логотип'});
const before={count:await button.count(),requests:assets.length,layout:await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth+1,cls:window.__cls||0,cta:!![...document.querySelectorAll('a')].find(a=>a.textContent?.trim()==='Обсудить задачу'),portfolio:!![...document.querySelectorAll('a')].find(a=>a.textContent?.trim()==='Посмотреть портфолио')}))};
let load={};if(before.count===1){await button.click();const hasInstruction=page.getByText('Вращайте мышью или пальцем');try{await hasInstruction.waitFor({timeout:35000});load.ready=true}catch(e){load.ready=false}
load.canvasCount=await page.locator('canvas').count();load.canvas=await page.locator('canvas').first().evaluate(c=>({width:c.width,height:c.height,rect:{width:c.getBoundingClientRect().width,height:c.getBoundingClientRect().height}})).catch(()=>null);
load.assetRequest=assets.some(s=>s.includes('vikey-v-logo.glb'));
if(load.ready&&load.canvasCount>0){const canvas=page.locator('canvas').first(),b=await canvas.boundingBox();if(b){if(mobile){await page.mouse.move(b.x+b.width*.7,b.y+b.height*.4);await page.mouse.down();await page.mouse.move(b.x+b.width*.3,b.y+b.height*.7,{steps:12});await page.mouse.up();}else{await page.mouse.move(b.x+b.width*.7,b.y+b.height*.4);await page.mouse.down();await page.mouse.move(b.x+b.width*.3,b.y+b.height*.7,{steps:12});await page.mouse.up();}load.dragEventSent=true;}}}
const after=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth+1,cls:window.__cls||0}));const refresh=await page.reload({waitUntil:'domcontentloaded',timeout:45000});out.screens[name]={status:response?.status(),refresh:refresh?.status(),before,load,after,errors};
const ok=response?.status()===200&&refresh?.status()===200&&before.count===1&&before.requests===0&&!before.layout.overflow&&before.layout.cta&&before.layout.portfolio&&load.ready===true&&load.canvasCount===1&&load.assetRequest===true&&load.dragEventSent===true&&!after.overflow&&after.cls<=0.1&&errors.length===0;
flag(name,ok,{status:response?.status(),refresh:refresh?.status(),initialGLB:before.requests,ready:load.ready,canvas:load.canvasCount,GLBRequestedAfterClick:load.assetRequest,drag:load.dragEventSent,overflow:after.overflow,cls:after.cls,errors});
}finally{await ctx.close()}})
}
} catch(e){out.errors.push('fatal: '+String(e.stack||e))}finally{if(browser)await browser.close();out.passed=Object.keys(out.checks).length===3&&Object.values(out.checks).every(v=>v.pass)&&out.errors.length===0;fs.writeFileSync('.github/vikey-v-logo-live-report-temp.json',JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify({passed:out.passed,checks:out.checks,errors:out.errors}));process.exitCode=out.passed?0:1}})();