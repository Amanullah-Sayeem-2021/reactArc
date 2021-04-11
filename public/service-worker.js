const cacheName = "cache-02";
const cacheFiles = ["index.html", "about.html"];

this.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("serverWorker installed filels==");
        cache.addAll(cacheFiles);
      })
      .then(() => this.skipWaiting())
  );
});

this.addEventListener("activate", (e) => {
  console.log("service Worker activated");
  caches.keys().then((cacheNames) => {
    return Promise.all(
      cacheNames.map((cache) => {
        if (cache !== cacheName) {
          console.log("ser worker : cleaniing old cash");
          return caches.delete(cache);
        }
      })
    );
  });
});

// this.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request);
//     })
//   );
// });

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return (
        resp ||
        fetch(event.request).then((response) => {
          return caches.open("v1").then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});
