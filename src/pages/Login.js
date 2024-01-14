import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import callFakeStoreAPI from "../utils/callFakeStoreAPI";
import { FAKE_STORE_URLS } from "../constants";

import Input from "../components/Input";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const {
        data: { token },
      } = await callFakeStoreAPI(FAKE_STORE_URLS.LOGIN, {
        method: "POST",
        data: { username, password },
      });

      localStorage.setItem("userToken", token);
      localStorage.setItem("username", username);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex items-center justify-center h-screen w-full">
        <div className="flex max-w-screen-md">
          <div className="flex-shrink-0 p-8 flex flex-col items-center justify-center">
            <img
              src="fakeStore.jpeg"
              alt="FakeStoreEcommerce"
              className="w-12 h-12 mb-4"
            />
            <p className="text-gray-600 text-center">
              Your One-Stop Ecommerce Platform
            </p>
          </div>

          <div className="bg-white p-8 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-6">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <Input
                  id={"username"}
                  name={"username"}
                  type={"text"}
                  placeholder={"Username"}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <Input
                  id={"password"}
                  name={"password"}
                  type={"password"}
                  placeholder={"Password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
