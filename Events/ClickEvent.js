import {Event} from "../Event"
export class ClickEvent extends Event{
    constructor(event){
        super("click",event)
    }
}