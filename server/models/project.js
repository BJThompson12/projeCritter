const mongoose = require("mongoose");
const taskSchema = require("./task");

const projectSchema = new mongoose.Schema({
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
