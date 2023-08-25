const { Router } = require("express");

const router = Router();

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

router.get("/", (req, res) => {
  res.send(groceryList);
});

router.get("/:item", (req, res) => {
  const { item } = req.params;
  const groceryItem = groceryList.find((g) => g.item === item);
  res.send(groceryItem);
});

router.post("/", (req, res) => {
  console.log(req.body);
  groceryList.push(req.body);
  res.sendStatus(201);
});

module.exports = router;
