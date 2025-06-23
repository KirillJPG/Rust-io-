import {Event} from "../Event"
export class KeyEvent extends Event{
    constructor(event){
        super("key",event)
    }
}