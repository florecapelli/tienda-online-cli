import { generateToken } from "../data/token.js";
import { validateUser } from "../services/auth.services.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email y password requeridos" });
    }

    const isValid = validateUser(email, password);

    if (!isValid) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const user = { id: "123", email: "test@gmail.com" };

    const token = generateToken(user);

    res.json({
      message: "Login exitoso",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Error en login" });
  }
};
