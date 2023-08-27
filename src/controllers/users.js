const getAllUsers = (req, res) => {
  res.json({
    message: "GET users success",
  });
};

const createUser = (req, res) => {
  res.json({
    message: "Create user success",
  });
};

module.exports = { getAllUsers, createUser };
