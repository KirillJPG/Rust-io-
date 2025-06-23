import {Event} from "../Event.js"
export class MouseMoveEvent extends Event{
    constructor(event){
        super("mousemove",event)
    }
}