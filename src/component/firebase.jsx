// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDgd0lxtIu2FiBylVwz-zdKoQ5Vc8yKegg",
//   authDomain: "login1-95119.firebaseapp.com",
//   projectId: "login1-95119",
//   storageBucket: "login1-95119.firebasestorage.app",
//   messagingSenderId: "285880692890",
//   appId: "1:285880692890:web:0832a628169bdd6b3fef23",
//   measurementId: "G-LXCQ2SSPPW"
// };

// // Initialize Firebase
// export const auth= getAuth();
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgd0lxtIu2FiBylVwz-zdKoQ5Vc8yKegg",
  authDomain: "login1-95119.firebaseapp.com",
  projectId: "login1-95119",
  storageBucket: "login1-95119.appspot.com", // 🔧 FIXED the typo (was: firebasestorage.app)
  messagingSenderId: "285880692890",
  appId: "1:285880692890:web:0832a628169bdd6b3fef23",
  measurementId: "G-LXCQ2SSPPW",
};

// ✅ First initialize the Firebase app
const app = initializeApp(firebaseConfig);

// ✅ Then get Auth and Analytics
const auth = getAuth(app);
const analytics = getAnalytics(app);

// ✅ Export auth so you can use it elsewhere
export { auth };
