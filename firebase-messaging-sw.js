/* NEXORA GAMING — push notification service worker. Put your Firebase config below. */
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: "AIzaSyA0O1hYUfRCanbWg8zbc-BauERpts25LV0",
  authDomain: "planning-with-ai-5e00e.firebaseapp.com",
  projectId: "planning-with-ai-5e00e",
  storageBucket: "planning-with-ai-5e00e.firebasestorage.app",
  messagingSenderId: "954386841987",
  appId: "1:954386841987:web:96610687f3f7fb1bb276b6"
});
firebase.messaging();
