import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Page from "../components/Page";

const Cart = () => {
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || {};
    setCartItems(storedCartItems);
  }, []);

  const handleRemoveFromCart = (id) => {
    const updatedCart = { ...cartItems };
    delete updatedCart[id];

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (id, newQuantity) => {
    const productDetail = cartItems[id];
    const updatedCart = {
      ...cartItems,
      [id]: { ...productDetail, quantity: newQuantity },
    };
    if (!newQuantity) {
      delete updatedCart[id];
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleAddMoreItems = () => {
    navigate("/dashboard");
  };

  const calculateTotalPrice = () => {
    const total = Object.values(cartItems).reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return total.toFixed(2);
  };

  return (
    <Page>
      <div className="bg-white container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {Object.values(cartItems).length > 0 ? (
          <>
            {Object.values(cartItems).map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b-2 py-2 transition-all duration-300 hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <img
                    className="w-16 h-16 object-cover mr-4"
                    src={item.image}
                    alt={item.name}
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    className="text-blue-600 px-2"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="text-blue-600 px-2"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <span className="mx-4">${item.price * item.quantity}</span>
                  <button
                    className="text-red-600 px-2"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <h3 className="text-xl font-semibold">
                Total Price: ${calculateTotalPrice()}
              </h3>
              <div className="flex justify-between items-center mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleAddMoreItems}
                >
                  Add More Items
                </button>
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                  disabled={true}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p>Your cart is empty.</p>
            <Link to="/dashboard" className="text-blue-600 underline">
              Go to Dashboard
            </Link>
          </div>
        )}
      </div>
    </Page>
  );
};

export default Cart;
