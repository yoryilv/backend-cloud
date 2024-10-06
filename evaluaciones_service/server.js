const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const evaluacionRoutes = require('./routes/evaluacionRoutes');
const notaRoutes = require('./routes/notaRoutes');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 27017;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB', err));

app.use('/evaluaciones', evaluacionRoutes);
app.use('/notas', notaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
