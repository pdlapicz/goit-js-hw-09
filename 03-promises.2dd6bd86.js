function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");function u(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const n=document.querySelector('input[name="delay"]'),o=document.querySelector('input[name="step"]'),r=document.querySelector('input[name="amount"]'),l=parseInt(n.value),a=parseInt(o.value),d=parseInt(r.value);for(let t=0;t<=d;t++){u(t,l+a*(t-1)).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n} ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n} ms`)}))}}));
//# sourceMappingURL=03-promises.2dd6bd86.js.map
