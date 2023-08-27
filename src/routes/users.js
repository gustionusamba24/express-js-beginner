const express = require("express");

const UserController = require("./../controllers/users");

const router = express.Router();

// CREATE - POST
router.post("/", UserController.createUser);

// READ - GET
router.get("/", UserController.getAllUsers);

// UPDATE - PATCH
router.patch("/:id", UserController.updateUser);

// DELETE - DELETE
router.delete("/:id", UserController.deleteUser);

module.exports = router;
