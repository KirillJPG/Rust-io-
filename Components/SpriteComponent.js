import { Component } from "../Component.js";
import { TransformComponent } from "./TransformComponent.js";

export class SpriteComponent extends Component{
    constructor(entity){
        super("Sprite",entity)
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
        this.draw(x-xCamera,y-yCamera,w,h,rotate)
    }
}