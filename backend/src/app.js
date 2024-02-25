const express = require("express");
const app = express();
const connect = require("./db/conn.js");
const UserRegister = require("./models/user.js");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("test");
});

app.post("/register", async (req, res) => {
  try {
    const { email, username, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const newUser = new UserRegister({
      email,
      username,
      password,
      confirmpassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(5000, async () => {
  try {
    await connect();
    console.log("Listening on port 5000");
  } catch (err) {
    console.error(err.message);
  }
});
