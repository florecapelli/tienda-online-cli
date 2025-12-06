import jwt from "jsonwebtoken";
import "dotenv/config";

const secret_key = process.env.JWT_SECRET_KEY;

export const authentication = (req, res, next) => {
  const header = req.headers["authorization"];
  if (!header) return res.status(401).json({ message: "Token requerido" });

  const parts = header.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({ message: "Formato de token inválido" });
  }

  const token = parts[1];
  jwt.verify(token, secret_key, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Token inválido o expirado" });
    req.user = decoded;
    next();
  });
};
