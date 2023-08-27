const express = require("express");

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
