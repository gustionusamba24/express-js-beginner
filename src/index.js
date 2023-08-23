const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const grocertList = [
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
];

app.get("/groceries", (req, res) => {
  res.send(grocertList);
});

app.post("/groceries", (req, res) => {
  console.log(req.body);
  grocertList.push(req.body);
  res.send(201);
});
