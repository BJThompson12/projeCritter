// user model resides here
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const projectSchema = require('./project')

const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique,
        },
        email:{
            type: String,
            required: true,
            trim: true,
            unique: true,
            match: [/.+@.+\..+/]
        },
        password:{
            type: String,
            required: true,
        },
        projects: [projectSchema],
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
   
);

userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 9;
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
    next()
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password)
}; 

const User = model('User', userSchema)

module.exports =  User; 