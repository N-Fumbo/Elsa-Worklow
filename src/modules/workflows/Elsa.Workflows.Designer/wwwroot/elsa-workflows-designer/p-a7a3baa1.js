/*! For license information please see p-a7a3baa1.js.LICENSE.txt */
const t="elsa-workflows-designer";let e,n,s=!1,l=!1,o=!1,c=!1,i=null,f=!1;const r=t=>{const e=new URL(t,At.t);return e.origin!==Nt.location.origin?e.href:e.pathname},u=(t,e="")=>()=>{},a=(t,e)=>()=>{},d="{visibility:hidden}.hydrated{visibility:inherit}",h="http://www.w3.org/1999/xlink",p={},y="http://www.w3.org/2000/svg",m="http://www.w3.org/1999/xhtml",w=t=>"object"==(t=typeof t)||"function"===t;function b(t){var e,n,s;return null!==(s=null===(n=null===(e=t.head)||void 0===e?void 0:e.querySelector('meta[name="csp-nonce"]'))||void 0===n?void 0:n.getAttribute("content"))&&void 0!==s?s:void 0}const $=(t,e,...n)=>{let s=null,l=null,o=null,r=!1,i=!1;const c=[],a=e=>{for(let n=0;n<e.length;n++)s=e[n],Array.isArray(s)?a(s):null!=s&&"boolean"!=typeof s&&((r="function"!=typeof t&&!w(s))&&(s=String(s)),r&&i?c[c.length-1].l+=s:c.push(r?g(null,s):s),i=r)};if(a(n),e){e.key&&(l=e.key),e.name&&(o=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter((e=>t[e])).join(" "))}}if("function"==typeof t)return t(null===e?{}:e,c,S);const p=g(t,null);return p.o=e,c.length>0&&(p.i=c),p.u=l,p.h=o,p},g=(t,e)=>({p:0,m:t,l:e,$:null,i:null,o:null,u:null,h:null}),v={},k=t=>t&&t.m===v,S={forEach:(t,e)=>t.map(j).forEach(e),map:(t,e)=>t.map(j).map(e).map(O)},j=t=>({vattrs:t.o,vchildren:t.i,vkey:t.u,vname:t.h,vtag:t.m,vtext:t.l}),O=t=>{if("function"==typeof t.vtag){const e=Object.assign({},t.vattrs);return t.vkey&&(e.key=t.vkey),t.vname&&(e.name=t.vname),$(t.vtag,e,...t.vchildren||[])}const e=g(t.vtag,t.vtext);return e.o=t.vattrs,e.i=t.vchildren,e.u=t.vkey,e.h=t.vname,e},C=(t,e)=>null==t||w(t)?t:4&e?"false"!==t&&(""===t||!!t):2&e?parseFloat(t):1&e?String(t):t,M=t=>Mt(t).g,R=(t,e,n)=>{const s=M(t);return{emit:t=>x(s,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},x=(t,e,n)=>{const s=At.ce(e,n);return t.dispatchEvent(s),s},P=new WeakMap,L=(t,e,n)=>{let s=Et.get(t);Ft&&n?(s=s||new CSSStyleSheet,"string"==typeof s?s=e:s.replaceSync(e)):s=e,Et.set(t,s)},T=(t,e,n,s)=>{var l;let o=E(e);const r=Et.get(o);if(t=11===t.nodeType?t:Wt,r)if("string"==typeof r){t=t.head||t;let e,n=P.get(t);if(n||P.set(t,n=new Set),!n.has(o)){{e=Wt.createElement("style"),e.innerHTML=r;const n=null!==(l=At.v)&&void 0!==l?l:b(Wt);null!=n&&e.setAttribute("nonce",n),t.insertBefore(e,t.querySelector("link"))}n&&n.add(o)}}else t.adoptedStyleSheets.includes(r)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,r]);return o},U=t=>{const e=t.k,n=t.g,s=(e.S,()=>{});T(n.getRootNode(),e),s()},E=(t,e)=>"sc-"+t.S,N=(t,e,n,s,l,o)=>{if(n!==s){let r=Pt(t,e),i=e.toLowerCase();if("class"===e){const e=t.classList,l=A(n),o=A(s);e.remove(...l.filter((t=>t&&!o.includes(t)))),e.add(...o.filter((t=>t&&!l.includes(t))))}else if("style"===e){for(const e in n)s&&null!=s[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in s)n&&s[e]===n[e]||(e.includes("-")?t.style.setProperty(e,s[e]):t.style[e]=s[e])}else if("key"===e);else if("ref"===e)s&&s(t);else if(r||"o"!==e[0]||"n"!==e[1]){const c=w(s);if((r||c&&null!==s)&&!l)try{if(t.tagName.includes("-"))t[e]=s;else{const l=null==s?"":s;"list"===e?r=!1:null!=n&&t[e]==l||(t[e]=l)}}catch(t){}let a=!1;i!==(i=i.replace(/^xlink\:?/,""))&&(e=i,a=!0),null==s||!1===s?!1===s&&""!==t.getAttribute(e)||(a?t.removeAttributeNS(h,e):t.removeAttribute(e)):(!r||4&o||l)&&!c&&(s=!0===s?"":s,a?t.setAttributeNS(h,e,s):t.setAttribute(e,s))}else e="-"===e[2]?e.slice(3):Pt(Nt,i)?i.slice(2):i[2]+e.slice(3),n&&At.rel(t,e,n,!1),s&&At.ael(t,e,s,!1)}},W=/\s/,A=t=>t?t.split(W):[],D=(t,e,n,s)=>{const l=11===e.$.nodeType&&e.$.host?e.$.host:e.$,o=t&&t.o||p,r=e.o||p;for(s in o)s in r||N(l,s,o[s],void 0,n,e.p);for(s in r)N(l,s,o[s],r[s],n,e.p)},F=(t,l,r,i)=>{const a=l.i[r];let p,u,d,f=0;if(s||(o=!0,"slot"===a.m&&(a.p|=a.i?2:1)),null!==a.l)p=a.$=Wt.createTextNode(a.l);else if(1&a.p)p=a.$=Wt.createTextNode("");else{if(c||(c="svg"===a.m),p=a.$=Wt.createElementNS(c?y:m,2&a.p?"slot-fb":a.m),c&&"foreignObject"===a.m&&(c=!1),D(null,a,c),a.i)for(f=0;f<a.i.length;++f)u=F(t,a,f),u&&p.appendChild(u);"svg"===a.m?c=!1:"foreignObject"===p.tagName&&(c=!0)}return p["s-hn"]=n,3&a.p&&(p["s-sr"]=!0,p["s-cr"]=e,p["s-sn"]=a.h||"",d=t&&t.i&&t.i[r],d&&d.m===a.m&&t.$&&H(t.$,!1)),p},H=(t,e)=>{At.p|=1;const s=t.childNodes;for(let t=s.length-1;t>=0;t--){const l=s[t];l["s-hn"]!==n&&l["s-ol"]&&(B(l).insertBefore(l,z(l)),l["s-ol"].remove(),l["s-ol"]=void 0,o=!0),e&&H(l,e)}At.p&=-2},q=(t,e,n,s,l,o)=>{let r,i=t["s-cr"]&&t["s-cr"].parentNode||t;for(;l<=o;++l)s[l]&&(r=F(null,n,l),r&&(s[l].$=r,i.insertBefore(r,z(e))))},I=(t,e,n)=>{for(let s=e;s<=n;++s){const e=t[s];if(e){const t=e.$;Y(e),t&&(l=!0,t["s-ol"]?t["s-ol"].remove():H(t,!0),t.remove())}}},V=(t,e,n,s)=>{let l,o,r=0,i=0,c=0,a=0,p=e.length-1,u=e[0],d=e[p],f=s.length-1,h=s[0],m=s[f];for(;r<=p&&i<=f;)if(null==u)u=e[++r];else if(null==d)d=e[--p];else if(null==h)h=s[++i];else if(null==m)m=s[--f];else if(_(u,h))G(u,h),u=e[++r],h=s[++i];else if(_(d,m))G(d,m),d=e[--p],m=s[--f];else if(_(u,m))"slot"!==u.m&&"slot"!==m.m||H(u.$.parentNode,!1),G(u,m),t.insertBefore(u.$,d.$.nextSibling),u=e[++r],m=s[--f];else if(_(d,h))"slot"!==u.m&&"slot"!==m.m||H(d.$.parentNode,!1),G(d,h),t.insertBefore(d.$,u.$),d=e[--p],h=s[++i];else{for(c=-1,a=r;a<=p;++a)if(e[a]&&null!==e[a].u&&e[a].u===h.u){c=a;break}c>=0?(o=e[c],o.m!==h.m?l=F(e&&e[i],n,c):(G(o,h),e[c]=void 0,l=o.$),h=s[++i]):(l=F(e&&e[i],n,i),h=s[++i]),l&&B(u.$).insertBefore(l,z(u.$))}r>p?q(t,null==s[f+1]?null:s[f+1].$,n,s,i,f):i>f&&I(e,r,p)},_=(t,e)=>t.m===e.m&&("slot"===t.m?t.h===e.h:t.u===e.u),z=t=>t&&t["s-ol"]||t,B=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,G=(t,e)=>{const n=e.$=t.$,s=t.i,l=e.i,o=e.m,r=e.l;let i;null===r?(c="svg"===o||"foreignObject"!==o&&c,"slot"===o||D(t,e,c),null!==s&&null!==l?V(n,s,e,l):null!==l?(null!==t.l&&(n.textContent=""),q(n,null,e,l,0,l.length-1)):null!==s&&I(s,0,s.length-1),c&&"svg"===o&&(c=!1)):(i=n["s-cr"])?i.parentNode.textContent=r:t.l!==r&&(n.data=r)},J=t=>{const e=t.childNodes;let n,s,l,o,r,i;for(s=0,l=e.length;s<l;s++)if(n=e[s],1===n.nodeType){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,o=0;o<l;o++)if(i=e[o].nodeType,e[o]["s-hn"]!==n["s-hn"]||""!==r){if(1===i&&r===e[o].getAttribute("slot")){n.hidden=!0;break}}else if(1===i||3===i&&""!==e[o].textContent.trim()){n.hidden=!0;break}J(n)}},K=[],Q=t=>{let e,n,s,o,r,i,c=0;const a=t.childNodes,p=a.length;for(;c<p;c++){if(e=a[c],e["s-sr"]&&(n=e["s-cr"])&&n.parentNode)for(s=n.parentNode.childNodes,o=e["s-sn"],i=s.length-1;i>=0;i--)n=s[i],n["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||(X(n,o)?(r=K.find((t=>t.j===n)),l=!0,n["s-sn"]=n["s-sn"]||o,r?r.O=e:K.push({O:e,j:n}),n["s-sr"]&&K.map((t=>{X(t.j,n["s-sn"])&&(r=K.find((t=>t.j===n)),r&&!t.O&&(t.O=r.O))}))):K.some((t=>t.j===n))||K.push({j:n}));1===e.nodeType&&Q(e)}},X=(t,e)=>1===t.nodeType?null===t.getAttribute("slot")&&""===e||t.getAttribute("slot")===e:t["s-sn"]===e||""===e,Y=t=>{t.o&&t.o.ref&&t.o.ref(null),t.i&&t.i.map(Y)},Z=(t,r)=>{const i=t.g,c=t.k,a=t.C||g(null,null),p=k(r)?r:$(null,null,r);if(n=i.tagName,c.M&&(p.o=p.o||{},c.M.map((([t,e])=>p.o[e]=i[t]))),p.m=null,p.p|=4,t.C=p,p.$=a.$=i,e=i["s-cr"],s=0!=(1&c.p),l=!1,G(a,p),At.p|=1,o){let t,e,n,s,l,o;Q(p.$);let r=0;for(;r<K.length;r++)t=K[r],e=t.j,e["s-ol"]||(n=Wt.createTextNode(""),n["s-nr"]=e,e.parentNode.insertBefore(e["s-ol"]=n,e));for(r=0;r<K.length;r++)if(t=K[r],e=t.j,t.O){for(s=t.O.parentNode,l=t.O.nextSibling,n=e["s-ol"];n=n.previousSibling;)if(o=n["s-nr"],o&&o["s-sn"]===e["s-sn"]&&s===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){l=o;break}(!l&&s!==e.parentNode||e.nextSibling!==l)&&e!==l&&(!e["s-hn"]&&e["s-ol"]&&(e["s-hn"]=e["s-ol"].parentNode.nodeName),s.insertBefore(e,l))}else 1===e.nodeType&&(e.hidden=!0)}l&&J(p.$),At.p&=-2,K.length=0},tt=(t,e)=>{e&&!t.R&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.R=e)))},et=(t,e)=>{if(t.p|=16,!(4&t.p))return tt(t,t.P),Bt((()=>nt(t,e)));t.p|=512},nt=(t,e)=>{const n=(t.k.S,()=>{}),s=t.L;let l;return e&&(t.p|=256,t.T&&(t.T.map((([t,e])=>ut(s,t,e))),t.T=null),l=ut(s,"componentWillLoad")),l=st(l,(()=>ut(s,"componentWillRender"))),n(),st(l,(()=>lt(t,s,e)))},st=(t,e)=>t instanceof Promise?t.then(e):e(),lt=async(t,e,n)=>{const s=t.g,l=(t.k.S,()=>{}),o=s["s-rc"];n&&U(t);const r=(t.k.S,()=>{});ot(t,e),o&&(o.map((t=>t())),s["s-rc"]=void 0),r(),l();{const e=s["s-p"],n=()=>it(t);0===e.length?n():(Promise.all(e).then(n),t.p|=4,e.length=0)}},ot=(t,e,n)=>{try{i=e,e=e.render(),t.p&=-17,t.p|=2,Z(t,e)}catch(e){Lt(e,t.g)}return i=null,null},ct=()=>i,it=t=>{t.k.S;const e=t.g,n=t.L,s=t.P;ut(n,"componentDidRender"),64&t.p||(t.p|=64,at(e),ut(n,"componentDidLoad"),t.U(e),s||rt()),t.N(e),t.R&&(t.R(),t.R=void 0),512&t.p&&zt((()=>et(t,!1))),t.p&=-517},ft=t=>{{const e=Mt(t),n=e.g.isConnected;return n&&2==(18&e.p)&&et(e,!1),n}},rt=e=>{at(Wt.documentElement),zt((()=>x(Nt,"appload",{detail:{namespace:t}})))},ut=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(t){Lt(t)}},at=t=>t.classList.add("hydrated"),dt=(t,e)=>Mt(t).W.get(e),ht=(t,e,n,s)=>{const l=Mt(t),o=l.g,r=l.W.get(e),i=l.p,c=l.L;n=C(n,s.A[e][0]);const a=Number.isNaN(r)&&Number.isNaN(n);if((!(8&i)||void 0===r)&&n!==r&&!a&&(l.W.set(e,n),c)){if(s.D&&128&i){const t=s.D[e];t&&t.map((t=>{try{c[t](n,r,e)}catch(t){Lt(t,o)}}))}2==(18&i)&&et(l,!1)}},pt=(t,e,n)=>{if(e.A){t.watchers&&(e.D=t.watchers);const s=Object.entries(e.A),l=t.prototype;if(s.map((([t,[s]])=>{31&s||2&n&&32&s?Object.defineProperty(l,t,{get(){return dt(this,t)},set(n){ht(this,t,n,e)},configurable:!0,enumerable:!0}):1&n&&64&s&&Object.defineProperty(l,t,{value(...e){const n=Mt(this);return n.F.then((()=>n.L[t](...e)))}})})),1&n){const n=new Map;l.attributeChangedCallback=function(t,e,s){At.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e))s=this[e],delete this[e];else if(l.hasOwnProperty(e)&&"number"==typeof this[e]&&this[e]==s)return;this[e]=(null!==s||"boolean"!=typeof this[e])&&s}))},t.observedAttributes=s.filter((([t,e])=>15&e[0])).map((([t,s])=>{const l=s[1]||t;return n.set(l,t),512&s[0]&&e.M.push([t,l]),l}))}}return t},yt=async(t,e,n,s,l)=>{if(0==(32&e.p)){e.p|=32;{if((l=Ut(n)).then){const t=()=>{};l=await l,t()}l.isProxied||(n.D=l.watchers,pt(l,n,2),l.isProxied=!0);const s=(n.S,()=>{});e.p|=8;try{new l(e)}catch(t){Lt(t)}e.p&=-9,e.p|=128,s(),mt(e.L)}if(l.style){let t=l.style;const e=E(n);if(!Et.has(e)){const s=(n.S,()=>{});L(e,t,!!(1&n.p)),s()}}}const o=e.P,r=()=>et(e,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()},mt=t=>{ut(t,"connectedCallback")},wt=t=>{if(0==(1&At.p)){const e=Mt(t),n=e.k,s=(n.S,()=>{});if(1&e.p)vt(t,e,n.H),mt(e.L);else{e.p|=1,12&n.p&&bt(t);{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){tt(e,e.P=n);break}}n.A&&Object.entries(n.A).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),yt(t,e,n)}s()}},bt=t=>{const e=t["s-cr"]=Wt.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)},$t=t=>{if(0==(1&At.p)){const e=Mt(t),n=e.L;e.q&&(e.q.map((t=>t())),e.q=void 0),ut(n,"disconnectedCallback")}},gt=(t,e={})=>{var n;const s=[],l=e.exclude||[],o=Nt.customElements,r=Wt.head,i=r.querySelector("meta[charset]"),c=Wt.createElement("style"),a=[];let p,u=!0;Object.assign(At,e),At.t=new URL(e.resourcesUrl||"./",Wt.baseURI).href,t.map((t=>{t[1].map((e=>{const n={p:e[0],S:e[1],A:e[2],H:e[3]};n.A=e[2],n.H=e[3],n.M=[],n.D={};const r=n.S,i=class extends HTMLElement{constructor(t){super(t),xt(t=this,n)}connectedCallback(){p&&(clearTimeout(p),p=null),u?a.push(this):At.jmp((()=>wt(this)))}disconnectedCallback(){At.jmp((()=>$t(this)))}componentOnReady(){return Mt(this).I}};n.V=t[0],l.includes(r)||o.get(r)||(s.push(r),o.define(r,pt(i,n,1)))}))}));{c.innerHTML=s+d,c.setAttribute("data-styles","");const t=null!==(n=At.v)&&void 0!==n?n:b(Wt);null!=t&&c.setAttribute("nonce",t),r.insertBefore(c,i?i.nextSibling:r.firstChild)}u=!1,a.length?a.map((t=>t.connectedCallback())):At.jmp((()=>p=setTimeout(rt,30)))},vt=(t,e,n,s)=>{n&&n.map((([n,s,l])=>{const o=St(t,n),r=kt(e,l),i=jt(n);At.ael(o,s,r,i),(e.q=e.q||[]).push((()=>At.rel(o,s,r,i)))}))},kt=(t,e)=>n=>{try{256&t.p?t.L[e](n):(t.T=t.T||[]).push([e,n])}catch(t){Lt(t)}},St=(t,e)=>8&e?Nt:t,jt=t=>0!=(2&t),Ot=t=>At.v=t,Ct=new WeakMap,Mt=t=>Ct.get(t),Rt=(t,e)=>Ct.set(e.L=t,e),xt=(t,e)=>{const n={p:0,g:t,k:e,W:new Map};return n.F=new Promise((t=>n.N=t)),n.I=new Promise((t=>n.U=t)),t["s-p"]=[],t["s-rc"]=[],vt(t,n,e.H),Ct.set(t,n)},Pt=(t,e)=>e in t,Lt=(t,e)=>(0,console.error)(t,e),Tt=new Map,Ut=(t,e,n)=>{const s=t.S.replace(/-/g,"_"),l=t.V,o=Tt.get(l);return o?o[s]:import(`./${l}.entry.js`).then((t=>(Tt.set(l,t),t[s])),Lt)},Et=new Map,Nt="undefined"!=typeof window?window:{},Wt=Nt.document||{head:{}},At={p:0,t:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,s)=>t.addEventListener(e,n,s),rel:(t,e,n,s)=>t.removeEventListener(e,n,s),ce:(t,e)=>new CustomEvent(t,e)},Dt=t=>Promise.resolve(t),Ft=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(t){}return!1})(),Ht=[],qt=[],It=(t,e)=>n=>{t.push(n),f||(f=!0,e&&4&At.p?zt(_t):At.raf(_t))},Vt=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){Lt(t)}t.length=0},_t=()=>{Vt(Ht),Vt(qt),(f=Ht.length>0)&&At.raf(_t)},zt=t=>Dt().then(t),Bt=It(qt,!0);export{v as H,M as a,gt as b,R as c,r as d,ft as f,ct as g,$ as h,Dt as p,Rt as r,Ot as s};