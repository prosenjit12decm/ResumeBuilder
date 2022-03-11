import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa4q1g9dgZQuDxIkPMLZeqTmhWZzwRCGA",
  authDomain: "resume-builder-75541.firebaseapp.com",
  projectId: "resume-builder-75541",
  storageBucket: "resume-builder-75541.appspot.com",
  messagingSenderId: "1036954070921",
  appId: "1:1036954070921:web:1051459b441b5afb2a7b58",
  measurementId: "G-XE8WVBHSF3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
