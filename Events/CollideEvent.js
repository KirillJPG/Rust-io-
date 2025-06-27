import { Event } from "../Event.js";

export class CollideEvent extends Event{
    constructor(event){
        super("collide",event)
    }
}