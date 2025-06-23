import {Event} from "../Event.js"
export class KeyEvent extends Event{
    constructor(event){
        super("key",event)
    }
}