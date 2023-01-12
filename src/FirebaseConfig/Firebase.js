import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
     createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword
} from "firebase/auth";


import { 
    setDoc ,
    getFirestore,
    doc,
    getDocs,
    getDoc,
    collection,
    onSnapshot,
    addDoc, 
     updateDoc,
      deleteField,
      query,where, 
      orderBy
} from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAhBVI6iqhBJkVQe-gQ6PRIEsmCbnRnWQc",
  authDomain: "quizz-app---reactjs.firebaseapp.com",
  projectId: "quizz-app---reactjs",
  storageBucket: "quizz-app---reactjs.appspot.com",
  messagingSenderId: "854520823698",
  appId: "1:854520823698:web:0b6e52c42c9f0f45e68b4b",
  measurementId: "G-Y8NVRRRFSM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {getAuth,createUserWithEmailAndPassword,onAuthStateChanged ,
    doc, setDoc,db,
    getDocs,
    getDoc,
    collection,
    onSnapshot,
    query,where,
     addDoc ,
     orderBy,
     signOut,
     signInWithEmailAndPassword
    }