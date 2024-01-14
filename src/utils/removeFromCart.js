const removeFromCart = (id) => {
  const existingCartItems = JSON.parse(localStorage.getItem("cart")) || {};
  delete existingCartItems[id];

  localStorage.setItem("cart", JSON.stringify(existingCartItems));
};

export default removeFromCart;
