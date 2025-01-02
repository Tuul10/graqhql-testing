import { taskTest } from "@/graphql/resolvers/mutations/task-test";

jest.mock("../../mongoose/mymodel", ()=>({
    MyModel:{
        create: jest.fn().mockReturnValue({
            taskName: "To do",
            description: "todo testing time",
            isDone: true
        })
    }
}))

describe("this is test", ()=>{
    it("Shoud call test mutation", async()=>{
        const result = await taskTest!({},{taskTest:{ description: "todo testing time", taskName:"To do", isDone: true}})
        expect(result).toEqual({
                description: "todo testing time",
                taskName: "To do",
                isDone: true
        })
    })
})