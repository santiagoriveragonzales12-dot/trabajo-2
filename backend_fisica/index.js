// index.js
const express = require('express');
const cors = require('cors');
const fisicaRoutes = require('./routes/fisicaRoutes');

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json()); // Permite recibir información en formato JSON

// Rutas
app.use('/fisica', fisicaRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor de cálculos físicos corriendo en http://localhost:${PORT}`);
});