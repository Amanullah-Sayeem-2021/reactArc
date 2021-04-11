export function register() {
  if ("serviceWorker" in navigator) {
    console.log("service worker supoorted");
    let swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register(swUrl)
        .then((reg) => {
          console.log("service worker reg==", reg);
        })
        .catch((err) => {
          console.log("servceworker error==", err);
        });
    });
  }
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((reg) => {
      reg.unregister().catch((err) => console.log("errrrrrr", err.massage));
    });
  }
}
