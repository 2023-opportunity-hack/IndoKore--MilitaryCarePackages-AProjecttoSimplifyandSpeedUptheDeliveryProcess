// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDA5A92zy8sChgg1GcfevF3oIwBnA6VJbQ",
    authDomain: "blue-star-mothers.firebaseapp.com",
    projectId: "blue-star-mothers",
    storageBucket: "blue-star-mothers.appspot.com",
    messagingSenderId: "717705843184",
    appId: "1:717705843184:web:e109069f5ef8fc5756cd35",
    measurementId: "G-LMYSZZ3ZQM"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
