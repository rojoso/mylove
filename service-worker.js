"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","302f557b71c784cae115695891b4df1f"],["/static/css/main.7a0f7353.css","d15c2d52a1ce61c37acac6a32670a433"],["/static/js/main.6dc4f6af.js","da9b26ea5ee453d2a68ba4d49a6c533f"],["/static/media/ico-arrow.163911c1.woff","163911c12adcf7706a9ca678447d4b61"],["/static/media/ico-arrow.1a1d7d98.eot","1a1d7d98253aa40865fff666cccd4f2b"],["/static/media/ico-arrow.4d3bde83.svg","4d3bde83c23e9a9a61d1eeeda020e9d9"],["/static/media/ico-arrow.b1d37785.ttf","b1d377859bc711d1867d78cd8cd92e08"],["/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/static/media/p1.c29e1b3a.jpg","c29e1b3a0828270d7de3baba93af8dd5"],["/static/media/p10.9657cf55.jpg","9657cf55585df0ef5b3ec44438ad877b"],["/static/media/p11.6ea169b5.jpg","6ea169b526c29974de23376b345821cf"],["/static/media/p12.ac74677d.jpg","ac74677db87fc7f798bc5c1633be1e7e"],["/static/media/p13.1f7a226a.jpg","1f7a226afa1fb5ef76e79ac3cc0f7919"],["/static/media/p14.55aeaf47.jpg","55aeaf474bc2189ea60a0dbbcc76455d"],["/static/media/p15.cc9e5c33.jpg","cc9e5c33feabf827df8842e921e19d2f"],["/static/media/p16.f1d64a10.jpg","f1d64a102b4c22d3fa9e122a7983a3bb"],["/static/media/p2.4ecad3c2.jpg","4ecad3c26846094725646d3756e00f05"],["/static/media/p3.c523bf9d.jpg","c523bf9d07d6c18332011696b86e671b"],["/static/media/p4.4b471280.jpg","4b471280ecc5ea3fe137e62393c4eb0f"],["/static/media/p5.5617355e.jpg","5617355ef0ec3103dc5cd4d66dd273cf"],["/static/media/p6.9eb8facc.jpg","9eb8facc8c73305d0f8df284b2a86b77"],["/static/media/p7.36e26ebc.jpg","36e26ebc730178674d35dcdc9cc336bc"],["/static/media/p8.05d132b9.jpg","05d132b9d6d3f7bc4a0b91162cef4ba3"],["/static/media/p9.1d90e08d.jpg","1d90e08dc4fd8d1450ecc759d097d5e9"],["/static/media/turnning.6c5c4fe4.svg","6c5c4fe411bfc158ba1bc126fb15b4f4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("./index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});