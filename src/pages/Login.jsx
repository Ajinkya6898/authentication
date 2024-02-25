import React from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";

const Login = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <form>
          <h1>Login</h1>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="forgot-password">
            <Link>Forgot Password?</Link>
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
