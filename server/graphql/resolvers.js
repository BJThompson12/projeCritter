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

    returnProject: async (_, args, context) => {
      if (context) {
        const currentUser = await User.findOne({ _id: context._id }).select(
          "-__v -password"
        );
        const selectedProject = currentUser.projects.find(
          (project) => project._id.toString() === args.input
        );
        return selectedProject;
      } else {
        throw new AuthenticationError("mustbeloggedin");
      }
    },

    returnTasks: async (_, args, context) => {
      if (context) {
        const currentUser = await User.findOne({
          _id: context._id,
        }).select("-__v -password");
        const projectIndex = await currentUser.projects.findIndex(
          (project) => project._id.toString() === args.input
        );

        if (projectIndex === -1) {
          throw new Error("Project not found");
        }

        const tasks = await currentUser.projects[projectIndex].tasks;

        return tasks;
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

    createTask: async (_, args, context) => {
      if (!context) {
        throw new AuthenticationError("err");
      }

      const userId = context._id;
      const projectId = args.input.projectId;
      const task = args.input;

      const user = await User.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }

      const projectIndex = user.projects.findIndex(
        (project) => project._id.toString() === projectId
      );

      if (projectIndex === -1) {
        throw new Error("Project not found");
      }

      user.projects[projectIndex].tasks.push(task);

      const updatedUser = await user.save();

      return updatedUser;
    },

    updateTask: async (_, args, context) => {
      const action = args.input.taskstate;
      const taskId = args.input.taskId;
      const projectId = args.input.projectId;

      if (!context) {
        throw new AuthenticationError("err");
      }
      const currentUser = await User.findByIdAndUpdate({ _id: context._id });

      const projectIndex = currentUser.projects.findIndex(
        (project) => project._id.toString() === projectId
      );

      if (projectIndex === -1) {
        throw new Error("Project not found");
      }

      const taskIndex = currentUser.projects[projectIndex].tasks.findIndex(
        (task) => task._id.toString() === taskId
      );

      if (taskIndex === -1) {
        throw new Error("task not found");
      }

      if (action === -1) {
        currentUser.projects[projectIndex].tasks[taskIndex].taskstate--;
      } else if (action === 1) {
        currentUser.projects[projectIndex].tasks[taskIndex].taskstate++;
      } else {
        throw new Error("action cannot be null. errno500");
      }

      const updatedUser = await currentUser.save();

      return updatedUser;
    },

    updateCritterName: async (_, args, context) => {
      if (!context) {
        throw new Error("context is undef.. ");
      }
      const currentUser = await User.findOne({ _id: context._id }).select(
        "-__v -password"
      );
      const selectedProject = currentUser.projects.find(
        (project) => project._id.toString() === args.input.projectId
      );
      selectedProject.critterName = args.input.critterName;
      const updatedUser = currentUser.save();
      return updatedUser;
    },

    delTask: async (_, args, context) => {
      if (!context) {
        throw new AuthenticationError("Please log in first!");
      }
      const currentUser = await User.findByIdAndUpdate({
        _id: context._id,
      });

      const projectIndex = currentUser.projects.findIndex(
        (project) => project._id.toString() === args.input.projectId
      );

      const taskIndex = currentUser.projects[projectIndex].tasks.findIndex(
        (task) => task._id.toString() === args.input.taskId
      );

      if (taskIndex !== -1) {
        currentUser.projects[projectIndex].tasks.splice(taskIndex, 1);
      }

      const updatedUser = await currentUser.save();

      return updatedUser;
    },
  },
};

module.exports = resolvers;
