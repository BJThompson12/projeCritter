// typedefs reside here
const { gql } = require("apollo-server-express");
const { Date } = require("graphql-scalars");

const typeDefs = gql`
  scalar Date

  type User {
    _id: ID!
    username: String
    email: String
    projects: [Project]
  }

  type Project {
    _id: ID!
    title: String!
    critterName: String!
    projectstatus: String
    tasks: [Task]
    createdAt: Date
  }

  input InputProject {
    title: String
    projectstatus: String
  }

  type Task {
    _id: ID!
    projectId: String
    taskbody: String
    taskstate: Int
  }

  input InputTask {
    projectId: String
    taskbody: String
    taskstate: Int
  }

  input UpdateTask {
    taskId: String
    taskstate: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    returnUser: User
    returnProject(input: String!): Project
    returnTasks(input: String!): [Task]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createProject(input: InputProject!): User
    delProject(input: String!): User
    createTask(input: InputTask!): User
    updateTask(input: UpdateTask!): User
  }
`;

module.exports = typeDefs;
