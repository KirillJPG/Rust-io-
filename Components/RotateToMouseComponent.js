import { Component } from "../Component.js";
import { TransformComponent } from "./TransformComponent.js";
import {MouseMoveEvent} from "../Events/MouseMoveEvent.js"
import { Vector } from "../Lib/Vector2.js";
import { CalculateRotating } from "../Lib/CalculateRotating.js";
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
        const mouseVec = new Vector(data.clientX,data.clientY)
        const playerVec = new Vector(xPlayer-xCamera,yPlayer-yCamera)
        const rotate = CalculateRotating(playerVec,mouseVec)
        transform.setRotate(rotate)
    }
}