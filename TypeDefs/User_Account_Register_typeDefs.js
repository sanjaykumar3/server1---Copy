import { gql } from "apollo-server-express";
// const { constraintDirectiveTypeDefs } = require("graphql-constraint-directive");
import { constraintDirectiveTypeDefs } from "graphql-constraint-directive";

export default gql`
  ${constraintDirectiveTypeDefs}
  type RegisterInfo {
    email: String
    firstName: String
    lastName: String
    phone: String
    password: String
    createdDate: String
  }

  input PostRegisterinfo {
    email: String!
    firstName: String!
    lastName: String!
    phone: String!
    password: String!
    createdDate: String!
  }

type Query {
    getRegisterUserInfo(email:String!):RegisterInfo
}

type Mutation {
    createRegisterUser(input:PostRegisterinfo!):RegisterInfo!
}

`;
