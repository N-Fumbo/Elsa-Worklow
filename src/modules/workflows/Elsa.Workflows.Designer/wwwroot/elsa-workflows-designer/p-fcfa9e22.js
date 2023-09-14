/*! For license information please see p-fcfa9e22.js.LICENSE.txt */
import{c as r}from"./p-72dc819a.js";import{c as t}from"./p-144a434e.js";var n;!function(t){!function(e){var n="object"==typeof r?r:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),o=i(t);function i(t,e){return function(r,n){"function"!=typeof t[r]&&Object.defineProperty(t,r,{configurable:!0,writable:!0,value:n}),e&&e(r,n)}}void 0===n.Reflect?n.Reflect=t:o=i(n.Reflect,o),function(t){var e=Object.prototype.hasOwnProperty,r="function"==typeof Symbol,n=r&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",o=r&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",i="function"==typeof Object.create,u={__proto__:[]}instanceof Array,a=!i&&!u,f={create:i?function(){return z(Object.create(null))}:u?function(){return z({__proto__:null})}:function(){return z({})},has:a?function(t,r){return e.call(t,r)}:function(t,e){return e in t},get:a?function(t,r){return e.call(t,r)?t[r]:void 0}:function(t,e){return t[e]}},c=Object.getPrototypeOf(Function),s="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,h=s||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],r=function(){function t(t,e,r){this._index=0,this._keys=t,this._values=e,this._selector=r}return t.prototype["@@iterator"]=function(){return this},t.prototype[o]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var r=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var r=this._find(t,!0);return this._values[r]=e,this},e.prototype.delete=function(e){var r=this._find(e,!1);if(r>=0){for(var n=this._keys.length,o=r+1;o<n;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new r(this._keys,this._values,n)},e.prototype.values=function(){return new r(this._keys,this._values,i)},e.prototype.entries=function(){return new r(this._keys,this._values,u)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[o]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function i(t,e){return e}function u(t,e){return[t,e]}}():Map,p=s||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new h}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[o]=function(){return this.keys()},t}():Set,y=new(s||"function"!=typeof WeakMap?function(){var t=16,r=f.create(),n=o();return function(){function t(){this._key=o()}return t.prototype.has=function(t){var e=i(t,!1);return void 0!==e&&f.has(e,this._key)},t.prototype.get=function(t){var e=i(t,!1);return void 0!==e?f.get(e,this._key):void 0},t.prototype.set=function(t,e){return i(t,!0)[this._key]=e,this},t.prototype.delete=function(t){var e=i(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=o()},t}();function o(){var t;do{t="@@WeakMap@@"+a()}while(f.has(r,t));return r[t]=!0,t}function i(t,r){if(!e.call(t,n)){if(!r)return;Object.defineProperty(t,n,{value:f.create()})}return t[n]}function u(t,e){for(var r=0;r<e;++r)t[r]=255*Math.random()|0;return t}function a(){var e=function(t){return"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):u(new Uint8Array(t),t):u(new Array(t),t)}(t);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var r="",n=0;n<t;++n){var o=e[n];4!==n&&6!==n&&8!==n||(r+="-"),o<16&&(r+="0"),r+=o.toString(16).toLowerCase()}return r}}():WeakMap);function l(t,e,r){var n=y.get(t);if(E(n)){if(!r)return;n=new h,y.set(t,n)}var o=n.get(e);if(E(o)){if(!r)return;o=new h,n.set(e,o)}return o}function v(t,e,r){if(_(t,e,r))return!0;var n=R(e);return!T(n)&&v(t,n,r)}function _(t,e,r){var n=l(e,r,!1);return!E(n)&&function(t){return!!t}(n.has(t))}function d(t,e,r){if(_(t,e,r))return w(t,e,r);var n=R(e);return T(n)?void 0:d(t,n,r)}function w(t,e,r){var n=l(e,r,!1);if(!E(n))return n.get(t)}function g(t,e,r,n){l(r,n,!0).set(t,e)}function m(t,e){var r=b(t,e),n=R(t);if(null===n)return r;var o=m(n,e);if(o.length<=0)return r;if(r.length<=0)return o;for(var i=new p,u=[],a=0,f=r;a<f.length;a++){var c=f[a];i.has(c)||(i.add(c),u.push(c))}for(var s=0,h=o;s<h.length;s++)c=h[s],i.has(c)||(i.add(c),u.push(c));return u}function b(t,e){var r=[],n=l(t,e,!1);if(E(n))return r;for(var i=function(t){var e=S(t,o);if(!A(e))throw new TypeError;var r=e.call(t);if(!O(r))throw new TypeError;return r}(n.keys()),u=0;;){var a=K(i);if(!a)return r.length=u,r;var f=I(a);try{r[u]=f}catch(t){try{C(i)}finally{throw t}}u++}}function k(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function E(t){return void 0===t}function T(t){return null===t}function O(t){return"object"==typeof t?null!==t:"function"==typeof t}function j(t,e){switch(k(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var r=3===e?"string":5===e?"number":"default",o=S(t,n);if(void 0!==o){var i=o.call(t,r);if(O(i))throw new TypeError;return i}return function(t,e){if("string"===e){var r=t.toString;if(A(r)&&!O(o=r.call(t)))return o;if(A(n=t.valueOf)&&!O(o=n.call(t)))return o}else{var n;if(A(n=t.valueOf)&&!O(o=n.call(t)))return o;var o,i=t.toString;if(A(i)&&!O(o=i.call(t)))return o}throw new TypeError}(t,"default"===r?"number":r)}function x(t){var e=j(t,3);return function(t){return"symbol"==typeof t}(e)?e:function(t){return""+t}(e)}function M(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function A(t){return"function"==typeof t}function P(t){return"function"==typeof t}function S(t,e){var r=t[e];if(null!=r){if(!A(r))throw new TypeError;return r}}function I(t){return t.value}function K(t){var e=t.next();return!e.done&&e}function C(t){var e=t.return;e&&e.call(t)}function R(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===c)return e;if(e!==c)return e;var r=t.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return e;var o=n.constructor;return"function"!=typeof o||o===t?e:o}function z(t){return t.__=void 0,delete t.__,t}t("decorate",(function(t,e,r,n){if(E(r)){if(!M(t))throw new TypeError;if(!P(e))throw new TypeError;return function(t,e){for(var r=t.length-1;r>=0;--r){var n=(0,t[r])(e);if(!E(n)&&!T(n)){if(!P(n))throw new TypeError;e=n}}return e}(t,e)}if(!M(t))throw new TypeError;if(!O(e))throw new TypeError;if(!O(n)&&!E(n)&&!T(n))throw new TypeError;return T(n)&&(n=void 0),function(t,e,r,n){for(var o=t.length-1;o>=0;--o){var i=(0,t[o])(e,r,n);if(!E(i)&&!T(i)){if(!O(i))throw new TypeError;n=i}}return n}(t,e,r=x(r),n)})),t("metadata",(function(t,e){return function(r,n){if(!O(r))throw new TypeError;if(!E(n)&&!function(t){switch(k(t)){case 3:case 4:return!0;default:return!1}}(n))throw new TypeError;g(t,e,r,n)}})),t("defineMetadata",(function(t,e,r,n){if(!O(r))throw new TypeError;return E(n)||(n=x(n)),g(t,e,r,n)})),t("hasMetadata",(function(t,e,r){if(!O(e))throw new TypeError;return E(r)||(r=x(r)),v(t,e,r)})),t("hasOwnMetadata",(function(t,e,r){if(!O(e))throw new TypeError;return E(r)||(r=x(r)),_(t,e,r)})),t("getMetadata",(function(t,e,r){if(!O(e))throw new TypeError;return E(r)||(r=x(r)),d(t,e,r)})),t("getOwnMetadata",(function(t,e,r){if(!O(e))throw new TypeError;return E(r)||(r=x(r)),w(t,e,r)})),t("getMetadataKeys",(function(t,e){if(!O(t))throw new TypeError;return E(e)||(e=x(e)),m(t,e)})),t("getOwnMetadataKeys",(function(t,e){if(!O(t))throw new TypeError;return E(e)||(e=x(e)),b(t,e)})),t("deleteMetadata",(function(t,e,r){if(!O(e))throw new TypeError;E(r)||(r=x(r));var n=l(e,r,!1);if(E(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var o=y.get(e);return o.delete(r),o.size>0||y.delete(e),!0}))}(o)}()}(n||(n={}));const{state:e,onChange:i}=t({items:[],mainItem:null}),{state:u,onChange:f}=t({components:[]});export{e as a,u as s};