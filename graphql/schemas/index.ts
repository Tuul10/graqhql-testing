import { gql } from "graphql-tag";

export const typeDefs = gql`
type TaskTest {
    taskName: String
    description: String
    isDone: Boolean
    }

  type Query {
    helloQuery: String
  }

  
   input TaskInput {
     taskName: String!
     description: String!
     isDone: Boolean
    }

  type Mutation {
    sayHello(name: String!, age:Int!): String
    taskTest(taskTest:TaskInput):TaskTest
  }
`;
