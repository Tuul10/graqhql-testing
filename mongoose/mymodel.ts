import mongoose, { models } from "mongoose";

const  mySchema = new mongoose.Schema({
    taskName: {type: String},
    description: {type: String},
    isDone:{type: Boolean}
})

export const MyModel = models["MyData"] || mongoose.model("MyData", mySchema) 