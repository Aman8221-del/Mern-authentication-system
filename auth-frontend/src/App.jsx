import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <h2>Auth System</h2>
        </div>
        <div className="buttons">
          <Link to="/login">
            <button className="login">Login</button>
          </Link>
          <Link to="/signup">
            <button className="signup">Signup</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default App;
