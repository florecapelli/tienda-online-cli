import { db } from "../data/data.js";

export class ProductModel {
  constructor({ nombre, precio = 0, stock = 0, descripcion = "" }) {
    this.id = Date.now().toString();
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.descripcion = descripcion;
    this.createdAt = new Date().toISOString();
  }
}

// Obtener todos
export async function obtenerProductos() {
  return db.products;
}

// Obtener uno
export async function obtenerProducto(id) {
  return db.products.find(p => p.id === id) || null;
}

// Agregar
export async function agregarProducto(data) {
  const newProduct = new ProductModel(data);
  db.products.push(newProduct);
  return newProduct;
}

// Eliminar
export async function eliminarProducto(id) {
  const index = db.products.findIndex(p => p.id === id);
  if (index === -1) return false;
  db.products.splice(index, 1);
  return true;
}
