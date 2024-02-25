const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("test to login");
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
