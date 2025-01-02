import { sayHello } from "@/graphql/resolvers/mutations/say-hello";

jest.mock('../../mongoose/sayHello',()=>({
  HelloModel: {
    create: jest.fn().mockReturnValue({
    name: "TT",
    age:12
  })}
}))

describe("Hello Mutation", () => {
  it("Should call say hello mutation with name input", async() => {
  const result = await  sayHello!({}, { name: "TT", age:12 })
  expect(result).toEqual("TT, 12");
  });
});
