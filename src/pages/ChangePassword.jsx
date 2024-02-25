import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";

const ChangePassword = () => {
  const [changePasswordFormData, setChangePasswordFormData] = useState({
    newpassword: "",
    confirmpassword: "",
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setChangePasswordFormData({
      ...changePasswordFormData,
      [name]: value,
    });
  };

  const { newpassword, confirmpassword } = changePasswordFormData;
  return (
    <div className="container">
      <div className="wrapper">
        <form>
          <h1>Change Password</h1>
          <input
            value={newpassword}
            name="newpassword"
            onChange={handlePasswordChange}
            type="password"
            placeholder="New Password"
          />
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
