import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";

export async function getApp(): Promise<FirebaseApp> {
  let config: FirebaseOptions;
  if (process.env.NODE_ENV !== "production") {
    const { FIREBASE_PROJECT_ID } = import.meta.env;
    config = {
      apiKey: import.meta.env.FIREBASE_API_KEY,
      appId: import.meta.env.FIREBASE_APP_ID,
      authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
      projectId: FIREBASE_PROJECT_ID,
      storageBucket: `${FIREBASE_PROJECT_ID}.appspot.com`,
      measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID,
      messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
    };
  } else {
    const result = await fetch("https://us-central1-fir-test-21cc0.cloudfunctions.net/getEnv");
    return await result.json();
  }

  return initializeApp(config);
}
