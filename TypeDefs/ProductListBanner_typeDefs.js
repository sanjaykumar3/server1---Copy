import { gql } from "apollo-server-express";

import { constraintDirectiveTypeDefs } from "graphql-constraint-directive";

export default gql`
  ${constraintDirectiveTypeDefs}
  type gproductbanner {
    productImage:String 
    label:String 
    product_list:String 

  }

  input pproductbanner {
    productImage:String 
    label:String 
    product_list:String 

  }

type Query {
    # getRegisterUserInfo(email:String!):RegisterInfo
    # getUserProfile(email:String!):guserProfile
    getproductbanner:[gproductbanner]
}

type Mutation {
    # createRegisterUser(input:PostRegisterinfo!):RegisterInfo!
    # updateUserProfile(input:PuserProfile!):guserProfile!
    updateproductbanner(input:pproductbanner!):gproductbanner!
}

`;
