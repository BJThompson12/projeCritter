// user model resides here
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        userName:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("user",userSchema);