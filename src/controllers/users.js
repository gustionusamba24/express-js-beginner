const getAllUsers = (req, res) => {
  res.json({
    message: "GET users success",
  });
};

const createUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "Create user success",
    data: req.body,
  });
};

module.exports = { getAllUsers, createUser };
