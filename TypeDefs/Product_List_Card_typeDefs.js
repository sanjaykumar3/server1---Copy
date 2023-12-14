import { gql } from "apollo-server-express";

import { constraintDirectiveTypeDefs } from "graphql-constraint-directive";

export default gql`
  ${constraintDirectiveTypeDefs}
  type gproductlistcard {
    id:ID!
    productImage:String 
    oldPrice:String 
    newPrice: String 
    discount:String 
    stockqty:String 
    isliked:Boolean 
    arrivalnew:Boolean 
    # user_id:String

  }

  type ProductListCardResult {
    id: ID!
    data: gproductlistcard!
  }

  input pproductlist {
    productImage:String!
    oldPrice:String!
    newPrice: String! 
    discount:String!
    stockqty:String!
    isliked:Boolean
    arrivalnew:Boolean 
  }

type Query {
    # getRegisterUserInfo(email:String!):RegisterInfo
    getProductListCards: [gproductlistcard]
}

# type Mutation {
#     # createRegisterUser(input:PostRegisterinfo!):RegisterInfo!
#     updateproductlist(input:pproductlist!):gproductlistcard!
# }

# type Mutation {
#     createProductListCard(input: pproductlist!): ProductListCardResult! #this is for create
#     updateProductListCard(input: pproductlist!): ProductListCardResult!
# }

type Mutation {
    createProductListCard(input: pproductlist!): ProductListCardResult! #this is for create
    updateProductListCard(input: pproductlist!): ProductListCardResult!
}
`;
