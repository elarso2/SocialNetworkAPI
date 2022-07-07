const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  // get all thoughts
  getThoughts(req, res) {
    Thought.find().then((thoughts) =>
      res.json(thoughts).catch((err) => res.status(500).json(err))
    );
  },

  // get thought by id
  getThoughtById() {},

  // create a new thought
  createThought() {},

  // update a thought
  updateThought() {},

  // delete a thought
  deleteThought() {},

  // post reaction
  createReaction() {},

  // delete reaction
  deleteReaction() {},
};
