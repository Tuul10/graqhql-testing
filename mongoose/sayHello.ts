import mongoose, { models } from "mongoose";

const helloSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number}
})
export const HelloModel = models["Hello"] || mongoose.model("Hello", helloSchema)