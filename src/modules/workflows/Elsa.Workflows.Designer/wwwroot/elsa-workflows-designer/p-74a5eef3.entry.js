import{r,h as t,a as n}from"./p-a7a3baa1.js";import{_ as e,a,b as i,c as u,i as o,d as f,e as v,D as s}from"./p-f0e15ec1.js";import{a as c}from"./p-72dc819a.js";import{s as l}from"./p-1de51046.js";import{C as h,w,A as d}from"./p-dd7ad463.js";import"./p-fcfa9e22.js";import"./p-144a434e.js";import"./p-e71312f9.js";import"./p-4031f4ff.js";function p(t){return function(r){return t(r)}}var b=p,y=a&&a.isTypedArray,j=y?b(y):e,m=j,g=Array.isArray,x=g;function _(t,r){return function(e){return t(r(e))}}var O=_;const $=".tooltip-container .tooltip{visibility:hidden}.tooltip-container:hover .tooltip{visibility:visible}",k=class{constructor(t){r(this,t),this.getTooltipPositionClasses=t=>{this.triangleClass={right:"tw-left-0 -tw-ml-2 tw-bottom-0 tw-top-0 tw-h-full",left:"tw-right-0 -tw-mr-2 tw-bottom-0 tw-top-0 tw-h-full tw-rotate-180",top:"tw-left-1/2 -tw-mt-1 tw-top-full -tw-translate-x-1/2 -tw-rotate-90",bottom:"tw-left-1/2 -tw-mb-1 tw-bottom-full -tw-translate-x-1/2 tw-rotate-90"}[t]},this.onMouseOver=()=>{const t=this.element.querySelector(".tooltip-container"),r=this.element.querySelector(".tooltip");if(!r)return;const e=t.getBoundingClientRect(),n=r.getBoundingClientRect();let a="0px",i="0px",o=this.tooltipPosition;if("auto"===o){const t=e.y+e.height+16+n.height;o=this.isOutOfBounds(t)?"top":"bottom"}switch(o){case"right":a=`${e.x+e.width+16}px`,i=`${(e.height-n.height)/2+e.top}px`,this.getTooltipPositionClasses("right");break;case"left":a=e.left-n.width-16+"px",i=`${(e.height-n.height)/2+e.top}px`,this.getTooltipPositionClasses("left");break;case"top":a=`${(e.width-n.width)/2+e.left}px`,i=e.y-n.height-16+"px",this.getTooltipPositionClasses("top");break;case"bottom":a=`${(e.width-n.width)/2+e.left}px`,i=`${e.y+e.height+16}px`,this.getTooltipPositionClasses("bottom")}r.style.left=a,r.style.top=i},this.isOutOfBounds=t=>t>window.innerHeight,this.tooltipContent=void 0,this.tooltipPosition="right",this.triangleClass=""}render(){return t("div",{onMouseOver:()=>this.onMouseOver(),class:"tooltip-container tw-relative tw-w-full"},t("slot",null),this.tooltipContent&&t("div",{role:"tooltip",class:"tooltip tw-z-20 tw-w-48 tw-fixed tw-transition tw-duration-150 tw-ease-in-out tw-shadow-lg tw-bg-gray-800 tw-text-white tw-p-4 tw-rounded"},t("svg",{class:`tw-absolute ${this.triangleClass}`,width:"9px",height:"16px",viewBox:"0 0 9 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},t("g",{id:"Tooltips-","tw-transform":"translate(-874.000000, -1029.000000)",fill:"#111827"},t("g",{"tw-transform":"translate(850.000000, 975.000000)"},t("g",{"tw-transform":"translate(24.000000, 0.000000)"},t("polygon",{"tw-transform":"translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) ",points:"4.5 57.5 12.5 66.5 -3.5 66.5"})))))),t("p",{class:"tw-text-white tw-text-sm"}," ",this.tooltipContent)))}get element(){return n(this)}};function A(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)}k.style=$;var S=A,M="[object AsyncFunction]",C="[object Function]",D="[object GeneratorFunction]",P="[object Proxy]";function B(t){if(!S(t))return!1;var r=i(t);return r==C||r==D||r==M||r==P}var E=B,F=u["__core-js_shared__"],L=F,T=function(){var t=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function V(t){return!!T&&T in t}var G=V,W=Function.prototype,N=W.toString;function R(t){if(null!=t){try{return N.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var z=R,H=/[\\^$.*+?()[\]{}|]/g,I=/^\[object .+?Constructor\]$/,J=Function.prototype,Z=Object.prototype,q=J.toString,K=Z.hasOwnProperty,Q=RegExp("^"+q.call(K).replace(H,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function U(t){return!(!S(t)||G(t))&&(E(t)?Q:I).test(z(t))}var X=U;function Y(t,r){return null==t?void 0:t[r]}var rr=Y;function tr(t,r){var e=rr(t,r);return X(e)?e:void 0}var nr=tr,er=function(){try{var t=nr(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),ar=er;function ir(t,r,e){"__proto__"==r&&ar?ar(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e}var ur=ir;function or(t,r,e,n){for(var a=-1,i=null==t?0:t.length;++a<i;){var o=t[a];r(n,o,e(o),t)}return n}var fr=or;function vr(t){return function(r,e,n){for(var a=-1,i=Object(r),o=n(r),s=o.length;s--;){var u=o[t?s:++a];if(!1===e(i[u],u,i))break}return r}}var sr=vr,cr=sr(),lr=cr;function hr(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}var wr=hr,dr="[object Arguments]";function pr(t){return o(t)&&i(t)==dr}var br=pr,yr=Object.prototype,jr=yr.hasOwnProperty,mr=yr.propertyIsEnumerable,gr=br(function(){return arguments}())?br:function(t){return o(t)&&jr.call(t,"callee")&&!mr.call(t,"callee")},xr=gr;function _r(){return!1}var Or=_r,$r=c((function(t,r){var e=r&&!r.nodeType&&r,n=e&&t&&!t.nodeType&&t,a=n&&n.exports===e?u.Buffer:void 0,i=(a?a.isBuffer:void 0)||Or;t.exports=i})),kr=9007199254740991,Ar=/^(?:0|[1-9]\d*)$/;function Sr(t,r){var e=typeof t;return!!(r=null==r?kr:r)&&("number"==e||"symbol"!=e&&Ar.test(t))&&t>-1&&t%1==0&&t<r}var Mr=Sr,Cr=Object.prototype,Dr=Cr.hasOwnProperty;function Pr(t,r){var e=x(t),n=!e&&xr(t),a=!e&&!n&&$r(t),i=!e&&!n&&!a&&m(t),o=e||n||a||i,s=o?wr(t.length,String):[],u=s.length;for(var c in t)!r&&!Dr.call(t,c)||o&&("length"==c||a&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Mr(c,u))||s.push(c);return s}var Br=Pr,Er=Object.prototype;function Fr(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||Er)}var Lr=Fr,Tr=O(Object.keys,Object),Vr=Tr,Gr=Object.prototype,Wr=Gr.hasOwnProperty;function Nr(t){if(!Lr(t))return Vr(t);var r=[];for(var e in Object(t))Wr.call(t,e)&&"constructor"!=e&&r.push(e);return r}var Rr=Nr;function zr(t){return null!=t&&f(t.length)&&!E(t)}var Hr=zr;function Ir(t){return Hr(t)?Br(t):Rr(t)}var Jr=Ir;function Zr(t,r){return t&&lr(t,r,Jr)}var qr=Zr;function Kr(t,r){return function(e,n){if(null==e)return e;if(!Hr(e))return t(e,n);for(var a=e.length,i=r?a:-1,o=Object(e);(r?i--:++i<a)&&!1!==n(o[i],i,o););return e}}var Qr=Kr,Ur=Qr(qr),Xr=Ur;function Yr(t,r,e,n){return Xr(t,(function(t,a,i){r(n,t,e(t),i)})),n}var rt=Yr;function tt(){this.__data__=[],this.size=0}var nt=tt;function et(t,r){return t===r||t!=t&&r!=r}var at=et;function it(t,r){for(var e=t.length;e--;)if(at(t[e][0],r))return e;return-1}var ut=it,ot=Array.prototype,ft=ot.splice;function vt(t){var r=this.__data__,e=ut(r,t);return!(e<0||(e==r.length-1?r.pop():ft.call(r,e,1),--this.size,0))}var st=vt;function ct(t){var r=this.__data__,e=ut(r,t);return e<0?void 0:r[e][1]}var lt=ct;function ht(t){return ut(this.__data__,t)>-1}var wt=ht;function dt(t,r){var e=this.__data__,n=ut(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this}var pt=dt;function bt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}bt.prototype.clear=nt,bt.prototype.delete=st,bt.prototype.get=lt,bt.prototype.has=wt,bt.prototype.set=pt;var yt=bt;function jt(){this.__data__=new yt,this.size=0}var mt=jt;function gt(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e}var xt=gt;function _t(t){return this.__data__.get(t)}var Ot=_t;function $t(t){return this.__data__.has(t)}var kt=$t,At=nr(u,"Map"),St=At,Mt=nr(Object,"create"),Ct=Mt;function Dt(){this.__data__=Ct?Ct(null):{},this.size=0}var Pt=Dt;function Bt(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}var Et=Bt,Ft="__lodash_hash_undefined__",Lt=Object.prototype,Tt=Lt.hasOwnProperty;function Vt(t){var r=this.__data__;if(Ct){var e=r[t];return e===Ft?void 0:e}return Tt.call(r,t)?r[t]:void 0}var Gt=Vt,Wt=Object.prototype,Nt=Wt.hasOwnProperty;function Rt(t){var r=this.__data__;return Ct?void 0!==r[t]:Nt.call(r,t)}var zt=Rt,Ht="__lodash_hash_undefined__";function It(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=Ct&&void 0===r?Ht:r,this}var Jt=It;function Zt(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Zt.prototype.clear=Pt,Zt.prototype.delete=Et,Zt.prototype.get=Gt,Zt.prototype.has=zt,Zt.prototype.set=Jt;var qt=Zt;function Kt(){this.size=0,this.__data__={hash:new qt,map:new(St||yt),string:new qt}}var Qt=Kt;function Ut(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}var Xt=Ut;function Yt(t,r){var e=t.__data__;return Xt(r)?e["string"==typeof r?"string":"hash"]:e.map}var rn=Yt;function tn(t){var r=rn(this,t).delete(t);return this.size-=r?1:0,r}var nn=tn;function en(t){return rn(this,t).get(t)}var an=en;function un(t){return rn(this,t).has(t)}var on=un;function fn(t,r){var e=rn(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this}var vn=fn;function sn(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}sn.prototype.clear=Qt,sn.prototype.delete=nn,sn.prototype.get=an,sn.prototype.has=on,sn.prototype.set=vn;var cn=sn,ln=200;function hn(t,r){var e=this.__data__;if(e instanceof yt){var n=e.__data__;if(!St||n.length<ln-1)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new cn(n)}return e.set(t,r),this.size=e.size,this}var wn=hn;function dn(t){var r=this.__data__=new yt(t);this.size=r.size}dn.prototype.clear=mt,dn.prototype.delete=xt,dn.prototype.get=Ot,dn.prototype.has=kt,dn.prototype.set=wn;var pn=dn,bn="__lodash_hash_undefined__";function yn(t){return this.__data__.set(t,bn),this}var jn=yn;function mn(t){return this.__data__.has(t)}var gn=mn;function xn(t){var r=-1,e=null==t?0:t.length;for(this.__data__=new cn;++r<e;)this.add(t[r])}xn.prototype.add=xn.prototype.push=jn,xn.prototype.has=gn;var _n=xn;function On(t,r){for(var e=-1,n=null==t?0:t.length;++e<n;)if(r(t[e],e,t))return!0;return!1}var $n=On;function kn(t,r){return t.has(r)}var An=kn,Sn=1,Mn=2;function Cn(t,r,e,n,a,i){var o=e&Sn,s=t.length,u=r.length;if(s!=u&&!(o&&u>s))return!1;var c=i.get(t),l=i.get(r);if(c&&l)return c==r&&l==t;var f=-1,v=!0,p=e&Mn?new _n:void 0;for(i.set(t,r),i.set(r,t);++f<s;){var h=t[f],d=r[f];if(n)var y=o?n(d,h,f,r,t,i):n(h,d,f,t,r,i);if(void 0!==y){if(y)continue;v=!1;break}if(p){if(!$n(r,(function(t,r){if(!An(p,r)&&(h===t||a(h,t,e,n,i)))return p.push(r)}))){v=!1;break}}else if(h!==d&&!a(h,d,e,n,i)){v=!1;break}}return i.delete(t),i.delete(r),v}var Dn=Cn,Pn=u.Uint8Array,Bn=Pn;function En(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}var Fn=En;function Ln(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var Tn=Ln,Vn=1,Gn=2,Wn="[object Boolean]",Nn="[object Date]",Rn="[object Error]",zn="[object Map]",Hn="[object Number]",In="[object RegExp]",Jn="[object Set]",Zn="[object String]",qn="[object Symbol]",Kn="[object ArrayBuffer]",Qn="[object DataView]",Un=v?v.prototype:void 0,Xn=Un?Un.valueOf:void 0;function Yn(t,r,e,n,a,i,o){switch(e){case Qn:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case Kn:return!(t.byteLength!=r.byteLength||!i(new Bn(t),new Bn(r)));case Wn:case Nn:case Hn:return at(+t,+r);case Rn:return t.name==r.name&&t.message==r.message;case In:case Zn:return t==r+"";case zn:var s=Fn;case Jn:var u=n&Vn;if(s||(s=Tn),t.size!=r.size&&!u)return!1;var c=o.get(t);if(c)return c==r;n|=Gn,o.set(t,r);var l=Dn(s(t),s(r),n,a,i,o);return o.delete(t),l;case qn:if(Xn)return Xn.call(t)==Xn.call(r)}return!1}var re=Yn;function te(t,r){for(var e=-1,n=r.length,a=t.length;++e<n;)t[a+e]=r[e];return t}var ne=te;function ee(t,r,e){var n=r(t);return x(t)?n:ne(n,e(t))}var ae=ee;function ie(t,r){for(var e=-1,n=null==t?0:t.length,a=0,i=[];++e<n;){var o=t[e];r(o,e,t)&&(i[a++]=o)}return i}var ue=ie;function oe(){return[]}var fe=oe,ve=Object.prototype,se=ve.propertyIsEnumerable,ce=Object.getOwnPropertySymbols,le=ce?function(t){return null==t?[]:(t=Object(t),ue(ce(t),(function(r){return se.call(t,r)})))}:fe,he=le;function we(t){return ae(t,Jr,he)}var de=we,pe=1,be=Object.prototype,ye=be.hasOwnProperty;function je(t,r,e,n,a,i){var o=e&pe,s=de(t),u=s.length;if(u!=de(r).length&&!o)return!1;for(var c=u;c--;){var l=s[c];if(!(o?l in r:ye.call(r,l)))return!1}var f=i.get(t),v=i.get(r);if(f&&v)return f==r&&v==t;var p=!0;i.set(t,r),i.set(r,t);for(var h=o;++c<u;){var d=t[l=s[c]],y=r[l];if(n)var w=o?n(y,d,l,r,t,i):n(d,y,l,t,r,i);if(!(void 0===w?d===y||a(d,y,e,n,i):w)){p=!1;break}h||(h="constructor"==l)}if(p&&!h){var g=t.constructor,_=r.constructor;g==_||!("constructor"in t)||!("constructor"in r)||"function"==typeof g&&g instanceof g&&"function"==typeof _&&_ instanceof _||(p=!1)}return i.delete(t),i.delete(r),p}var me=je,ge=nr(u,"DataView"),xe=ge,_e=nr(u,"Promise"),Oe=_e,$e=nr(u,"Set"),ke=$e,Ae=nr(u,"WeakMap"),Se=Ae,Me="[object Map]",Ce="[object Object]",De="[object Promise]",Pe="[object Set]",Be="[object WeakMap]",Ee="[object DataView]",Fe=z(xe),Le=z(St),Te=z(Oe),Ve=z(ke),Ge=z(Se),We=i;(xe&&We(new xe(new ArrayBuffer(1)))!=Ee||St&&We(new St)!=Me||Oe&&We(Oe.resolve())!=De||ke&&We(new ke)!=Pe||Se&&We(new Se)!=Be)&&(We=function(t){var r=i(t),e=r==Ce?t.constructor:void 0,n=e?z(e):"";if(n)switch(n){case Fe:return Ee;case Le:return Me;case Te:return De;case Ve:return Pe;case Ge:return Be}return r});var Ne=We,Re=1,ze="[object Arguments]",He="[object Array]",Ie="[object Object]",Je=Object.prototype,Ze=Je.hasOwnProperty;function qe(t,r,e,n,a,i){var o=x(t),s=x(r),u=o?He:Ne(t),c=s?He:Ne(r),l=(u=u==ze?Ie:u)==Ie,f=(c=c==ze?Ie:c)==Ie,v=u==c;if(v&&$r(t)){if(!$r(r))return!1;o=!0,l=!1}if(v&&!l)return i||(i=new pn),o||m(t)?Dn(t,r,e,n,a,i):re(t,r,u,e,n,a,i);if(!(e&Re)){var p=l&&Ze.call(t,"__wrapped__"),h=f&&Ze.call(r,"__wrapped__");if(p||h){var d=p?t.value():t,y=h?r.value():r;return i||(i=new pn),a(d,y,e,n,i)}}return!!v&&(i||(i=new pn),me(t,r,e,n,a,i))}var Ke=qe;function Qe(t,r,e,n,a){return t===r||(null==t||null==r||!o(t)&&!o(r)?t!=t&&r!=r:Ke(t,r,e,n,Qe,a))}var Ue=Qe,Xe=1,Ye=2;function ra(t,r,e,n){var a=e.length,i=a,o=!n;if(null==t)return!i;for(t=Object(t);a--;){var s=e[a];if(o&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++a<i;){var u=(s=e[a])[0],c=t[u],l=s[1];if(o&&s[2]){if(void 0===c&&!(u in t))return!1}else{var f=new pn;if(n)var v=n(c,l,u,t,r,f);if(!(void 0===v?Ue(l,c,Xe|Ye,n,f):v))return!1}}return!0}var ta=ra;function na(t){return t==t&&!S(t)}var ea=na;function aa(t){for(var r=Jr(t),e=r.length;e--;){var n=r[e],a=t[n];r[e]=[n,a,ea(a)]}return r}var ia=aa;function ua(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}}var oa=ua;function fa(t){var r=ia(t);return 1==r.length&&r[0][2]?oa(r[0][0],r[0][1]):function(e){return e===t||ta(e,t,r)}}var va=fa,sa="[object Symbol]";function ca(t){return"symbol"==typeof t||o(t)&&i(t)==sa}var la=ca,ha=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wa=/^\w*$/;function da(t,r){if(x(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!la(t))||wa.test(t)||!ha.test(t)||null!=r&&t in Object(r)}var pa=da,ba="Expected a function";function ya(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError(ba);var e=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=e.cache;if(i.has(a))return i.get(a);var o=t.apply(this,n);return e.cache=i.set(a,o)||i,o};return e.cache=new(ya.Cache||cn),e}ya.Cache=cn;var ja=ya,ma=500;function ga(t){var r=ja(t,(function(t){return e.size===ma&&e.clear(),t})),e=r.cache;return r}var xa=ga,_a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Oa=/\\(\\)?/g,$a=xa((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(_a,(function(t,e,n,a){r.push(n?a.replace(Oa,"$1"):e||t)})),r})),ka=$a;function Aa(t,r){for(var e=-1,n=null==t?0:t.length,a=Array(n);++e<n;)a[e]=r(t[e],e,t);return a}var Sa=Aa,Ma=1/0,Ca=v?v.prototype:void 0,Da=Ca?Ca.toString:void 0;function Pa(t){if("string"==typeof t)return t;if(x(t))return Sa(t,Pa)+"";if(la(t))return Da?Da.call(t):"";var r=t+"";return"0"==r&&1/t==-Ma?"-0":r}var Ba=Pa;function Ea(t){return null==t?"":Ba(t)}var Fa=Ea;function La(t,r){return x(t)?t:pa(t,r)?[t]:ka(Fa(t))}var Ta=La,Va=1/0;function Ga(t){if("string"==typeof t||la(t))return t;var r=t+"";return"0"==r&&1/t==-Va?"-0":r}var Wa=Ga;function Na(t,r){for(var e=0,n=(r=Ta(r,t)).length;null!=t&&e<n;)t=t[Wa(r[e++])];return e&&e==n?t:void 0}var Ra=Na;function za(t,r,e){var n=null==t?void 0:Ra(t,r);return void 0===n?e:n}var Ha=za;function Ia(t,r){return null!=t&&r in Object(t)}var Ja=Ia;function Za(t,r,e){for(var n=-1,a=(r=Ta(r,t)).length,i=!1;++n<a;){var o=Wa(r[n]);if(!(i=null!=t&&e(t,o)))break;t=t[o]}return i||++n!=a?i:!!(a=null==t?0:t.length)&&f(a)&&Mr(o,a)&&(x(t)||xr(t))}var qa=Za;function Ka(t,r){return null!=t&&qa(t,r,Ja)}var Qa=Ka,Ua=1,Xa=2;function Ya(t,r){return pa(t)&&ea(r)?oa(Wa(t),r):function(e){var n=Ha(e,t);return void 0===n&&n===r?Qa(e,t):Ue(r,n,Ua|Xa)}}var ri=Ya;function ti(t){return t}var ni=ti;function ei(t){return function(r){return null==r?void 0:r[t]}}var ai=ei;function ii(t){return function(r){return Ra(r,t)}}var ui=ii;function oi(t){return pa(t)?ai(Wa(t)):ui(t)}var fi=oi;function vi(t){return"function"==typeof t?t:null==t?ni:"object"==typeof t?x(t)?ri(t[0],t[1]):va(t):fi(t)}var si=vi;function ci(t,r){return function(e,n){var a=x(e)?fr:rt,i=r?r():{};return a(e,t,si(n),i)}}var li=ci,hi=Object.prototype,wi=hi.hasOwnProperty,di=li((function(t,r,e){wi.call(t,e)?t[e].push(r):ur(t,e,[r])})),pi=di;function bi(t,r,e,n){for(var a=t.length,i=e+(n?1:-1);n?i--:++i<a;)if(r(t[i],i,t))return i;return-1}var yi=bi;function ji(t){return t!=t}var mi=ji;function gi(t,r,e){for(var n=e-1,a=t.length;++n<a;)if(t[n]===r)return n;return-1}var xi=gi;function _i(t,r,e){return r==r?xi(t,r,e):yi(t,mi,e)}var Oi=_i;function $i(t,r){return!(null==t||!t.length)&&Oi(t,r,0)>-1}var ki=$i;function Ai(t,r,e){for(var n=-1,a=null==t?0:t.length;++n<a;)if(e(r,t[n]))return!0;return!1}var Si=Ai;function Mi(){}var Ci=Mi,Di=1/0,Pi=ke&&1/Tn(new ke([,-0]))[1]==Di?function(t){return new ke(t)}:Ci,Bi=Pi,Ei=200;function Fi(t,r,e){var n=-1,a=ki,i=t.length,o=!0,s=[],u=s;if(e)o=!1,a=Si;else if(i>=Ei){var c=r?null:Bi(t);if(c)return Tn(c);o=!1,a=An,u=new _n}else u=r?[]:s;t:for(;++n<i;){var l=t[n],f=r?r(l):l;if(l=e||0!==l?l:0,o&&f==f){for(var v=u.length;v--;)if(u[v]===f)continue t;r&&u.push(f),s.push(l)}else a(u,f,e)||(u!==s&&u.push(f),s.push(l))}return s}var Li=Fi;function Ti(t,r){return t&&t.length?Li(t,si(r)):[]}var Vi=Ti;const Gi=class{constructor(t){r(this,t),this.buildModel=(t="")=>{let r=Vi(l.activityDescriptors.filter((t=>!1!==t.isBrowsable)).sort(((t,r)=>t.version>r.version?1:-1)),(t=>`${t.typeName}:${t.version}`));t&&(r=r.filter((r=>r.displayName.toLocaleLowerCase().includes(t.toLocaleLowerCase()))));const e=pi(r,(t=>t.category)),n=Object.keys(e).sort(((t,r)=>t.localeCompare(r))),a=new Map,i=n.map((t=>({category:t,expanded:!!this.expandedCategories.find((r=>r==t)),activities:e[t]}))),o=h.get(w);for(const t of r){const r=t.typeName,e=o.createDriver(r).display({displayType:"picker",activityDescriptor:t});a.set(r,e)}return this.categoryModels=i,this.renderedActivities=a,{categories:i,activities:a}},this.graph=void 0,this.isReadonly=void 0,this.expandedCategories=[],this.categoryModels=[],this.renderedActivities=[]}handleGraphChanged(t){this.dnd&&this.dnd.dispose(),this.dnd=new s({target:t,scaled:!1,animation:!0})}componentWillLoad(){h.get(d).onActivityDescriptorsUpdated(this.buildModel),this.buildModel()}static onActivityStartDrag(t,r){const e=JSON.stringify(r);t.dataTransfer.setData("activity-descriptor",e)}onToggleActivityCategory(t){const r=t.category,e=this.expandedCategories,n=!!e.find((t=>t==r));this.expandedCategories=n?e.filter((t=>t!=r)):[...e,r],t.expanded=!t.expanded}filterActivities(t){var r;let e=(null===(r=t.target)||void 0===r?void 0:r.value)||"";this.buildModel(e)}render(){return t("nav",{class:"tw-flex-1 tw-px-2 tw-space-y-1 tw-font-sans tw-text-sm tw-text-gray-600"},t("input",{class:"tw-my-1",placeholder:"Search Activities",type:"text",name:"activity-search",id:"activitySearch",onInput:this.filterActivities.bind(this)}),this.categoryModels.map((r=>{const e=r.category,n=r.activities,a=r.expanded?"tw-rotate-90":"",i=r.expanded?"":"hidden";return t("div",{class:"tw-space-y-1"},t("button",{type:"button",onClick:()=>this.onToggleActivityCategory(r),class:"tw-text-gray-600 hover:tw-bg-gray-50 hover:tw-text-gray-900 tw-group tw-w-full tw-flex tw-items-center tw-pr-2 tw-py-2 tw-text-left tw-text-sm tw-font-medium tw-rounded-md focus:tw-outline-none"},t("svg",{class:`${a} tw-text-gray-300 tw-mr-2 tw-flex-shrink-0 tw-h-5 tw-w-5 tw-transform group-hover:tw-text-gray-400 tw-transition-colors tw-ease-in-out tw-duration-150`,viewBox:"0 0 20 20","aria-hidden":"true"},t("path",{d:"M6 6L14 10L6 14V6Z",fill:"currentColor"})),e),t("div",{class:`tw-space-y-0.5 ${i}`},n.map((r=>{const e=this.renderedActivities.get(r.typeName);return t("div",{class:"tw-w-full tw-flex tw-items-center tw-pl-10 tw-pr-2 tw-py-2"},t("div",{class:"tw-relative tw-cursor-move",onDragStart:t=>Gi.onActivityStartDrag(t,r)},t("elsa-tooltip",{tooltipPosition:"right",tooltipContent:r.description},t("div",{innerHTML:e,draggable:!this.isReadonly}))))}))))})))}static get watchers(){return{graph:["handleGraphChanged"]}}};export{k as elsa_tooltip,Gi as elsa_workflow_definition_editor_toolbox_activities};