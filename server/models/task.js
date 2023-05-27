const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  projectId: {
    type: String,
    required: true,
  },
  taskstate: {
    type: Number,
    requred: true,
  },
  taskbody: {
    type: String,
    required: true,
  },
  difficulty: {
    type: Number,
    required: true,
  },
  taskowner: {
    type: String,
    required: true,
  },
});

module.exports = taskSchema;
