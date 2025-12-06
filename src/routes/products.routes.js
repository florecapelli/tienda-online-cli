import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct
} from "../controllers/products.controllers.js";

const router = Router();

// Rutas CRUD
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
