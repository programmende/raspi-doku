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
    "revision": "bd3ee2f9d70c92c1513a4b47b402de49"
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
    "url": "assets/img/raspberry-imager-01.07d10df4.png",
    "revision": "07d10df4e59dcfbdb082c26f7b737dcc"
  },
  {
    "url": "assets/img/raspberry-imager-02.0c1eb5b7.png",
    "revision": "0c1eb5b76b899d7d2242d7d01e77b67c"
  },
  {
    "url": "assets/img/raspberry-imager-03.9c3769eb.png",
    "revision": "9c3769ebd5be6ce85d504bd18ec2388d"
  },
  {
    "url": "assets/img/raspberry-imager-04.974b391b.png",
    "revision": "974b391bbe95b649651c0fc705bb1378"
  },
  {
    "url": "assets/img/raspberry-imager-05.3556c7ba.png",
    "revision": "3556c7ba178c92232390a8c98d1cf8fd"
  },
  {
    "url": "assets/img/raspberry-imager-06.0f64fbd0.png",
    "revision": "0f64fbd0913eb9d37fe98b443d009dbd"
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
    "url": "assets/js/10.5e806c98.js",
    "revision": "f25cb3ef2a545165eab4f2a27c833e91"
  },
  {
    "url": "assets/js/11.8b882e5c.js",
    "revision": "55c605130d314c4ba88084eb9cc671d1"
  },
  {
    "url": "assets/js/12.b0da9c9b.js",
    "revision": "4fae1bd35ad524b1b265e3fa5aa6efbf"
  },
  {
    "url": "assets/js/2.fca99418.js",
    "revision": "dbf6b2cee9bd8ed7773c20bd53e261aa"
  },
  {
    "url": "assets/js/3.900f6b41.js",
    "revision": "53162916f6af7a85d1725819995ffd54"
  },
  {
    "url": "assets/js/4.38e40784.js",
    "revision": "38a541868c7ae6f996746c2d178be23f"
  },
  {
    "url": "assets/js/5.a94a2d2b.js",
    "revision": "95103c069f92c111ef10769fcca03c8a"
  },
  {
    "url": "assets/js/6.afbfcbcf.js",
    "revision": "6fe32585b3cdc818bb1c00b2718aab89"
  },
  {
    "url": "assets/js/7.e3591215.js",
    "revision": "70b64840a604f5fff18af4626b9b909b"
  },
  {
    "url": "assets/js/8.d60f0f28.js",
    "revision": "208ab8ba5a0e1eb0bf9b541ced7bb799"
  },
  {
    "url": "assets/js/9.3fc64bc5.js",
    "revision": "4873fb828bded7410b78365294f105cb"
  },
  {
    "url": "assets/js/app.8b664d09.js",
    "revision": "70a54e7a3fafbdac1e8a7e0fa87404bf"
  },
  {
    "url": "guide/docker-cheatsheet.html",
    "revision": "8b4225258ec0cb2ff11a743d8ec156f8"
  },
  {
    "url": "guide/index.html",
    "revision": "0dd8a2ab9927484f46e2d40ca040113f"
  },
  {
    "url": "guide/openmediafault.html",
    "revision": "9f348bd6e304f0edc45359ea68a4cd79"
  },
  {
    "url": "guide/raspbian.html",
    "revision": "9c6429cff5e2907df2c9fb0e4cce12a9"
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
    "revision": "6ccaac40e64027b4f2bab1a7789c2ff3"
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
