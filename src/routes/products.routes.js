import express from "express"
import {
    addProduct,
    deleteProduct,
    getAllProducts,
    getProductById
} from "../controllers/products.controller.js"
import { authentication } from "../middleware/auth.middleware.js";


const router = express.Router()

router.get("/products", getAllProducts)

router.get("/products/:id", getProductById)

router.post("/products/create", authentication, addProduct);
router.delete("/products/:id", authentication, deleteProduct);

export default router
