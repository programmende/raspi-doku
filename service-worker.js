/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cbc678e1ae48e5744c9bb71f4c528161"
  },
  {
    "url": "assets/css/0.styles.21460748.css",
    "revision": "40c79ea94299356ecc957b0e661e7536"
  },
  {
    "url": "assets/img/change-password.e253a275.png",
    "revision": "e253a2752c3e98ed00f1b8ae4b00dd9f"
  },
  {
    "url": "assets/img/change-port.067c6e97.png",
    "revision": "067c6e976b45797462dd262ad0ebaf73"
  },
  {
    "url": "assets/img/change-time.01519a8e.png",
    "revision": "01519a8e7744905e30e44ce9b865c0a3"
  },
  {
    "url": "assets/img/loginscreen.b17a63e1.png",
    "revision": "b17a63e183248acfb249d16b8f2a8591"
  },
  {
    "url": "assets/img/raspi-config-menu-localisation-change-locale-de.a43618dc.png",
    "revision": "a43618dca886f3f0f63100ef629c38ef"
  },
  {
    "url": "assets/img/raspi-config-menu-localisation-change-locale-env.8838d5f3.png",
    "revision": "8838d5f35e6bc83022217913057fc784"
  },
  {
    "url": "assets/img/raspi-config-menu-localisation-change-locale-menu-timezone.9a652ae0.png",
    "revision": "9a652ae0d05b9d463d53ca6ae69f5c0e"
  },
  {
    "url": "assets/img/raspi-config-menu-localisation-change-locale-timezone-berlin.de9a37d5.png",
    "revision": "de9a37d51199956bc36270b57f13433f"
  },
  {
    "url": "assets/img/raspi-config-menu-localisation-change-locale-timezone-europe.d428c64f.png",
    "revision": "d428c64f7f534a9cc9d031817ed845ed"
  },
  {
    "url": "assets/img/raspi-config-menu-localisation-menu-change-locale.9fa1fcac.png",
    "revision": "9fa1fcacddb9ccb7b3cad5cfb68d41d2"
  },
  {
    "url": "assets/img/raspi-config-menu-localisation.2bfad3ce.png",
    "revision": "2bfad3ce8908981496f1c258f42595dc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4420ff85.js",
    "revision": "e820d2bab4f7670ed7cc8ffd961568df"
  },
  {
    "url": "assets/js/11.215cd6a2.js",
    "revision": "cb144488fe530c515508ef6db59d8cf0"
  },
  {
    "url": "assets/js/12.dd4baab8.js",
    "revision": "d2a425d396730ae52e4d047991a0ce2a"
  },
  {
    "url": "assets/js/13.894ab55e.js",
    "revision": "065e561c1d233222ba101907c940ef3c"
  },
  {
    "url": "assets/js/2.2dadc046.js",
    "revision": "f9a4c560c42add56b843848dde0edcdf"
  },
  {
    "url": "assets/js/3.0f0ab211.js",
    "revision": "876d6646cad686fd0c10614a03fef68f"
  },
  {
    "url": "assets/js/4.cd8afc6f.js",
    "revision": "61a19b4156db5f4da96e4925e1090e50"
  },
  {
    "url": "assets/js/5.dac86937.js",
    "revision": "800f25aac50fc25fe0d2604932130602"
  },
  {
    "url": "assets/js/6.09ee6522.js",
    "revision": "63c052628cd7f15383f17886df00cdea"
  },
  {
    "url": "assets/js/7.9e89361e.js",
    "revision": "179af740862c1ebddf0faa9874ff7b16"
  },
  {
    "url": "assets/js/8.634dbede.js",
    "revision": "d984e1173393aacce497dc2876601b7c"
  },
  {
    "url": "assets/js/9.ee18e517.js",
    "revision": "c5867a38e95e81c0af732bed7a5c131c"
  },
  {
    "url": "assets/js/app.62c6510d.js",
    "revision": "9542ec4e387db5a2cda82bd3071dd007"
  },
  {
    "url": "guide/docker-cheatsheet.html",
    "revision": "592e37da4e0d4e89d4046b22b89f58d4"
  },
  {
    "url": "guide/index.html",
    "revision": "e3cf80e5d099717a4a451a91888b6258"
  },
  {
    "url": "guide/openmediafault.html",
    "revision": "4a41052701420311ded019709f56d2b3"
  },
  {
    "url": "guide/quick-guide.html",
    "revision": "2bcc5aeaf3a1d867f91af69ab253969b"
  },
  {
    "url": "guide/raspbian.html",
    "revision": "710e3eb81b6996478ba63a6b6c3bf462"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "dd347e605e991c69db41aa7e35dd6886"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "9679780056dbd8fbcde3928da5b7e632"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "47f173863480d668c0f31fa0a2d4bc1e"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "57aeafa9f528c63cc022bee3976db145"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "ae7ad9b0c54768b18e3c3921c7de4915"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "3d93a94fe6bcf0b450b22c6ab7a2b40a"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "357d0dad9bfccc4d15faf2036bceb8c2"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "e8acfcf88fc88c38cfa6ac5d1727a7a8"
  },
  {
    "url": "index.html",
    "revision": "b6450add8bd806de4c6cf9b9cab04b34"
  },
  {
    "url": "rpi3.jpg",
    "revision": "ad5004ee8338a1e0f0d05379f65f61be"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
