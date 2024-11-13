// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getMessaging } from "firebase/messaging";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfBU5E5iVWxfzllNspT0BA9uCmarqdnTA",
    authDomain: "huejutla-delfines.firebaseapp.com",
    projectId: "huejutla-delfines",
    storageBucket: "huejutla-delfines.firebasestorage.app",
    messagingSenderId: "986139444415",
    appId: "1:986139444415:web:963da1e8dd92056ee3b20a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const messaging = getMessaging(app)
// const analytics = getAnalytics(app);
