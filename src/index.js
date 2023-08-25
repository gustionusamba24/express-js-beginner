const express = require("express");
const app = express();
const PORT = 4000;

const groceriesRoute = require("./routes/groceries");
const marketsRoute = require("./routes/markets");

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
});

app.use("/api/v1/groceries", groceriesRoute);
app.use("/api/v1/markets", marketsRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
