if(!self.define){let e,t={};const n=(n,s)=>(n=new URL(n+".js",s).href,t[n]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=t,document.head.appendChild(e)}else e=n,importScripts(n),t()})).then((()=>{let e=t[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let r={};const c=e=>n(e,o),l={module:{uri:o},exports:r,require:c};t[o]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-8bc8eb74"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"manifest.webmanifest",revision:"6931dad6bb4edc9f0c40a29684283bba"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
