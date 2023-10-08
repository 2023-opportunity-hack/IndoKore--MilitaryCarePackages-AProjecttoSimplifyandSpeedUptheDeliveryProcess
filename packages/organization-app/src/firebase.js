// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';  // Import getFunctions from Firebase

import firebaseConfig from './firebaseConfig';  // Import the configuration from firebaseConfig.js

const app = initializeApp(firebaseConfig);  // Use the imported configuration

const db = getFirestore(app);
const functions = getFunctions(app);  // Initialize Firebase Functions

export { db, functions };  // Export both Firestore and Functions

