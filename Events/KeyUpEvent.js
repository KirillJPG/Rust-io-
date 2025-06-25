import {Event} from "../Event.js"
export class KeyUpEvent extends Event{
    constructor(event){
        super("keyup",event)
    }
}