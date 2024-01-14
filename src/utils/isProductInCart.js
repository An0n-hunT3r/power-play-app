const isProductInCart = (id) => {
  const existingCartItems = JSON.parse(localStorage.getItem("cart")) || {};
  return !!existingCartItems[id];
};

export default isProductInCart;
