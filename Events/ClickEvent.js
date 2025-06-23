import {Event} from "../Event.js"
export class ClickEvent extends Event{
    constructor(event){
        super("click",event)
    }
}