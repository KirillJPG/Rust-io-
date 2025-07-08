import { Event } from "../../../Event.js";

export class OpenDoorEvent extends Event{
    constructor(event){
        super("open_door",event)
    }
}