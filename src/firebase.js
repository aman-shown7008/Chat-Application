import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-jdp7Trh-aiuLQ8wm0U4CG41P44xJFEk",
  authDomain: "achats-a7477.firebaseapp.com",
  projectId: "achats-a7477",
  storageBucket: "achats-a7477.appspot.com",
  messagingSenderId: "226275640472",
  appId: "1:226275640472:web:edeea08eb9d2c43c25bced"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
