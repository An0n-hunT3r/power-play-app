import React from "react";
import { useNavigate } from "react-router-dom";

const Page = ({ children }) => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("username");
    navigate("/login");
  };
  const handleWelcomeClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center cursor-pointer">
        <div
          className="text-gray-700 font-semibold"
          onClick={handleWelcomeClick}
        >
          {username ? `Welcome ${username}` : "Guest user"}
        </div>
        <button className="text-blue-600" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <main className="p-4 flex flex-wrap">{children}</main>
    </div>
  );
};

export default Page;
