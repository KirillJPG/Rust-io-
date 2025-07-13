import { Event } from "../Event.js";

export class UseItemEvent extends Event{
    constructor(event){
        super("use_item",event)
    }
}