// typedefs reside here
const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        savedProjects: [Project]
    }

    type Project {
        _id: ID!
        projectID: String
        title: String
        projectstatus: String
    }

    input InputProject{
        projectID: String
        title: String
        projectstatus: String 
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query { 
        returnUser: User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        createProject(input: InputProject!): User
        delProject(projectId: String!): User
    }
`;

module.exports = typeDefs;
