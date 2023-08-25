const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const groceryList = [
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
  res.send(groceryList);
});

app.get("/groceries/:item", (req, res) => {
  const { item } = req.params;
  const groceryItem = groceryList.find((g) => g.item === item);
  res.send(groceryItem);
});

app.post("/groceries", (req, res) => {
  console.log(req.body);
  grocertList.push(req.body);
  res.sendStatus(201);
});
