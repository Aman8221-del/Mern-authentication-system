import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signupuser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:1000/signup", {
        name,
        email,
        password,
      });

      alert(res.data.message);
      window.location = "/login";
    } catch (error) {
      alert(error.response.data.message);
      window.location = "/signup";
    }
  };

  return (
    <form className="signup-form form" onSubmit={signupuser}>
      <h2>Signup Now</h2>

      <label>Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        required
        onChange={(e) => setname(e.target.value)}
      />

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

      <button type="submit">Signup</button>
      <Link className="a" to="/login">
        I have already account
      </Link>
    </form>
  );
};

export default Signup;
