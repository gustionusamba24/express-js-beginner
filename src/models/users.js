const dbPool = require("./../config/database");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";

  return dbPool.execute(SQLQuery);
};

const createUser = (body) => {
  const { name, email, address } = body;

  const SQLQuery = `INSERT INTO users (name, email, address) VALUES ("${name}", "${email}", "${address}")`;

  return dbPool.execute(SQLQuery);
};

const updateUser = (id, body) => {
  const { name, email, address } = body;

  const SQLQuery = `UPDATE users SET name = "${name}", email = "${email}", address = "${address}" WHERE id = ${id}`;

  return dbPool.execute(SQLQuery);
};

module.exports = { getAllUsers, createUser, updateUser };
