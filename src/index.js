require("dotenv").config();
const express = require("express");

const middlewareLogRequest = require("./middleware/log");
const usersRouter = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(middlewareLogRequest);
app.use(express.json());

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
