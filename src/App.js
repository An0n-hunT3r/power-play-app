import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/Login";
import Dasboard from "./pages/Dasboard";
import ProductDetails from "./pages/ProductDetails";
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
        <Route path="/" element={<Dasboard />} />
        <Route path="/dashboard" element={<Dasboard />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;