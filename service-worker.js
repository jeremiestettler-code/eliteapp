// programme-force PWA service worker (mise à jour propre)
const CACHE_PREFIX = "programme-force";
const CACHE_VERSION = "v2"; // <-- incrémente à chaque release: v3, v4...
const CACHE_NAME = `${CACHE_PREFIX}-${CACHE_VERSION}`;

// App shell (petit et stable)
const CORE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./images.js",
  "./sessions.js",
  "./sessions_femme.js",
  "./service-worker.js"
];

// Install: precache core, but do NOT force activate (we let the app show the banner)
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE))
  );
});

// Activate: cleanup old caches + take control quickly
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

// Allow the page to trigger immediate activation
self.addEventListener("message", (event) => {
  if(event?.data?.type === "SKIP_WAITING"){
    self.skipWaiting();
  }
});

// Fetch strategy:
// - index.html (navigations): network-first (always try to get the latest), fallback to cache
// - other: cache-first with runtime caching
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin
  if(url.origin !== self.location.origin) return;

  const isHTMLNav = req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html") || url.pathname.endsWith("/index.html");

  if(isHTMLNav){
    event.respondWith((async ()=>{
      try{
        const fresh = await fetch(req, { cache: "no-store" });
        const cache = await caches.open(CACHE_NAME);
        cache.put("./index.html", fresh.clone());
        return fresh;
      }catch(e){
        const cached = await caches.match("./index.html");
        return cached || caches.match("./") || Response.error();
      }
    })());
    return;
  }

  // Cache-first for static assets (including images/gifs)
  event.respondWith((async ()=>{
    const cached = await caches.match(req);
    if(cached) return cached;

    try{
      const res = await fetch(req);
      const cache = await caches.open(CACHE_NAME);
      // Only cache successful basic/opaque responses
      if(res && (res.status === 200 || res.type === "opaque")){
        cache.put(req, res.clone());
      }
      return res;
    }catch(e){
      return cached || Response.error();
    }
  })());
});
