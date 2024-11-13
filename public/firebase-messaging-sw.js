importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyDfBU5E5iVWxfzllNspT0BA9uCmarqdnTA",
  authDomain: "huejutla-delfines.firebaseapp.com",
  projectId: "huejutla-delfines",
  storageBucket: "huejutla-delfines.firebasestorage.app",
  messagingSenderId: "986139444415",
  appId: "1:986139444415:web:963da1e8dd92056ee3b20a"
};

const app = firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging(app)

messaging.onBackgroundMessage((payload) => {
  console.log('Mensaje recibido en segundo plano: ', payload)
  console.log(payload)

  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: "https://labarbada.store/img/logo.png"
  }

  return self.registration.showNotification(notificationTitle, notificationOptions)
})