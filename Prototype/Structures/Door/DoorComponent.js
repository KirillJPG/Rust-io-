import { Component } from "../../../Component.js";
import {OpenDoorEvent} from "./OpenDoorEvent.js"
import {TransformComponent} from "../../../Components/TransformComponent.js"
import { PhysicsComponent } from "../../../Components/PhysicsComponent.js";
import { GetRad } from "../../../Lib/GetRad.js";
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
        const phys = this.getEntity().getComponent(new PhysicsComponent().getName())
        if (!this.isOpen){
            phys.setAngularVel(GetRad(50))
        }else{
            phys.setAngularVel(GetRad(-50))
        }
        this.isOpen  = !this.isOpen
    }
}