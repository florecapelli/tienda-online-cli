# 🛒 Tienda Online CLI

Este es un proyecto de línea de comandos (CLI) desarrollado en **Node.js**, que permite gestionar productos de una tienda online consumiendo la API de [FakeStore](https://fakestoreapi.com/).

El sistema interpreta comandos ingresados en la terminal para listar, buscar, crear y eliminar productos.

---

## 🚀 Requerimientos cumplidos

1. **Configuración inicial**
   - Proyecto iniciado con `npm init -y`
   - Uso de **ESModules** con `"type": "module"`
   - Script `start` configurado en `package.json`

2. **Gestión de productos**
   - `GET products` → lista todos los productos
   - `GET products/<id>` → muestra un producto específico
   - `POST products <title> <price> <category>` → crea un producto nuevo
   - `DELETE products/<id>` → elimina un producto por ID

3. **Buenas prácticas**
   - Uso de `process.argv` para capturar comandos
   - Manejo de errores robusto con fallback local (`productos.json`)
   - Uso de `fetch`, `destructuring`, `spread`, y métodos de arrays/strings
   - Estructura organizada en carpetas (`src/data`, `utils`)

---

## 🛠️ Instalación y uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/Florencia/tienda-online-cli.git
cd tienda-online-cli