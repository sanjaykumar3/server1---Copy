import { gql } from "apollo-server-express";

import { constraintDirectiveTypeDefs } from "graphql-constraint-directive";

export default gql`
  ${constraintDirectiveTypeDefs}
  type guserProfile {
    firstName: String 
    lastName:String 
    email:String 
    phone:String 
    dob:String 
    gender:String 
    address:String

  }

  input PuserProfile {
    firstName: String 
    lastName:String 
    email:String 
    phone:String 
    dob:String 
    gender:String 
    address:String

  }

type Query {
    # getRegisterUserInfo(email:String!):RegisterInfo
    getUserProfile(email:String!):guserProfile
}

type Mutation {
    # createRegisterUser(input:PostRegisterinfo!):RegisterInfo!
    updateUserProfile(input:PuserProfile!):guserProfile!
}

`;
