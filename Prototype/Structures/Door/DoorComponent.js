import { Component } from "../../../Component.js";
import {OpenDoorEvent} from "./OpenDoorEvent.js"
import {TransformComponent} from "../../../Components/TransformComponent.js"
export class DoorComponent extends Component{
    isOpen = false
    constructor(entity){
        super("door",entity)
        this.listenEvents[ new OpenDoorEvent().getName()] =(event)=>{
            this.open(event)
        }
        this.addListensEntity()
    }
    open(event){
        const data = event.getEvent()
        if (data.door != this.getEntity()) return
        const transform = this.getEntity().getComponent(new TransformComponent().getName())
        if (!this.isOpen){
            transform.setRotate(90)
        }else{
            transform.setRotate(0)
        }
        this.isOpen  = !this.isOpen
    }
}