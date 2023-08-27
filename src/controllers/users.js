const getAllUsers = (req, res) => {
  const userData = {
    name: "Gustio Nusamba",
    email: "sambagans@gmail.com",
    address: "Kalasan",
  };

  res.json({
    message: "GET users success",
    data: userData,
  });
};

const createUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "CREATE user success",
    data: req.body,
  });
};

module.exports = { getAllUsers, createUser };
