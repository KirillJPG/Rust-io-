import { Component } from "../Component.js";
import { ClickEntityEvent } from "../Events/ClickEntityEvent.js";
import { PickUpItemEvent } from "../Events/PickUpItemEvent.js";

export class ItemComponent extends Component{
    constructor(entity){
        super("item",entity)
        this.listenEvents[new ClickEntityEvent().getName()] = (event) =>{
            this.click(event)
        }
        this.addListensEntity()
    }
    click(event){
        const data = event.getEvent()
        if (data.target == this.getEntity()){
            const data = {item:this.getEntity()}
            const event = new PickUpItemEvent(data)
            this.sendEvent(event)
            console.log("pickup",this.getEntity())
        }
    }

}