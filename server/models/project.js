const mongoose = require("mongoose");
const taskSchema = require("./task");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    critterName: {
      type: String,
      required: true,
      default: "Name me!",
    },
    projectstatus: {
      type: Number,
    },
    tasks: [taskSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = projectSchema;
