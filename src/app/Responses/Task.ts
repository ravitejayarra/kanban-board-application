import { Stage } from "./Stage";

export class Task{
    constructor(public id:Number, public name:String,public stage:Stage,public deadline:String){}
}