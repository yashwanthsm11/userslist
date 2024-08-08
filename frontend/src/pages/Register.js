import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import "../stylesheets/style.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await api.post("/users/register", { username, password });
      navigate("/login");
    } catch (err) {
      setError(err.response ? err.response.data : "An error occurred");
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
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Register</button>
        <h1 onClick={() => navigate("/login")}>Already have account?Click Here To Login</h1>
      </form>
    </div>
  );
};

export default Register;
