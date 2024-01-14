import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import isTokenValid from "./utils/isTokenValid";
import "./App.css";
import "tailwindcss/tailwind.css";

function App() {
  const token = localStorage.getItem("userToken");
  const isValid = isTokenValid(token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isValid) {
      navigate("/login");
    }
  }, [isValid, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
