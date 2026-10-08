const C="sg-trip-v53";
self.addEventListener("install",e=>{self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(Promise.all([
 self.clients.claim(),
 caches.keys().then(keys=>Promise.all(keys.map(k=>caches.delete(k))))
]))});
self.addEventListener("fetch",e=>{
 if(e.request.mode==="navigate"){
  e.respondWith(fetch(e.request,{cache:"no-store"}).catch(()=>caches.match("./index.html")));
  return;
 }
 e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});