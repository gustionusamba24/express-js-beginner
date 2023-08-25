const express = require("express");
const app = express();
const PORT = 4000;

const groceriesRouter = require("./routes/groceries");

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
});

app.use("/api/v1/groceries", groceriesRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
