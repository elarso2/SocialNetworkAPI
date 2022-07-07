const router = require("express").Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

//GET all users, POST new user: /api/users
router.route("/").get(getUsers).post(createUser);

//GET user by ID, + thought, friend data: /api/users/:userId
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

// POST new friend, DELETE friend: /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
