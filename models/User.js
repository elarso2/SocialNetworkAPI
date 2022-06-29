const { Schema, Types } = require("mongoose");
const thoughtSchema = require("./Thought");
const reactionSchema = require("./Reaction");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    thoughts: {},
    friends: {},
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

const User = model("user", userSchema);

module.exports = User;
