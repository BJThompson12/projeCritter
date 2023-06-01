import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        email
        username
        _id
      }
    }
  }
`;

// pulled from CREATE_USER method since they have no data yet.

// projects{
//     projectId
//     title
//     projectstatus
//     tasks{
//       taskstate
//       taskbody
//       difficulty
//       taskowner
//     }
// }

//------------------------------------------------------------------------------------------

export const LOG_IN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation createProject($input: InputProject!) {
    createProject(input: $input) {
      _id
      email
      username
      projects {
        _id
        projectId
        projectstatus
        title
      }
    }
  }
`;

// tasks{
//   taskstate
//   taskbody
//   difficulty
//   taskowner
// }

// ---------------------------------------------------------------------

// export const DEL_PROJECT = gql`
//     mutation delProject($projectId: String!){
//         delProject(projectId: $projectId){
//             {
//                  _id
//                 username
//                 email
//                 projects{
//                     projectId
//                     title
//                     projectstatus
//                     tasks{
//                       taskstate
//                       taskbody
//                       difficulty
//                       taskowner
//                     }
//                 }
//             }
//         }
//         }
// `;
