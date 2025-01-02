import { sayHello } from "./mutations/say-hello";
import { taskTest } from "./mutations/task-test";
import { helloQuery } from "./queries/hello-query";

export const resolvers = {
  Query: {
    helloQuery,
  },
  Mutation: {
    sayHello,
    taskTest
  },
};
