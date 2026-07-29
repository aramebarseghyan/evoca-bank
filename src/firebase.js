// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // 1. Добавили импорт Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ3_mGAyawhU5fZwKsg1CQLu-0MAGbZTY",
  authDomain: "evoca-app-cdeac.firebaseapp.com",
  projectId: "evoca-app-cdeac",
  storageBucket: "evoca-app-cdeac.firebasestorage.app",
  messagingSenderId: "197478671668",
  appId: "1:197478671668:web:5661f415d8b4445649f161",
  measurementId: "G-N469K2446L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 2. Инициализируем и ЭКСПОРТИРУЕМ базу данных Firestore
export const db = getFirestore(app);
