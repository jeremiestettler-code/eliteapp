// programme-force PWA service worker (mise à jour propre)
const CACHE_PREFIX = "programme-force";
const CACHE_VERSION = "v4"; // <-- incrémente à chaque release: v3, v4...3
const CACHE_NAME = `${CACHE_PREFIX}-${CACHE_VERSION}`;

// App shell (stable)
const CORE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./images.js",
  "./sessions.js",
  "./sessions_femme.js",
  "./service-worker.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async ()=>{
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter(k => k.startsWith(CACHE_PREFIX + "-") && k !== CACHE_NAME)
        .map(k => caches.delete(k))
    );
    await self.clients.claim();
  })());
});

self.addEventListener("message", (event) => {
  if(event?.data?.type === "SKIP_WAITING"){
    self.skipWaiting();
  }
});

// Network-first for navigations (index.html), cache-first for everything else
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if(url.origin !== self.location.origin) return;

  const isNav = req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html");

  if(isNav){
    event.respondWith((async ()=>{
      try{
        const fresh = await fetch(req, { cache: "no-store" });
        const cache = await caches.open(CACHE_NAME);
        cache.put("./index.html", fresh.clone());
        return fresh;
      }catch(e){
        return (await caches.match("./index.html")) || (await caches.match("./")) || Response.error();
      }
    })());
    return;
  }

  event.respondWith((async ()=>{
    const cached = await caches.match(req);
    if(cached) return cached;

    try{
      const res = await fetch(req);
      const cache = await caches.open(CACHE_NAME);
      if(res && (res.status === 200 || res.type === "opaque")){
        cache.put(req, res.clone());
      }
      return res;
    }catch(e){
      return cached || Response.error();
    }
  })());
});
