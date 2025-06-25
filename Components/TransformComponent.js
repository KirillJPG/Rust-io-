import { Component } from "../Component.js";
import { KeyEvent } from "../Events/KeyEvent.js"
export class TransformComponent extends Component{
    x = 0
    y = 0
    rotate = 0
    constructor(entity,x=0,y=0){
        super("TransformComponent",entity)
        this.x = x
        this.y = y
    }
    
    setRotate(rotate){
        this.rotate = rotate
    }
    getRotate(){
        return this.rotate
    }
    getPosition(){
        const x = this.x
        const y = this.y
        return {x,y}
    }
    setY(y){
        this.y = y
    }
    setX(x){
        this.x = x
    }
}