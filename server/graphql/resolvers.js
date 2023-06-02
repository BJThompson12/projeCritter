// resolvers reside here

const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { writeToken } = require("../utils/auth");

const resolvers = {
  //query resolvers
  Query: {
    returnUser: async (_, args, context) => {
      if (context) {
        const currentUser = await User.findOne({ _id: context._id })
          .select("-_V -password")
          .populate("projects");
        return currentUser;
      } else {
        throw new AuthenticationError("mustbeloggedin");
      }
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      const user = await User.create(args);
      const token = writeToken(user);
      return { user, token };
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("incorrect email or password");
      }
      const pass = await user.isCorrectPassword(password);
      if (!pass) {
        throw new AuthenticationError("incorrect email or password");
      }
      const token = writeToken(user);
      return { user, token };
    },

    createProject: async (_, args, context) => {
      if (!context._id) {
        throw new AuthenticationError("err");
      }

      const addProjectToUser = await User.findByIdAndUpdate(
        { _id: context._id },
        { $addToSet: { projects: args.input } },
        { new: true }
      );
      return addProjectToUser;
    },



    
    delProject: async (_, args, context) => {
      if (!context) {
        throw new AuthenticationError("Please log in first!");
      }
      const removeProjectFromUser = await User.findByIdAndUpdate(
        { _id: context._id },
        { $pull: { projects: { _id: args.input } } }
      );
      return removeProjectFromUser;
    },




    createTask: async (_, { projectId, tasks }, context) => {
      if (!projectId) {
        throw new AuthenticationError("err");
      }
      const addTaskToProject = await User.findByIdAndUpdate(
        { _id: context._id },
        { $addToSet: { tasks: tasks } },
        { new: true }
      );
      return addTaskToProject;
    },

    updateTask: async (_, { taskId, tasks }, context) => {
      if (!taskId) {
        throw new AuthenticationError("err");
      }
      const updateTaskToProject = await User.findByIdAndUpdate(
        { _id: context._id },
        { $addToSet: { tasks: tasks } },
        { new: true }
      );
      return updateTaskToProject;
    },
  },
};

module.exports = resolvers;
