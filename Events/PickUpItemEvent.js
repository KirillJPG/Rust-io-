import { Event } from "../Event.js";

export class PickUpItemEvent extends Event{
    constructor(event){
        super("piclupitem",event)
    }
} 