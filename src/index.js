const express = require('express');
const sequelize = require('./config/database');

const app = express();

// Conectar a la base de datos
sequelize.sync();

// Middlewares
app.use(express.json());

// Rutas
app.use('/', require('./routes/author.route'));
app.use('/', require('./routes/editorial.route'));
app.use('/', require('./routes/book.route'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
