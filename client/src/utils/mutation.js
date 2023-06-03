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

export const DEL_PROJECT = gql`
  mutation delProject($input: String!) {
    delProject(input: $input) {
      projects {
        title
      }
    }
  }
`;

export const CREATE_TASK = gql`
  mutation createTask($input: InputTask!) {
    createTask(input: $input) {
      projects {
        _id
        projectstatus
        title
        tasks {
          _id
          projectId
          taskbody
          taskstate
        }
      }
    }
  }
`;
