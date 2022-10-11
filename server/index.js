const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen("5000", () => {
  console.log("Server listening on http://localhost:5000");
});
