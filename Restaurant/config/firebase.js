// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCHJTtX54yL_4RaS61GZgsk1QJK1EsXixw",
  authDomain: "rest-49539.firebaseapp.com",
  projectId: "rest-49539",
  storageBucket: "rest-49539.appspot.com",
  messagingSenderId: "641681807214",
  appId: "1:641681807214:web:274c599e6490c9aa0a537f",
  measurementId: "G-W2KWTR73B1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db= getFirestore(app);
const storage = getStorage(app);


export {auth, db};