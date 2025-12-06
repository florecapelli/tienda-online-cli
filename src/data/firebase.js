import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
