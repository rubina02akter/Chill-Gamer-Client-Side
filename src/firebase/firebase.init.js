// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  // apiKey: "AIzaSyC7yADnu_9dD4tdH_xt3PEwcskQNC9yxjw",
  // authDomain: "game-review-ad6c5.firebaseapp.com",
  // projectId: "game-review-ad6c5",
  // storageBucket: "game-review-ad6c5.firebasestorage.app",
  // messagingSenderId: "625157604134",
  // appId: "1:625157604134:web:2aef4461f88d4ec55d77e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);