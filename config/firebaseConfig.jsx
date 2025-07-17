// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNgE3sYxiuxDLsZUCdJgEDxQ6RxsFSTRM",
  authDomain: "trackers-app-d8ccc.firebaseapp.com",
  projectId: "trackers-app-d8ccc",
  storageBucket: "trackers-app-d8ccc.appspot.com",
  messagingSenderId: "987694315448",
  appId: "1:987694315448:web:d856aafe01f181e6ab414d",
  measurementId: "G-S76KBN9R6H"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
