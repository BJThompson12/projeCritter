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

// tasks {
//   taskstate
//   taskbody
//   difficulty
//   taskowner
// }
