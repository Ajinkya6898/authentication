import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";

const Register = () => {
  const [registerFormData, setRegisterFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const handleRegisterFormChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({
      ...registerFormData,
      [name]: value,
    });
  };

  const { email, username, password, confirmpassword } = registerFormData;
  const handleRegisterSumit = (e) => {
    e.preventDefault();
    console.log(registerFormData);
    setRegisterFormData({
      email: "",
      username: "",
      password: "",
      confirmpassword: "",
    });
  };
  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={handleRegisterSumit}>
          <h1>Register</h1>
          <input
            name="email"
            value={email}
            onChange={handleRegisterFormChange}
            type="text"
            placeholder="Email"
          />
          <input
            name="username"
            value={username}
            onChange={handleRegisterFormChange}
            type="text"
            placeholder="Name"
          />
          <input
            name="password"
            value={password}
            onChange={handleRegisterFormChange}
            type="password"
            placeholder="Password"
          />
          <input
            name="confirmpassword"
            value={confirmpassword}
            onChange={handleRegisterFormChange}
            type="password"
            placeholder="Re-Enter Password"
          />
          <div className="terms">
            <input type="checkbox" />
            <label>
              I agree to these <Link>Terms & Conditions</Link>
            </label>
          </div>
          <button className="btn">Login</button>
          <div>
            <p>
              Already a member <Link to={"/login"}>Login Here!</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
