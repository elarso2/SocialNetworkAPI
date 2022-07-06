const connection = require("../config/connection");
const { User, Thought } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Delete existing users
  await User.deleteMany({});

  // Delete existing thoughts
  await Thought.deleteMany({});

  // empty array for users
  const users = [];
});
