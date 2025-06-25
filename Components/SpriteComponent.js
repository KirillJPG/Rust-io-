import { Component } from "../Component.js";
import { TransformComponent } from "./TransformComponent.js";

export class SpriteComponent extends Component{
    constructor(entity){
        super("SpriteComponent",entity)
    }
    draw(x,y){
    }
    update(){
        const transform = this.entity.getComponent(new TransformComponent().getName())
        const {x,y} = transform.getPosition()
        this.draw(x,y)
    }
    
}