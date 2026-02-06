// Programme Force / EliteTraining - Service Worker
// Update-friendly caching strategy (iOS PWA friendly)

const CACHE_VERSION = "v2"; // <-- increment this on each release
const CACHE_NAME = `programme-force-${CACHE_VERSION}`;
const RUNTIME_CACHE = `programme-force-runtime-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./images.js",
  "./sessions.js",
  "./sessions_femme.js",
  "./images/icon-192.png",
  "./images/icon-512.png"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).catch(()=>{})
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async ()=>{
    // Remove old caches
    const keys = await caches.keys();
    await Promise.all(
      keys.map((k)=>{
        if(k !== CACHE_NAME && k !== RUNTIME_CACHE){
          return caches.delete(k);
        }
      })
    );
    await self.clients.claim();
  })());
});

// Allow the page to trigger immediate activation of an updated SW
self.addEventListener("message", (event) => {
  if(event?.data?.type === "SKIP_WAITING"){
    self.skipWaiting();
  }
});

async function networkFirst(request){
  try{
    const response = await fetch(request);
    // Cache successful GETs
    if(request.method === "GET" && response && response.status === 200){
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone()).catch(()=>{});
    }
    return response;
  }catch(e){
    const cached = await caches.match(request);
    return cached || caches.match("./index.html");
  }
}

async function cacheFirst(request){
  const cached = await caches.match(request);
  if(cached) return cached;
  try{
    const response = await fetch(request);
    if(request.method === "GET" && response && response.status === 200){
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone()).catch(()=>{});
    }
    return response;
  }catch(e){
    return cached;
  }
}

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Only handle GET
  if(req.method !== "GET") return;

  const url = new URL(req.url);

  // Navigations: always try network first to get latest index.html (update-friendly)
  if(req.mode === "navigate"){
    event.respondWith(networkFirst(req));
    return;
  }

  // Only cache same-origin assets
  if(url.origin === self.location.origin){
    // HTML should be network-first (safety)
    const accept = req.headers.get("accept") || "";
    if(accept.includes("text/html")){
      event.respondWith(networkFirst(req));
      return;
    }

    // Assets: cache-first (fast)
    event.respondWith(cacheFirst(req));
  }
});
