// CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // Required functionalities typically include:
  
  // 1. Display item details
  // 2. Quantity adjustment (increase/decrease)
  // 3. Remove item from cart
  // 4. Price calculation (item price × quantity)
  // 5. Update cart total

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrease}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <button onClick={handleRemove} className="remove-btn">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
