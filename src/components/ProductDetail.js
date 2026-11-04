import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Cargando detalle del producto...</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/">← Volver al listado</Link>
      <h2>{product.nombre}</h2>
      <p><strong>Precio:</strong> ${product.precio}</p>
      <p><strong>Descripción:</strong> {product.descripcion || 'Sin descripción disponible'}</p>
    </div>
  );
};

export default ProductDetail;