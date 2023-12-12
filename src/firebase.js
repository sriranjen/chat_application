
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBVsNDolrELNTBY4II_mbg2F_04HC7Rd0s",
  authDomain: "chattingapp-97c83.firebaseapp.com",
  projectId: "chattingapp-97c83",
  storageBucket: "chattingapp-97c83.appspot.com",
  messagingSenderId: "75519519420",
  appId: "1:75519519420:web:1c098504b2482f994f3eb9",
  measurementId: "G-KFF7ZGXSGP"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore();