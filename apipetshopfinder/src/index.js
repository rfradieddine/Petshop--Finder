const express = require('express');
const routes = require('./routes');
const app = express();

// Middleware para permitir solicitações CORS de origens específicas
app.use((req, res, next) => {
  // Aqui você pode definir as origens permitidas, por exemplo, apenas http://localhost:3000
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Métodos HTTP permitidos
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  // Headers permitidos
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use(routes);

const port = 3333;

// catch all errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

app.listen(port, () =>
  console.log("Servidor rodando na URL http://localhost:" + port)
);