/* Daylight shared system: palm sprite, packaging renderer, catalog, page chrome, demo cart */
const HOME='direction-a-daylight.html',PDP='daylight-joint-care.html',ROUTINE='daylight-routine.html';
const PALM='<path d="M20 20C14 8 4 8 0 16c7-3 13-2 20 4Z"/><path d="M20 20C12 16 2 20 1 31c5-7 11-10 19-11Z"/><path d="M20 20c6-12 16-12 20-4-7-3-13-2-20 4Z"/><path d="M20 20c8-4 18 0 19 11-5-7-11-10-19-11Z"/><path d="M20 20c-3-8-2-15 3-19 0 6 0 12-3 19Z"/><path d="M18.4 20.5c.6 14-.4 28-2.9 41.5h5.3c1.6-13.5 1.7-28 .8-41.5Z"/>';
document.body.insertAdjacentHTML('afterbegin',`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><symbol id="palm" viewBox="0 0 40 62">${PALM}</symbol><filter id="soft" x="-40%" y="-200%" width="180%" height="500%"><feGaussianBlur stdDeviation="8"/></filter></defs></svg>`);

const logoInner=`<b>ca<span class="pl"><svg viewBox="0 0 40 62" aria-hidden="true"><use href="#palm"/></svg></span>ifornia</b><small>physicians supplements</small><small class="yr">Since 2005</small>`;
let packId=0;
const F={a:['#FFF3CC','#FFC685','#FFA274','#0C2340'],b:['#CDF1FC','#7FD0F2','#2CABE0','#0C2340'],c:['#FFC594','#FF8F78','#EC5F8C','#0C2340'],d:['#433FA6','#1E2169','#0E1240','#FFFFFF']};
const TINT={a:'#FFF0D8',b:'#DDF3FC',c:'#FFE3D8',d:'#E4E3F6'};
function shade(u,x,y,w,h,r){return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="url(#s${u})"/>`}
function defs(u,f){return `<defs><linearGradient id="g${u}" x1="0" y1="0" x2=".25" y2="1"><stop offset="0" stop-color="${f[0]}"/><stop offset=".6" stop-color="${f[1]}"/><stop offset="1" stop-color="${f[2]}"/></linearGradient><linearGradient id="s${u}"><stop offset="0" stop-color="#000" stop-opacity=".22"/><stop offset=".1" stop-color="#000" stop-opacity=".03"/><stop offset=".24" stop-color="#fff" stop-opacity=".16"/><stop offset=".42" stop-color="#fff" stop-opacity="0"/><stop offset=".84" stop-color="#000" stop-opacity=".06"/><stop offset="1" stop-color="#000" stop-opacity=".30"/></linearGradient></defs>`}
function bottle(p,cls=''){const u=++packId,f=F[p.t],k=f[3];return `<svg class="p ${cls}" viewBox="0 0 200 356" role="img" aria-label="${p.a}">${defs(u,f)}
<ellipse cx="100" cy="343" rx="88" ry="9" fill="#0C2340" opacity=".32" filter="url(#soft)"/>
<rect x="50" y="2" width="100" height="56" rx="9" fill="url(#g${u})"/>${shade(u,50,2,100,56,9)}
<rect x="62" y="54" width="76" height="14" fill="url(#g${u})"/>${shade(u,62,54,76,14,0)}
<rect x="18" y="66" width="164" height="278" rx="30" fill="url(#g${u})"/>${shade(u,18,66,164,278,30)}
<g fill="${k}"><svg x="36" y="88" width="22" height="34"><use href="#palm"/></svg>
<text x="36" y="196" font-size="37" font-weight="500" letter-spacing="-1.5">${p.l[0]}</text><text x="36" y="234" font-size="37" font-weight="500" letter-spacing="-1.5">${p.l[1]}</text>
<text x="36" y="296" font-size="12.5" font-weight="500">${p.s}</text><text x="36" y="314" font-size="12.5">${p.q||''}</text></g></svg>`}
function jar(p,cls=''){const u=++packId,f=F[p.t],k=f[3];return `<svg class="p j ${cls}" viewBox="0 0 250 262" role="img" aria-label="${p.a}">${defs(u,f)}
<ellipse cx="125" cy="249" rx="112" ry="9" fill="#0C2340" opacity=".32" filter="url(#soft)"/>
<rect x="14" y="2" width="222" height="58" rx="12" fill="url(#g${u})"/>${shade(u,14,2,222,58,12)}
<rect x="10" y="56" width="230" height="194" rx="26" fill="url(#g${u})"/>${shade(u,10,56,230,194,26)}
<g fill="${k}"><svg x="30" y="74" width="20" height="31"><use href="#palm"/></svg>
<text x="30" y="150" font-size="36" font-weight="500" letter-spacing="-1.5">${p.l[0]}</text><text x="30" y="186" font-size="36" font-weight="500" letter-spacing="-1.5">${p.l[1]}</text>
<text x="30" y="222" font-size="12.5" font-weight="500">${p.s}</text></g></svg>`}
/* Sample product data for presentation. */
const P={
 total:{f:bottle,t:'a',a:'Total Body bottle',l:['total','body'],s:'daily foundation',q:'tablets',n:'Total Body',d:'Multivitamin tablets.',pr:84.98,r:5.0,g:['energy'],fm:'caps'},
 green:{f:jar,t:'a',a:'Green Power jar',l:['green','power'],s:'greens, berry',n:'Green Power',d:'Greens and probiotic powder.',pr:80.98,r:5.0,g:['energy','gut'],fm:'drink'},
 fiber:{f:bottle,t:'a',a:'Fiber Care bottle',l:['fiber','care'],s:'psyllium + oat bran',q:'capsules',n:'Fiber Care',d:'Psyllium, glucomannan, oat bran and apple pectin.',pr:44.98,r:4.6,g:['gut'],fm:'caps'},
 defense:{f:bottle,t:'a',a:'Best Defense bottle',l:['best','defense'],s:'zinc, selenium, vitamin c',q:'capsules',n:'Best Defense',d:'Zinc, selenium and vitamin C.',pr:44.98,r:5.0,g:['immune'],fm:'caps'},
 joint:{f:bottle,t:'b',a:'Joint Care bottle',l:['joint','care'],s:'1,500 mg glucosamine',q:'1,200 mg chondroitin',n:'Joint Care',d:'Glucosamine and chondroitin capsules.',pr:59.98,r:4.9,g:['move'],fm:'caps',url:PDP},
 jpower:{f:jar,t:'b',a:'Joint Power jar',l:['joint','power'],s:'collagen + hyaluronic acid',n:'Joint Power',d:'Collagen and hyaluronic acid drink mix.',pr:89.98,r:5.0,g:['move'],fm:'drink'},
 bone:{f:bottle,t:'b',a:'Bone Care bottle',l:['bone','care'],s:'1,000 mg calcium',q:'tablets',n:'Bone Care',d:'Calcium, magnesium, vitamins D3 and K.',pr:59.99,r:4.7,g:['move','bone'],fm:'caps'},
 whey:{f:jar,t:'b',a:'Whey Power jar',l:['whey','power'],s:'24 g protein, vanilla',n:'Whey Power',d:'Whey protein powder with colostrum.',pr:135,r:4.8,g:['move','energy'],fm:'drink'},
 omega:{f:bottle,t:'c',a:'Omega Power bottle',l:['omega','power'],s:'540 mg EPA',q:'360 mg DHA',n:'Omega Power',d:'EPA and DHA softgels.',pr:59.98,r:4.9,g:['move','heart'],fm:'caps'},
 repair:{f:jar,t:'c',a:'Gut Repair jar',l:['gut','repair'],s:'collagen + msm drink',n:'Gut Repair',d:'Collagen, MSM and glucosamine drink mix.',pr:74.98,r:5.0,g:['gut'],fm:'drink'},
 skin:{f:jar,t:'c',a:'SkinTight jar',l:['skin','tight'],s:'collagen + hyaluronic acid',n:'SkinTight',d:'Collagen and hyaluronic acid drink mix.',pr:89.98,r:5.0,g:['skin'],fm:'drink'},
 calm:{f:jar,t:'d',a:'Inner Calm jar',l:['inner','calm'],s:'evening drink, cherry',n:'Inner Calm',d:'Magnesium, inositol and L-theanine drink mix.',pr:69.98,r:5.0,g:['sleep'],fm:'drink'},
 rest:{f:bottle,t:'d',a:'Rest and Relax bottle',l:['rest &amp;','relax'],s:'melatonin + l-theanine',q:'capsules',n:'Rest & Relax',d:'Melatonin, L-theanine and valerian capsules.',pr:59.98,r:4.6,g:['sleep'],fm:'caps'}
};
const mk=(k,c)=>P[k].f(P[k],c);
const money=n=>'$'+n.toFixed(2);

/* page chrome */
function chrome(){
 document.querySelectorAll('[data-hdr]').forEach(h=>{h.innerHTML=`<div class="wrap nav"><a class="logo" href="${HOME}" aria-label="California Physicians Supplements home">${logoInner}</a><nav class="links" aria-label="Main"><a href="${HOME}#day">Your day</a><a href="${HOME}#shop">Shop</a><a href="${HOME}#doctors">Our physicians</a><a href="${ROUTINE}">Build my routine</a><a href="daylight-ingredients.html">What’s inside</a></nav><div class="acts"><span class="chip-c">Concept</span><a class="cart" href="${HOME}#shop" data-cart>Cart (0)</a></div></div>`});
 document.querySelectorAll('[data-ft]').forEach(f=>{f.innerHTML=`<div class="fg"><div><a class="logo" href="${HOME}" aria-label="California Physicians Supplements home">${logoInner}</a></div><div><h4>Shop</h4><a href="${HOME}#shop">All products</a><a href="${ROUTINE}">Build my routine</a><a href="${PDP}">Joint Care</a></div><div><h4>Learn</h4><a href="${HOME}#doctors">Our physicians</a><a href="daylight-ingredients.html">What’s inside</a><a href="daylight-brand.html">Brand system</a><a href="index.html">Presentation</a></div><div><h4>Help</h4><a href="#">Contact us</a><a href="#">Shipping</a><a href="#">Refunds</a></div></div><p class="fine">Design concept prepared for California Physicians Supplements. Not a live site. Prices, reviews, policies and label details are from casupplements.com, viewed November 6, 2026.</p>`});
 document.body.insertAdjacentHTML('beforeend','<div class="toast" id="toast" role="status" aria-live="polite"></div>');
 drawCart();
}
/* demo cart: a remembered count only */
function cartN(){try{return +localStorage.getItem('dl-cart')||0}catch(e){return window._c||0}}
function setCart(n){try{localStorage.setItem('dl-cart',n)}catch(e){window._c=n}drawCart()}
function drawCart(){document.querySelectorAll('[data-cart]').forEach(c=>c.textContent=`Cart (${cartN()})`)}
function addToCart(n=1,label='Added to cart'){setCart(cartN()+n);const t=document.getElementById('toast');t.textContent=label;t.classList.add('on');clearTimeout(window._t);window._t=setTimeout(()=>t.classList.remove('on'),1800)}
function card(k){const p=P[k],pic=`<div class="im" style="background:${TINT[p.t]}">${mk(k)}</div>`;return `<article class="pc">${p.url?`<a href="${p.url}" aria-label="${p.n} details">${pic}</a>`:pic}<h3>${p.url?`<a href="${p.url}">${p.n}</a>`:p.n}</h3><p class="desc">${p.d}</p><p class="dose-line">${keyDose(k)}</p><button class="wi-open" data-inside="${k}" style="align-self:flex-start">What’s inside</button><div class="row"><div><b>${money(p.pr)}</b></div><button class="add" data-add>Add</button></div></article>`}
document.addEventListener('click',e=>{if(e.target.closest('[data-add]'))addToCart()});
