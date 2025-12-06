// src/services/auth.services.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

const users = [
  { id: "1", username: "test@gmail.com", password: "123456", role: "admin" },
  
];

export function loginService(username, password) {
  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) return null;
  const payload = { id: user.id, username: user.username, role: user.role };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  return { token, user: payload };
}
export const validateUser = (email, password) => {
  // Para pruebas: usuario hardcodeado. En producción, consultar DB.
  return email === "test@gmail.com" && password === "123456";
};