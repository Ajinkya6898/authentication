import React from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";

const Register = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <form>
          <h1>Register</h1>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Re-Enter Password" />
          <div className="terms">
            <input type="checkbox" />
            <label htmlFor="checkbox">
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
