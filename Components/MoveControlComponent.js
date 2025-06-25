import { Component } from "../Component.js";
import { KeyEvent } from "../Events/KeyEvent.js";
import { KeyUpEvent } from "../Events/KeyUpEvent.js";
import { TransformComponent } from "./TransformComponent.js";

export class MoveControlComponent extends Component{
    speed = 1000
    moveX = 0
    moveY = 0
    constructor(entity){
        super("MoveControl",entity)
        this.listenEvents[new KeyEvent().getName()] = (event) =>this.onKeyDown(event)
        this.listenEvents[new KeyUpEvent().getName()] = (event) =>this.onKeyUp(event)
        this.addListensEntity()
    }
    onKeyUp(event){
        const key = event.getEvent().key
        if (key == "w") this.setY(0)  
        if (key == "s") this.setY(0)  
        if (key == "a") this.setX(0)  
        if (key == "d") this.setX(0) 
    }
    onKeyDown(event){
        const key = event.getEvent().key
        if (key == "w") this.setY(-1)  
        if (key == "s") this.setY(1)  
        if (key == "a") this.setX(-1)  
        if (key == "d") this.setX(1)  
    }
    setY(y) {
        this.moveY = y
    }
    setX(x) {
        this.moveX = x
    }
    move(){
        const transform = this.getEntity().getComponent(new TransformComponent().getName())
        const {x,y} = transform.getPosition()
        transform.setX(x+(this.moveX*(this.speed/1000)))
        transform.setY(y+(this.moveY*(this.speed/1000)))
    }
    update(){
        this.move()
    }
}