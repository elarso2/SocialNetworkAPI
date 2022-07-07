const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  // get all users
  getUsers(req, res) {
    User.find().then((users) =>
      res.json(users).catch((err) => res.status(500).json(err))
    );
  },

  // get user by id, plus thought and friend data
  getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate({ path: "thoughts", select: "-__v" })
      .populate({ path: "friends", select: "-__v" })
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: "No user exists with that ID." })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // post a new user
  createUser(req, res) {
    User.create(req.body)
      .then((newUser) => res.json(newUser))
      .catch((err) => res.status(500).json(err));
  },

  // put to update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found." })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // delete a user by id
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(400).json({ message: "No user found." })
          : res.json({ message: "User successfully deleted." })
      )
      .catch((err) => res.status(500).json(err));
  },

  // add friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: req.params.friendId },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id found. " })
          : res.json(user)
      )
      .catch((err) => res.json(err));
  },

  // delete friend
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: req.params.friendId },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id found. " })
          : res.json(user)
      )
      .catch((err) => res.json(err));
  },
};
