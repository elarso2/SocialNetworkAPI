const { ObjectId } = require("mongoose").Types;
const { User, Thought, Course } = require("../models");

module.exports = {
  // get all users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = {
          users,
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // get user by id, plus thought and friend data
  getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .populate("thoughts")
      .then((user) =>
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
  updateUser(req,res) {

  },

  // delete a user by id
  deleteUser(req,res) {
      User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
            ? res.status(404).json({ message: "No user exists with that ID."})
            : 
      )
  }
};
