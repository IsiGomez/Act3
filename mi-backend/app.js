const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Datos de prueba
const products = [
  { id: 1, nombre: 'Laptop HP Pavilion', precio: 650000, descripcion: 'Laptop Intel Core i5 16GB RAM' },
  { id: 2, nombre: 'Mouse Inalámbrico Logitech', precio: 19990, descripcion: 'Mouse ergonómico receptor USB' },
  { id: 3, nombre: 'Teclado Mecánico Redragon', precio: 45000, descripcion: 'Teclado RGB con switches azules' },
  { id: 4, nombre: 'Monitor LG 24 Full HD', precio: 120000, descripcion: 'Monitor IPS 75Hz HDMI' }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ mensaje: 'Producto no encontrado' });
  }

  res.json(product);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;