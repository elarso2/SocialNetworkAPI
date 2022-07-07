const router = require("express").Router();
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// GET all thoughts, POST new thought: /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// GET thought by id, update thought by id, delete thought by id: /api/thoughts/:getThoughtById
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// POST reaction, DELETE reaction: /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(createReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);
