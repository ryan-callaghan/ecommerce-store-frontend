import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Djangotest = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);


useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products/');
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchProducts();
}, []);

return (
    <div>
      <h1>Product List</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Djangotest;
