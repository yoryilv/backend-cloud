const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const evaluacionRoutes = require('./routes/evaluacionRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB(); // Conectar a la base de datos

app.use(cors()); // Habilitar CORS
app.use(express.json()); // Middleware para parsear JSON

app.use('/api/evaluaciones', evaluacionRoutes); // Rutas para evaluaciones

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
