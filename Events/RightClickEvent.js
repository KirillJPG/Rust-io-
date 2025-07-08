import {Event} from "../Event.js"
export class RightClickEvent extends Event{
    constructor(event){
        super("rightclick",event)
    }
}