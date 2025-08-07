console.log("script.js yüklendi");
// Firebase yapılandırması
const firebaseConfig = {
  apiKey: "AIzaSyAEeT_n4S6OZW1OEKArUNumxv7bFJjv9s8",
  authDomain: "kaos-css.firebaseapp.com",
  projectId: "kaos-css",
  storageBucket: "kaos-css.appspot.com",
  messagingSenderId: "154063044863",
  appId: "1:154063044863:web:01ce9cc45e7cc85d804cca",
  measurementId: "G-WZNK864NMT"
};

// Firebase'i başlat
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Kayıt ol
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Kayıt denemesi başlatılıyor:", email);

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("Kayıt başarılı:", userCredential.user);
      alert("Kayıt başarılı. Giriş yapabilirsiniz.");
    })
    .catch((error) => {
      console.error("Kayıt hatası:", error);
      alert("Kayıt hatası: " + error.message);
    });
}


// Giriş yap
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Giriş başarılı!");
      document.getElementById("auth").style.display = "none";
      document.getElementById("panel").style.display = "block";
    })
    .catch((error) => {
      alert("Giriş hatası: " + error.message);
    });
}

// Çıkış yap
function logout() {
  auth.signOut().then(() => {
    document.getElementById("auth").style.display = "block";
    document.getElementById("panel").style.display = "none";
  });
}


