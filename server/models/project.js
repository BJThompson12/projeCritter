const mongoose = require("mongoose");
const taskSchema = require("./task");

const projectSchema = new mongoose.Schema({
  projectId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  projectstatus: {
    type: Number,
  },
  tasks: [taskSchema],
});

module.exports = projectSchema;
