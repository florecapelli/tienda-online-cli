import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import productsRoutes from "./src/routes/products.routes.js";
import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS
app.use(cors());

// Body parser (requisito explícito)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use("/api/products", productsRoutes); // products endpoints
app.use("/auth", authRoutes); // login en /auth/login (tal como pide la consigna)

// Logger simple (opcional)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});

// 404 para rutas no definidas (obligatorio)
app.use((req, res) => {
  res.status(404).json({ message: "Recurso no encontrado" });
});

// Error handler global (captura errores no manejados)
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(err.status || 500).json({ message: err.message || "Error interno del servidor" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

