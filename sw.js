if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const d=e=>s(e,o),c={module:{uri:o},exports:t,require:d};i[o]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-BT8p1Ry2.js",revision:null},{url:"assets/workbox-window.prod.es5-DL_hIMXg.js",revision:null},{url:"icon.svg",revision:"c120b517e522fc592b57c5a1e3b324ff"},{url:"index.html",revision:"91be98723dbc61d12dbe3d3c56dcef93"},{url:"manifest.webmanifest",revision:"6fb0be6140dc9d692d153ca8533df712"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"icon.svg",revision:"c120b517e522fc592b57c5a1e3b324ff"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"6fb0be6140dc9d692d153ca8533df712"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
