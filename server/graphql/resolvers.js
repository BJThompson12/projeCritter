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
      }
      throw new AuthenticationError("mustbeloggedin");
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      const user = await User.create(args);
      const token = writeToken(user);
      return { user, token };
    },

    logIn: async (_, args) => {
      const user = await User.findOne({ email: args.email });
      if (!user) {
        throw new AuthenticationError("incorrect email or password");
      }
      const pass = await User.isCorrectPassword(args.password);
      if (!pass) {
        throw new AuthenticationError("incorrect email or password");
      }
      const token = writeToken(user);
      return { user, token };
    },
  },
};

module.export = resolvers;
