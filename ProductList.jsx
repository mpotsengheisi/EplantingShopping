// ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard'; // if using components
import { useSelector, useDispatch } from 'react-redux'; // if using Redux
import { addToCart } from '../slices/cartSlice'; // example Redux action

const ProductList = () => {
  // 1. Fetch/display plant products
  const products = useSelector(state => state.products.items) || [];
  
  // 2. Product mapping/listing functionality
  // 3. Add to cart functionality
  // 4. Filtering/sorting options (if required)
  // 5. Responsive grid layout
  // 6. Product details display (name, price, image, description)

  return (
    <div className="product-list">
      <h1>Our Plants</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
