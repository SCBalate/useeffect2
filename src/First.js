import React, { useState, useEffect } from 'react';
import { fakeFetch } from './Constants/FirstConstant';

function First() {
  const [products, setProducts] = useState([]);
  const [showProduct, setShowProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fakeFetch('https://example.com/api/products');
      const { data } = response;
      setProducts(data.products);
    } catch (err) {
      console.log('Error while fetching the products', err);
    }
  };

  const handleProductClick = (product) => {
    setShowProduct(product);
  };

  return (
    <div>
      {products.map((product, index) => (
        <button key={index} onClick={() => handleProductClick(product)}>
          Show {product.name}
        </button>
      ))}

      {showProduct && (
        <div>
          <img src={showProduct.src} alt={showProduct.name} />
          <h2>{showProduct.name}</h2>
          <p>{showProduct.price}</p>
          <p>{showProduct.desc}</p>
        </div>
      )}
    </div>
  );
}

export default First;
