import { Event } from "../Event.js";

export class RightEntityEvent extends Event{
    constructor(event){
        super("right_entity",event)
    }
}