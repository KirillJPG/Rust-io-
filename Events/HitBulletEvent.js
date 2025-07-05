import { Event } from "../Event.js";

export class HitBulletEvent extends Event{
    constructor(event){
        super("hit_bullet",event)
    }
}