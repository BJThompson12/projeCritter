import { gql } from "@apollo/client";

export const  RETURN_USER = gql`
    query returnUser{
        _id
        username
        email
        projects{
            projectId
            title
            projectstatus
            tasks{
              taskstate
              taskbody
              difficulty
              taskowner  
            }
        }
    }
`


