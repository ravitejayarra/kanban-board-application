import { Stage } from "./Stage";

export class MoveTaskRequest{
    constructor(public id:Number,public name:String,public stage:Stage,public deadline:String){}
}