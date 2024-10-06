const mongoose = require('mongoose');

// Reemplaza 'your-elastic-ip' y 'your-db-name' con tu IP elástica y el nombre de tu base de datos
const uri = 'mongodb://3.234.197.222:27017/MS_Evaluaciones';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexión a MongoDB exitosa');
    })
    .catch((error) => {
        console.error('Error de conexión a MongoDB:', error);
    });
