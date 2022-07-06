const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getThought, getUsername } = require("./data");

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

  // generate thoughts
  for (let i = 0; i < 5; i++) {
    thoughts.push({
      thoughtText: getThought(5),
      username: getUsername(5),
    });
  }

  // Add thoughts to collection
  await Thought.collection.insertMany(thoughts);

  // generate users
  thoughts.forEach((thought) => {
    users.push({
      username: thought.username,
      email: `${thought.username}@gmail.com`,
      thoughts: [thought._id],
    });
  });

  // Add users to collection
  await User.collection.insertMany(users);

  // Log seed data to show what will appear in database
  console.table(users);
  console.table(thoughts);
  console.info("Seeding Complete.");
  process.exit(0);
});
