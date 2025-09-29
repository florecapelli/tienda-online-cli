import fs from "fs";
import fetch from "node-fetch";

const BASE_URL = "https://fakestoreapi.com";

// Cargamos productos locales para fallback
const productosLocales = JSON.parse(fs.readFileSync("./src/data/productos.json", "utf-8"));

// Mensaje inicial
console.log("🚀 Bienvenido a Tienda Online CLI");

// Capturar argumentos de la terminal
const args = process.argv.slice(2);
const [method, resource, ...rest] = args;

// Función: Obtener todos los productos
async function getAllProducts() {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) throw new Error("Datos vacíos");

    console.log("📦 Todos los productos (API):");
    console.table(data, ["id", "title", "price", "category"]);
  } catch (error) {
    console.log("❌ No se pudo conectar a la API. Mostrando productos locales:");
    console.table(productosLocales, ["id", "nombre", "precio"]);
  }
}

// Función: Obtener producto por ID
async function getProductById(id) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    console.log(`📦 Producto ${id} (API):`);
    console.log(data);
  } catch (error) {
    console.log(`❌ No se pudo obtener el producto ${id} de la API. Buscando localmente...`);
    const producto = productosLocales.find(p => p.id == id);
    if (producto) console.log(producto);
    else console.log("❌ Producto no encontrado");
  }
}

// Función: Crear producto
async function createProduct(title, price, category) {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price, category }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    console.log("✅ Producto creado (API):");
    console.log(data);
  } catch (error) {
    console.log("❌ No se pudo crear el producto en la API.");
    console.log("Puede agregarlo manualmente a productos.json para pruebas locales.");
  }
}

// Función: Eliminar producto
async function deleteProduct(id) {
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    console.log(`🗑 Producto ${id} eliminado (API):`);
    console.log(data);
  } catch (error) {
    console.log(`❌ No se pudo eliminar el producto ${id} en la API.`);
    console.log("Para pruebas locales, eliminar manualmente de productos.json.");
  }
}

// Ejecutar según comando ingresado
(async () => {
  switch (method?.toUpperCase()) {
    case "GET":
      if (resource === "products" && rest.length === 0) await getAllProducts();
      else if (resource.startsWith("products/")) {
        const id = resource.split("/")[1];
        await getProductById(id);
      } else console.log("Uso: npm run start GET products o GET products/<id>");
      break;

    case "POST":
      if (resource === "products" && rest.length >= 3) {
        const [title, price, category] = rest;
        await createProduct(title, Number(price), category);
      } else console.log("Uso: npm run start POST products <title> <price> <category>");
      break;

    case "DELETE":
      if (resource.startsWith("products/")) {
        const id = resource.split("/")[1];
        await deleteProduct(id);
      } else console.log("Uso: npm run start DELETE products/<id>");
      break;

    default:
      console.log("Comando no reconocido. Ejemplos:");
      console.log("npm run start GET products");
      console.log("npm run start GET products/15");
      console.log("npm run start POST products T-Shirt 300 remeras");
      console.log("npm run start DELETE products/7");
  }
})();