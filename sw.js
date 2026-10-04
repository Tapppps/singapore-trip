const C="sg-trip-v14";
const CORE=["./manifest.webmanifest"];
self.addEventListener("install",e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)));
});
self.addEventListener("activate",e=>{
  e.waitUntil(Promise.all([
    self.clients.claim(),
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k))))
  ]));
});
self.addEventListener("fetch",e=>{
  const req=e.request;
  if(req.mode==="navigate"){
    e.respondWith(fetch(req).catch(()=>caches.match("./index.html")));
    return;
  }
  e.respondWith(fetch(req).catch(()=>caches.match(req)));
});