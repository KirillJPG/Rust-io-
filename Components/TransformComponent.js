import { Component } from "../Component.js";
import { KeyEvent } from "../Events/KeyEvent.js"
export class TransformComponent extends Component{
    x = 0
    y = 0
    w = 30
    h = 30
    rotate = 0
    constructor(entity,x=0,y=0,h=0,w=0){
        super("Transform",entity)
        this.x = x
        this.y = y
        this.w = w
        this.h = h
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
    getSize(){
        const w = this.w
        const h = this.h
        return {w,h}
    }
    setY(y){
        this.y = y
    }
    setX(x){
        this.x = x
    }
}