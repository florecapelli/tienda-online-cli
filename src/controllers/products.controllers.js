import * as productService from "../services/products.services.js";

// ➕ Crear producto
export const addProduct = async (req, res) => {
  try {
    const productData = req.body;

    if (!productData || !productData.nombre) {
      return res.status(400).json({ message: "Datos de producto inválidos" });
    }

    const created = await productService.addProductService(productData);
    res.status(201).json(created);

  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ message: "Error al crear producto" });
  }
};

// ❌ Eliminar producto
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "Id es requerido" });
    }

    await productService.deleteProductService(id);
    res.sendStatus(200);

  } catch (error) {
    console.error("Error al eliminar producto:", error);
    res.status(500).json({ message: "Error al eliminar producto" });
  }
};

// 📦 Obtener todos los productos
export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProductsService();
    res.status(200).json(products);

  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ message: "Error al obtener productos" });
  }
};

// 🔍 Obtener un producto por ID
export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "Id es requerido" });
    }

    const product = await productService.getProductByIdService(id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.status(200).json(product);

  } catch (error) {
    console.error("Error al obtener producto:", error);
    res.status(500).json({ message: "Error al obtener producto" });
  }
};

// ✏️ Actualizar producto
export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    if (!id || !updates) {
      return res.status(400).json({ message: "Datos inválidos" });
    }

    const updated = await productService.updateProductService(id, updates);
    res.status(200).json(updated);

  } catch (error) {
    console.error("Error al actualizar producto:", error);
    res.status(500).json({ message: "Error al actualizar producto" });
  }
};
