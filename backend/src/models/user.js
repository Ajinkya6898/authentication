const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: { type: String, required: false, unique: true },
  username: { type: String, required: false, unique: true },
  password: { type: String, required: true },
  confirmpassword: { type: String, required: true },
});

const UserRegister = mongoose.model("Register", userSchema);
module.exports = UserRegister;
