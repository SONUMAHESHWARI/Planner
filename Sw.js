self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("planner-v1").then(cache =>
      cache.addAll(["./", "./index.html"])
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});

self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(
    clients.openWindow("./")
  );
});
