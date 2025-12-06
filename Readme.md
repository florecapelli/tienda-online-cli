🛍️ Tienda Online – API + CLI

Proyecto final – Node.js + Express + Firebase

Este proyecto es una pequeña tienda online que maneja productos de lencería y mallas, con una API desarrollada en Node.js y un cliente CLI para interactuar desde la terminal.

Incluye autenticación con JWT, carga de productos en Firebase, manejo de errores y CRUD completo.

🚀 Tecnologías usadas

Node.js

Express

Firebase Firestore

CORS

JSON Web Token (JWT)

Dotenv

CLI por consola usando process.argv

🔥 ¿Qué puede hacer la API?
✔ GET /api/products

Devuelve todos los productos (lencería y mallas).

✔ GET /api/products/:id

Devuelve un producto por ID.

✔ POST /api/products/create

Crea un nuevo producto (requiere token).

✔ DELETE /api/products/:id

Elimina un producto (requiere token).

🔐 Autenticación

Para acceder a las rutas protegidas necesitás iniciar sesión.

Credenciales por defecto
{
  "email": "test@gmail.com",
  "password": "123456"
}

Ruta de login
POST /api/auth/login

Respuesta esperada
{
  "token": "asjk38as82jak92"
}


Usá este token como:

Authorization: Bearer TOKEN_AQUÍ

📦 Datos de productos usados

Se cargan en Firebase y también pueden existir como respaldo local:

Ejemplo:

{
  "nombre": "Conjunto de encaje rojo",
  "precio": 15900,
  "categoria": "Lencería",
  "stock": 12,
  "imagen": "https://via.placeholder.com/300x300"
}

🛠 Instalación
npm install


Configurar variables de entorno:

JWT_SECRET_KEY=lsfm398fnsfj2Ar3q298
FIREBASE_API_KEY=...

▶ Ejecutar API
npm start

💻 Uso del CLI (si tu proyecto lo incluye)

Ejemplos:

Listar productos:

node app.js products


Ver un producto:

node app.js products/1


Crear un producto:

node app.js products "Conjunto nuevo" 15900 "Lencería"

🧱 Arquitectura del proyecto
src/
 ├── controllers/
 ├── services/
 ├── models/
 ├── routes/
 ├── middleware/
 ├── data/
 └── index.js

⚠️ Manejo de errores incluido

404 rutas inexistentes

401 credenciales inválidas

403 token incorrecto o expirado

400 errores de validación

500 error interno o problemas con Firebase

🎯 Objetivo del proyecto

Crear una API funcional, organizada por capas y conectada a Firebase, con autenticación y CRUD completo, cumpliendo los requisitos del Proyecto Final.