import { TaskInput } from "@/generated"
import { MyModel } from "@/mongoose/mymodel"


export const taskTest = (_:unknown, {taskTest}:{taskTest: TaskInput})=>{
    const {taskName, description, isDone} = taskTest
 MyModel.create({
   taskName,
   description,
   isDone
})
 return {taskName: taskName,
    description: description,
    isDone:isDone
 }
}