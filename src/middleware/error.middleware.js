export function notFoundHandler(req, res) {
  res.status(404).json({ error: "Ruta no encontrada" });
}

export function errorHandler(err, req, res, next) {
  console.error("🔥 Error:", err);
  res.status(500).json({ error: "Error interno del servidor" });
}
