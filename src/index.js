const express = require("express");
const app = express();
const PORT = 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/groceries", (req, res) => {
  res.send([
    {
      item: "milk",
      qty: 2,
    },
    {
      item: "cereal",
      qty: 3,
    },
    {
      item: "meat",
      qty: 1,
    },
  ]);
});
