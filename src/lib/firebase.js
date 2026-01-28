import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAG2cDG6PmbcCAfz2oFEUH3QRduSbQOYd4",
  authDomain: "necokumo-goods.firebaseapp.com",
  projectId: "necokumo-goods",
  storageBucket: "necokumo-goods.firebasestorage.app",
  messagingSenderId: "403797878076",
  appId: "1:403797878076:web:00fc5a61d802c2402cea39",
  measurementId: "G-E3Y7KJPN61",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage();
