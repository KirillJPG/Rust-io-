import { Component } from "../Component.js";
import { KeyEvent } from "../Events/KeyEvent.js";
import { KeyUpEvent } from "../Events/KeyUpEvent.js";
import { Vector } from "../Lib/Vector2.js";
import { PhysicsComponent } from "./PhysicsComponent.js";

export class MoveControlComponent extends Component{
    speed = 12000 // 12km/h
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
        if (key == "w" || key == "ц") this.setY(0)  
        if (key == "s" || key == "ы") this.setY(0)  
        if (key == "a" || key == "ф") this.setX(0)  
        if (key == "d" || key == "в") this.setX(0) 
    }
    onKeyDown(event){
        const key = event.getEvent().key
        if (key == "w" || key == "ц") this.setY(-1)  
        if (key == "s" || key == "ы") this.setY(1)  
        if (key == "a" || key == "ф") this.setX(-1)  
        if (key == "d" || key == "в") this.setX(1)  
    }
    setY(y) {
        this.moveY = y
    }
    setX(x) {
        this.moveX = x
    }
    
    move(){
        const phys = this.getEntity().getComponent(new PhysicsComponent().getName())
        phys.setVelocity(new Vector(this.moveX*this.speed/1000,this.moveY*this.speed/1000))
    }
    update(){
        this.move()
    }
}