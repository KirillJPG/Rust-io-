import { Component } from "../Component.js";
import { KeyEvent } from "../Events/KeyEvent.js"
import {Vector} from "../Lib/Vector2.js"

export class TransformComponent extends Component{
    position = new Vector()
    w = 30
    h = 30
    rotate = 0
    constructor(entity,x=0,y=0,h=0,w=0,rotate=0){
        super("Transform",entity)
        this.rotate = rotate
        this.position = new Vector(x,y)
        this.w = w
        this.h = h
    }
    
    setRotate(rotate){
        this.rotate = rotate
    }
    getAxes(){
        const cos = Math.cos(this.rotate)
        const sin = Math.sin(this.rotate)
        const axes = [
            new Vector(cos,sin),
            new Vector(-sin,cos)
        ]
        return axes
    }
    getRotate(){
        return this.rotate
    }
    getPosition(){
        return this.position
    }
    getSize(){
        const w = this.w
        const h = this.h
        return {w,h}
    }
    setY(y){
        this.position.y = y
    }
    setX(x){
        this.position.x = x
    }
}