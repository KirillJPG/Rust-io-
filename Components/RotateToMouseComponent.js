import { Component } from "../Component.js";
import { TransformComponent } from "./TransformComponent.js";
import {MouseMoveEvent} from "../Events/MouseMoveEvent.js"
export class RotateToMouseComponent extends Component{
    constructor(entity){
        super("RotateToMouse",entity)
        this.listenEvents[new MouseMoveEvent().getName()] = (event)=>{
            this.onMouseMove(event)    
        }
        this.addListensEntity()
    }
    onMouseMove(event){
        const data = event.getEvent()
        const {x:xCamera,y:yCamera} = this.getCamera().getPosition()
        const transform = this.getEntity().getComponent(new TransformComponent().getName())
        const {x:xPlayer,y:yPlayer} = transform.getPosition()
        const x = data.clientX
        const y = data.clientY
        const dx = xPlayer-xCamera-x
        const dy = yPlayer-yCamera-y
        const rotate = Math.atan2(dy,dx)* (180/Math.PI)+(3.14*180/Math.PI)
        transform.setRotate(rotate)

    }
}