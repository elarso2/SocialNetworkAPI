const { Schema, model, default: mongoose } = require("mongoose");
const userSchema = require("./User");
const formatDate = require("../utils/date");

const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      type: mongoose.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      require: true,
      max_length: 280,
    },
    username: {
      type: String,
      require: true,
      ref: "user",
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formateData,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      require: true,
      max_length: 280,
      min_length: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate,
    },
    username: {
      type: String,
      require: true,
      ref: "user",
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
