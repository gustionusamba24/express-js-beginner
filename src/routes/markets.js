const { Router } = require("express");

const router = Router();

const supermarkets = [
  {
    store: "Super Indo",
  },
  {
    store: "Walmart",
  },
  {
    store: "Carefour",
  },
];

router.get("/", (req, res) => {
  res.send(supermarkets);
});

module.exports = router;
