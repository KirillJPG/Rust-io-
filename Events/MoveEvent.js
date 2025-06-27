import {Event} from "../Event.js"
export class MoveEvent extends Event{
    constructor(event){
        super("move",event)
    }
}