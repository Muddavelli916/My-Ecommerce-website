import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const Cartpage = () => {
  const {
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity
  } = useCart();

  const [pincode, setPincode] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.discountPrice * item.quantity,
    0
  );

  const originalTotal = cartItems.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );

  const discount = originalTotal - total;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 4000);
  };

  return (
    <div className="cart-page-container">
      <div className="cart-left">
        <h2>My Cart ({cartItems.length})</h2>

        <div className="delivery-section">
          <input
            type="text"
            placeholder="Enter Delivery Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="pincode-input"
          />
          <button className="check-btn">Check</button>
        </div>

        {cartItems.map((item, index) => (
          <div key={index} className="cart-item-box">
            <img src={item.img} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="cart-price">
                <span className="original-price">₹{item.originalPrice}</span>
                <span className="discount-price">₹{item.discountPrice}</span>
              </p>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-flap/bigbasket/fk-assured.png"
                alt="Assured"
                className="assured-badge"
              />
              <div className="quantity-controls">
                <button onClick={() => decrementQuantity(item.name)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.name)}>+</button>
              </div>
            </div>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.name)}
            >
              ❌ Remove
            </button>
          </div>
        ))}
      </div>

      <div className="cart-right">
        <div className="price-details-box">
          <h3>PRICE DETAILS</h3>
          <div className="price-row">
            <span>Price ({cartItems.length} items)</span>
            <span>₹{originalTotal}</span>
          </div>
          <div className="price-row">
            <span>Discount</span>
            <span className="discount">- ₹{discount}</span>
          </div>
          <div className="price-row total-row">
            <span>Total Amount</span>
            <span>₹{total}</span>
          </div>
          <p className="save-msg">You will save ₹{discount} on this order</p>
        </div>

        <button className="place-order-fixed" onClick={handlePlaceOrder}>
          PLACE ORDER
        </button>

        {orderPlaced && (
          <div className="order-alert">
            ✅ Order placed successfully! You saved ₹{discount}.
          </div>
        )}
      </div>
    </div>
  );
};

export default Cartpage;
