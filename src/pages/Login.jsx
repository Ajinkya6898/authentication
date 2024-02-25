import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const { email, password } = loginFormData;

  return (
    <div className="container">
      <div className="wrapper">
        <form>
          <h1>Login</h1>
          <input
            value={email}
            name="email"
            type="text"
            onChange={handleLoginFormChange}
            placeholder="Email"
          />
          <input
            value={password}
            name="password"
            type="password"
            onChange={handleLoginFormChange}
            placeholder="Password"
          />
          <div className="forgot-password">
            <Link to={"/changepassword"}>Forgot Password?</Link>
          </div>
          <button className="btn">Login</button>
          <div>
            <p>
              Not a member! <Link to={"/register"}>Register Now</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
