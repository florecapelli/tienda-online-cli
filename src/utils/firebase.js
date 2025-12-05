import admin from "firebase-admin";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta real del serviceAccountKey.json
const servicePath = path.join(__dirname, "serviceAccountKey.json");

// Inicializar Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(servicePath),
});

export const db = admin.firestore();
export const auth = admin.auth();
