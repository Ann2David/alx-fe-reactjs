import React from "react";
import { useNavigate } from "react-router-dom";

function Login({ setAuth }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setAuth(true);
    navigate("/profile");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Click to Login</button>
    </div>
  );
}

export default Login;