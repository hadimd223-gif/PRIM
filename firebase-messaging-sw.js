/* NEXORA GAMING — push notification service worker (must stay at the site root, next to index.html) */
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: "AIzaSyAZJo4L8PazXvt3ClX7w-hVz1gjl69nBmk",
  authDomain: "nexora-ceab5.firebaseapp.com",
  projectId: "nexora-ceab5",
  storageBucket: "nexora-ceab5.firebasestorage.app",
  messagingSenderId: "140360835638",
  appId: "1:140360835638:web:a737b9381f1609ce5eee97"
});
firebase.messaging(); // the server sends "notification" messages, the browser shows them automatically
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var link = (e.notification.data && e.notification.data.FCM_MSG && e.notification.data.FCM_MSG.notification && e.notification.data.FCM_MSG.notification.click_action) || '/';
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (l) {
    for (var i = 0; i < l.length; i++) if ('focus' in l[i]) return l[i].focus();
    return clients.openWindow(link);
  }));
});
