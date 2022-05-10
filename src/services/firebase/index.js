import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAocG4rQZbD5zMpB55WOLoQs4nT9mJ_JY8",
  authDomain: "ecommercetecno.firebaseapp.com",
  projectId: "ecommercetecno",
  storageBucket: "ecommercetecno.appspot.com",
  messagingSenderId: "422631966906",
  appId: "1:422631966906:web:89f7d10473d9c1a4099a83"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)