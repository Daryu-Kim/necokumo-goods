import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAG2cDG6PmbcCAfz2oFEUH3QRduSbQOYd4",
  authDomain: "necokumo-goods.firebaseapp.com",
  databaseURL: "https://necokumo-goods-default-rtdb.firebaseio.com",
  projectId: "necokumo-goods",
  storageBucket: "necokumo-goods.firebasestorage.app",
  messagingSenderId: "403797878076",
  appId: "1:403797878076:web:c2d04087f3f560d52cea39",
  measurementId: "G-QDZYP45S3H",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage();
