import jwt from "jsonwebtoken";
import "dotenv/config";

const secret_key = process.env.JWT_SECRET_KEY || "clave_de_prueba";

export const generateToken = (userData) => {
  return jwt.sign({ id: userData.id, email: userData.email }, secret_key, { expiresIn: "1h" });
};