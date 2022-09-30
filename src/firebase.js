import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpGk3CnjtRuKDm2y5y-crVHmu0T4gdEQM",
  authDomain: "chat-application-7b34c.firebaseapp.com",
  projectId: "chat-application-7b34c",
  storageBucket: "chat-application-7b34c.appspot.com",
  messagingSenderId: "672927447718",
  appId: "1:672927447718:web:ef139f823692642c8b1267"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
