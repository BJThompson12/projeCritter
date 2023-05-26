const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema(
    {
        projectName: {
            type: String,
            required: true,
          },
        projectStatus: {
            type: String,
            required: true,
            default: "active",
          },
    },
    {timestamps: true}
);

module.exports = mongoose.model("project",projectSchema);