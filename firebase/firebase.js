// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getDatabase } from "firebase/database";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW-AjHuB9RyFIVZDpMbih46gxJGfutIDc",
  authDomain: "mtn-2022.firebaseapp.com",
  projectId: "mtn-2022",
  storageBucket: "mtn-2022.appspot.com",
  messagingSenderId: "772399254423",
  appId: "1:772399254423:web:99f6ced23e6315bf75d2d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(firebaseConfig)

export const db = getFirestore(app);
export const authentication = getAuth(app);
export const database = getDatabase(app);

 