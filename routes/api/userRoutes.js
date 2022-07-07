const router = require("express").Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

//GET all users: /api/users
router.route("/").get(getUsers);

//GET user by ID, + thought, friend data: /api/users/:userId

//POST new user: /api/users

//PUT to update by _id: /api/users/:userId

//DELETE by _id: /api/users/:userId

module.exports = router;
