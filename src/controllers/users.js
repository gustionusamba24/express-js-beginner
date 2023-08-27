const UsersModel = require("./../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();

    res.json({
      message: "GET all users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createUser = async (req, res) => {
  const { body } = req;

  try {
    await UsersModel.createUser(body);

    res.json({
      message: "CREATE user success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateUser = (req, res) => {
  const { id } = req.params;
  console.log(`id : ${id}`);
  res.json({
    message: "UPDATE user success",
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "DELETE user success",
    data: {
      id,
      name: "Gustio",
      email: "gustio@gmail.com",
      address: "Kalasan",
    },
  });
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
