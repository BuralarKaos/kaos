// Firebase SDK'ları yüklendiğini varsayıyoruz:
// Bu dosya index.html ile birlikte çalışır

// 1. Firebase yapılandırması – KENDİ PROJENE AİT
const firebaseConfig = {
  apiKey: "AIzaSyAEeT_n4S6OZW1OEKArUNumxv7bFJjv9s8",
  authDomain: "kaos-css.firebaseapp.com",
  projectId: "kaos-css",
  storageBucket: "kaos-css.appspot.com",
  messagingSenderId: "154063044863",
  appId: "1:154063044863:web:01ce9cc45e7cc85d804cca",
  measurementId: "G-WZNK864NMT"
};

// 2. Firebase'i başlat
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// 3. Giriş yap
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Giriş başarılı! Hoş geldin.");
      document.getElementById("auth").style.display = "none";
      document.getElementById("panel").style.display = "block";
    })
    .catch((error) => {
      alert("Hatalı giriş: " + error.message);
    });
}

// 4. Kayıt ol
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Kayıt başarılı. Giriş yapabilirsiniz.");
    })
    .catch((error) => {
      alert("Kayıt hatası: " + error.message);
    });
}

// 5. Çıkış yap
function logout() {
  auth.signOut()
    .then(() => {
      document.getElementById("auth").style.display = "block";
      document.getElementById("panel").style.display = "none";
    });
}
