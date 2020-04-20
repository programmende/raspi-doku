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
    "revision": "505cc565b304e41785c9c8f4d20272b7"
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
    "url": "assets/js/10.a1b59d1a.js",
    "revision": "04d51a5f85f7fa2d3f4a4208bd19e84e"
  },
  {
    "url": "assets/js/11.158a236b.js",
    "revision": "7df5f974f78e8998bff8abd03fd367b2"
  },
  {
    "url": "assets/js/12.dd4baab8.js",
    "revision": "d2a425d396730ae52e4d047991a0ce2a"
  },
  {
    "url": "assets/js/13.5ad06761.js",
    "revision": "0aed2bd931c9b961ccbf0054e4a2c1cc"
  },
  {
    "url": "assets/js/2.0d974955.js",
    "revision": "232a9f689770e62906d059f723625b83"
  },
  {
    "url": "assets/js/3.3f01dfcf.js",
    "revision": "dadcb453f9e5513ab6ed73d77e72f40a"
  },
  {
    "url": "assets/js/4.2edc3f91.js",
    "revision": "66298cd14df6d79b624627589a6e0226"
  },
  {
    "url": "assets/js/5.ec34f1f7.js",
    "revision": "526e8dcc387443661d0635430a16b065"
  },
  {
    "url": "assets/js/6.84dbe1d0.js",
    "revision": "573e56910615586234ad5de75766e489"
  },
  {
    "url": "assets/js/7.77608ca9.js",
    "revision": "f825734fc71d3f51525fd8d0cc879910"
  },
  {
    "url": "assets/js/8.d2298aef.js",
    "revision": "7eab2c0b5977825149d72069127156d7"
  },
  {
    "url": "assets/js/9.91353d99.js",
    "revision": "07c9c38da13face1aa6d333ff7ef8542"
  },
  {
    "url": "assets/js/app.c068539e.js",
    "revision": "fb04529903a810d993c07a61bc02eae4"
  },
  {
    "url": "guide/docker-cheatsheet.html",
    "revision": "e4e82c241f6113e5f70d7377dd7dddc1"
  },
  {
    "url": "guide/index.html",
    "revision": "b10e26035f4299e3602bc3b5ce4522e2"
  },
  {
    "url": "guide/openmediafault.html",
    "revision": "8c67df033f092dc0eb1eda3c28b754f3"
  },
  {
    "url": "guide/quick-guide.html",
    "revision": "372a0aabd434c7dc42f6bc5ed3b28fc7"
  },
  {
    "url": "guide/raspbian.html",
    "revision": "f94d22de4799d2f3290410eddc0df316"
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
    "revision": "4103c209e8a387cd5f2758b31beded5b"
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
