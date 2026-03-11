import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginuser = async (e) => {
    e.preventDefault()
    try {
      const res =await axios.post("http://localhost:1000/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert(res.data.message);
      window.location = "/dashboard";
    } catch (error) {
      alert(error.response.data.message);
      window.location = "/login";
    }
  };

  return (
    <form onSubmit={loginuser} className="login-form form">
      <h2>Login</h2>

      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        required
        onChange={(e) => setemail(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        required
        onChange={(e) => setpassword(e.target.value)}
      />

      <button type="submit">Login</button>
      <Link className="a" to="/signup">
        I don't have account?
      </Link>
    </form>
  );
};

export default Login;
