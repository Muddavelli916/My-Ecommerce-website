// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// ✅ Firebase config (placeholder values – emulator only)
const firebaseConfig = {
  apiKey: "fake-api-key",              // Required by Firebase SDK even for emulators
  authDomain: "localhost",             // Not used in emulator, still needed
  projectId: "doodladashboard",        // Make sure this matches your local emulator setup
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Setup Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

// ✅ Connect to Firebase Emulators on localhost
if (window.location.hostname === "localhost") {
  // Connect Auth Emulator
  connectAuthEmulator(auth, "http://localhost:9099", { disableWarnings: true });

  // Connect Firestore Emulator
  connectFirestoreEmulator(db, "localhost", 8080);
}
