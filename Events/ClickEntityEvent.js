import { Event } from "../Event.js";

export class ClickEntityEvent extends Event{
    constructor(event){
        super("click_entity",event)
    }
}