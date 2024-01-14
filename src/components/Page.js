import React from "react";
import { useNavigate } from "react-router-dom";

const Page = ({ children }) => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const cartItems = JSON.parse(localStorage.getItem("cart")) || {};
  const totalItemsInCart = Object.values(cartItems).length;

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("username");
    navigate("/login");
  };
  const handleWelcomeClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="bg-gray-100 h-screen">
      <header className="bg-white p-4 flex justify-between items-center">
        <div
          className="text-gray-700 font-semibold cursor-pointer"
          onClick={handleWelcomeClick}
        >
          {username ? `Welcome ${username}` : "Guest user"}
        </div>
        <div className="flex items-center">
          <div>
            <img
              src="/cart.png"
              alt="Cart"
              className="w-6 h-6 cursor-pointer"
              onClick={() => navigate("/cart")}
            />
            {totalItemsInCart ? (
              <div
                className="absolute bg-red-500 text-white rounded-full flex items-center justify-center"
                style={{
                  right: 90,
                  top: 10,
                  height: 16,
                  width: 16,
                }}
              >
                {totalItemsInCart}
              </div>
            ) : null}
          </div>
          <button className="text-blue-600 px-4" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>
      <main className="p-4 flex flex-wrap">{children}</main>
    </div>
  );
};

export default Page;
