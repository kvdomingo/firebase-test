import { FirebaseOptions, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const { FIREBASE_PROJECT_ID } = import.meta.env;

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  appId: import.meta.env.FIREBASE_APP_ID,
  authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: `${FIREBASE_PROJECT_ID}.appspot.com`,
  measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
