import admin from "firebase-admin";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const servicePath = path.join(__dirname, "../serviceAccountKey.json"); // poner el JSON en src/

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(servicePath),
  });
}
const db = admin.firestore();
const COLLECTION = "products";

export const obtenerProductos = async () => {
  const snapshot = await db.collection(COLLECTION).get();
  const products = [];
  snapshot.forEach(doc => products.push({ id: doc.id, ...doc.data() }));
  return products;
};

export const obtenerProducto = async (id) => {
  const docSnap = await db.collection(COLLECTION).doc(id).get();
  if (!docSnap.exists) return null;
  return { id: docSnap.id, ...docSnap.data() };
};

export const agregarProducto = async (producto) => {
  const docRef = await db.collection(COLLECTION).add(producto);
  return { id: docRef.id, ...producto };
};

export const eliminarProducto = async (id) => {
  await db.collection(COLLECTION).doc(id).delete();
  return;
};

export const actualizarProducto = async (id, updates) => {
  await db.collection(COLLECTION).doc(id).update(updates);
  const docSnap = await db.collection(COLLECTION).doc(id).get();
  return { id: docSnap.id, ...docSnap.data() };
};
