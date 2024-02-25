import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const [registerFormData, setRegisterFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});
  const { email, username, password, confirmpassword } = registerFormData;

  const handleRegisterFormChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({
      ...registerFormData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!username) {
      newErrors.username = "Username is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 5) {
      newErrors.password = "Password must be greater than 5 letters";
    }

    if (!confirmpassword) {
      newErrors.confirmpassword = "Confirm Password is required";
    } else if (password !== confirmpassword) {
      newErrors.confirmpassword = "Passwords do not match";
    }
    setErrors(newErrors);
  };

  const handleRegisterSumit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        await axios.post("http://localhost:5000/register", registerFormData);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Registration successful!",
        });

        navigate("/login");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      }
      setRegisterFormData({
        email: "",
        username: "",
        password: "",
        confirmpassword: "",
      });
    }
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
            type="email"
            placeholder="Email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <input
            name="username"
            value={username}
            onChange={handleRegisterFormChange}
            type="text"
            placeholder="Name"
          />
          {errors.username && <span className="error">{errors.username}</span>}
          <input
            name="password"
            value={password}
            onChange={handleRegisterFormChange}
            type="password"
            placeholder="Password"
          />
          {errors.password && <span className="error">{errors.password}</span>}
          <input
            name="confirmpassword"
            value={confirmpassword}
            onChange={handleRegisterFormChange}
            type="password"
            placeholder="Re-Enter Password"
          />
          {errors.confirmpassword && (
            <span className="error">{errors.confirmpassword}</span>
          )}
          <div className="terms">
            <input type="checkbox" />
            <label>
              I agree to these <Link>Terms & Conditions</Link>
            </label>
          </div>
          <button
            disabled={password === confirmpassword ? false : true}
            type="submit"
            className="btn"
          >
            Login
          </button>
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
