// typedefs reside here
const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        projects: [Project]
    }

    type Project {
        _id: ID!
        title: String
        projectstatus: String
        tasks: [Task]
    }

    input InputProject{
        title: String
        projectstatus: String 
    }

    type Task{
        _id: ID!
        projectId: String
        taskbody: String
        taskstate: Int
    }

    input InputTask{
        projectId: String
        taskbody: String
        taskstate: Int
    }

    input UpdateTask{
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
