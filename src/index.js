const express = require("express");

const usersRouter = require("./routes/users");

const app = express();
const PORT = 4000;

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.json({
    nama: "Gustio",
    email: "sambagans@gmail.com",
  });
});

app.post("/", (req, res) => {
  res.send("POST request success");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
