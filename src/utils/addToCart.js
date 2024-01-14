const addToCart = (id, name, image, price, quantity = 1) => {
  const existingCartItems = JSON.parse(localStorage.getItem("cart")) || {};

  if (existingCartItems[id]) {
    existingCartItems[id].quantity += quantity;
  } else {
    existingCartItems[id] = {
      id,
      name,
      image,
      price,
      quantity,
    };
  }

  /**
   * This is intentionally stored in localstorage for now as fake store APIs doesn't support ADD/REMOVE functionality
   * Localstorage is used to make everything work end to end
   */
  localStorage.setItem("cart", JSON.stringify(existingCartItems));
};

export default addToCart;
