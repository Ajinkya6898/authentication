import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";

const ChangePassword = () => {
  const [changePasswordFormData, setChangePasswordFormData] = useState({
    newpassword: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});
  const { newpassword, confirmpassword } = changePasswordFormData;

  const validateForm = () => {
    const newErrors = {};

    if (!newpassword) {
      newErrors.newpassword = "Password is required";
    } else if (newpassword.length < 5) {
      newErrors.newpassword = "Password must be greater than 5 letters";
    }

    setErrors(newErrors);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setChangePasswordFormData({
      ...changePasswordFormData,
      [name]: value,
    });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    const hasErrors = validateForm();
    if (!hasErrors) {
      console.log(changePasswordFormData);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={handleChangePassword}>
          <h1>Change Password</h1>
          <input
            value={newpassword}
            name="newpassword"
            onChange={handlePasswordChange}
            type="password"
            placeholder="New Password"
          />
          {errors.newpassword && (
            <span className="error">{errors.newpassword}</span>
          )}
          <input
            value={confirmpassword}
            name="confirmpassword"
            onChange={handlePasswordChange}
            style={{ marginBottom: "0px" }}
            type="password"
            placeholder="Confirm Password"
          />
          <button
            disabled={newpassword === confirmpassword ? false : true}
            className="btn"
          >
            Change Password
          </button>
          <div>
            <p>
              Re-direct to <Link to={"/login"}>Login page!</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
