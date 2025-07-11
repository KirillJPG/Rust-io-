import { Component } from "../Component.js";
import { GetRad } from "../Lib/GetRad.js";
import { TransformComponent } from "./TransformComponent.js";

export class SpriteComponent extends Component{
    constructor(entity,name="sprite"){
        super(name,entity)
    }
    draw(x,y,w,h,rotate){
    }

    update(){
        const transform = this.entity.getComponent(new TransformComponent().getName())
        const camera = this.getCamera()
        const {x:xCamera,y:yCamera} = camera.getPosition()
        const {x,y} = transform.getPosition()
        const {w,h} = transform.getSize()
        const rotate = transform.getRotate()
        const xDraw = x-xCamera
        const yDraw = y-yCamera
        this.draw(xDraw,yDraw,w,h,rotate)
    }
}