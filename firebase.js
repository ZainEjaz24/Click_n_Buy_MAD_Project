// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBAz_-4w-t09oKIm2-9Mz1Bl4123oRYPZY",
//   authDomain: "clicknbuy-246d5.firebaseapp.com",
//   projectId: "clicknbuy-246d5",
//   storageBucket: "clicknbuy-246d5.appspot.com",
//   messagingSenderId: "1043940425699",
//   appId: "1:1043940425699:web:0ce2d6ef8b2ce630beaad6",
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// export const firebaseAuth = getAuth(firebaseApp);
// export const storage = getStorage(firebaseApp);
// export const db = getFirestore(firebaseApp);
// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAz_-4w-t09oKIm2-9Mz1Bl4123oRYPZY",
  authDomain: "clicknbuy-246d5.firebaseapp.com",
  projectId: "clicknbuy-246d5",
  storageBucket: "clicknbuy-246d5.appspot.com",
  messagingSenderId: "1043940425699",
  appId: "1:1043940425699:web:0ce2d6ef8b2ce630beaad6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
export const db = getFirestore(firebaseApp);
export const database = getDatabase(firebaseApp);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCKkmXYKml5CmLBJmf6dDfOF46Hcm2Nm80",
//   authDomain: "mad-quiz-ec3c4.firebaseapp.com",
//   projectId: "mad-quiz-ec3c4",
//   storageBucket: "mad-quiz-ec3c4.appspot.com",
//   messagingSenderId: "484775386674",
//   appId: "1:484775386674:web:e2484d7ae746970fe6e62b",
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// export const firebaseAuth = getAuth(firebaseApp);
// export const storage = getStorage(firebaseApp);
// export const db = getFirestore(firebaseApp);
// export const database = getDatabase(firebaseApp);
