self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("find-phone").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./app.js"
      ]);
    })
  );
});
