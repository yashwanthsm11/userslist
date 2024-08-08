import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import "../stylesheets/style.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/users/login", { username, password });
      localStorage.setItem("token", data.token);
      navigate("/users");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        <h1 onClick={() => navigate("/register")}>
          Don't have account , Click Here To Register
        </h1>
      </form>
    </div>
  );
};

export default Login;
