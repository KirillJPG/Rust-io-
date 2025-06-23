import {Event} from "../Event"
export class MouseMoveEvent extends Event{
    constructor(event){
        super("mousemove",event)
    }
}