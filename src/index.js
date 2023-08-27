const express = require("express");

const middlewareLogRequest = require("./middleware/log");
const usersRouter = require("./routes/users");

const app = express();
const PORT = 4000;

app.use(middlewareLogRequest);

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
