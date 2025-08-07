// admin/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEeT_n4S6OZW1OEKArUNumxv7bFJjv9s8",
  authDomain: "kaos-css.firebaseapp.com",
  projectId: "kaos-css",
  storageBucket: "kaos-css.firebasestorage.app",
  messagingSenderId: "154063044863",
  appId: "1:154063044863:web:01ce9cc45e7cc85d804cca",
  measurementId: "G-WZNK864NMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);.js

// Firebase SDK fonksiyonlarını içe aktar
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// Firebase yapılandırman – bunu Firebase’den aldığın config ile doldur
const firebaseConfig = {
  apiKey: "AİLETTİĞİN-API-KEY",
  authDomain: "PROJENİNKİ.firebaseapp.com",
  projectId: "PROJE-ID",
  storageBucket: "PROJENİNKİ.appspot.com",
  messagingSenderId: "123456789",
  appId: "APP-ID"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };