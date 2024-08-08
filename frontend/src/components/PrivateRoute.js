import React from "react";
import { Route, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  let isAuthenticated = false;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      isAuthenticated = !!decoded;
    } catch (err) {
      isAuthenticated = false;
    }
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default PrivateRoute;
