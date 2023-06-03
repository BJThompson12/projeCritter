import { gql } from "@apollo/client";

export const RETURN_USER = gql`
  {
    returnUser {
      _id
      email
      username
      projects {
        _id
        projectstatus
        title
      }
    }
  }
`;

export const RETURN_PROJECT = gql`
  query ReturnProject($input: String!) {
    returnProject(input: $input) {
        _id
        projectstatus
        title
        critterName
        createdAt
    }
  }
`;

// tasks {
//   taskstate
//   taskbody
//   difficulty
//   taskowner
// }
