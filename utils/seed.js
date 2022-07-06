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

  // empty array for thoughts
  const thoughts = [];

  // Add users to collection
  await User.collection.insertMany(users);

  // Add thoughts to collection
  await Thought.collection.insertMany(thoughts);

  // Log seed data to show what will appear in database
  console.table(users);
  console.table(thoughts);
  console.info("Seeding Complete.");
  process.exit(0);
});
