// ========================================
// 🔹 BASE DE DATOS LOCAL (MEMORIA)
// ========================================
let productsDB = [];

// ========================================
// 🔹 MODELO / CLASE PRODUCTO
// ========================================
export class ProductModel {
  constructor({ nombre, precio = 0, stock = 0, descripcion = "" }) {
    this.id = Date.now().toString(); // Generación simple de ID
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.descripcion = descripcion;
    this.createdAt = new Date().toISOString();
  }
}

// ========================================
// 🔹 OBTENER UN PRODUCTO POR ID
// ========================================
export async function obtenerProducto(id) {
  try {
    const producto = productsDB.find((p) => p.id === id);
    return producto || null;
  } catch (error) {
    console.log("Error al obtener producto:", error);
    throw error;
  }
}

// ========================================
// 🔹 OBTENER TODOS LOS PRODUCTOS
// ========================================
export async function obtenerProductos() {
  try {
    return productsDB;
  } catch (error) {
    console.log("Error al obtener productos:", error);
    throw error;
  }
}

// ========================================
// 🔹 AGREGAR PRODUCTO
// ========================================
export async function agregarProducto(producto) {
  try {
    // Convertir el objeto a ProductModel si viene crudo
    const newProduct =
      producto instanceof ProductModel ? producto : new ProductModel(producto);

    productsDB.push(newProduct);

    return newProduct;
  } catch (error) {
    console.log("Error al agregar producto:", error);
    throw error;
  }
}

// ========================================
// 🔹 ELIMINAR PRODUCTO POR ID
// ========================================
export async function eliminarProducto(id) {
  try {
    const initialLength = productsDB.length;

    productsDB = productsDB.filter((p) => p.id !== id);

    return productsDB.length !== initialLength;
  } catch (error) {
    console.log("Error al eliminar producto:", error);
    throw error;
  }
}
