import { Event } from "../Event.js";

export class HoldItemEvent extends Event{
    constructor(event){
        super("hold_item",event)
    }
}