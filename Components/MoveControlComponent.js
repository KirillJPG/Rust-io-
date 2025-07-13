import { Component } from "../Component.js";
import { CollideEvent } from "../Events/CollideEvent.js";
import { KeyEvent } from "../Events/KeyEvent.js";
import { KeyUpEvent } from "../Events/KeyUpEvent.js";
import { MoveEvent } from "../Events/MoveEvent.js";
import { Vector } from "../Lib/Vector2.js";
import { PhysicsComponent } from "./PhysicsComponent.js";
import { TransformComponent } from "./TransformComponent.js";

export class MoveControlComponent extends Component{
    speed = 120 // 100km/h
    moveX = 0
    moveY = 0
    constructor(entity,speed=120){
        super("MoveControl",entity)
        this.speed = speed
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
        const transform = this.getEntity().getComponent(new TransformComponent().getName())
        const {x,y} = transform.getPosition()
        const {w,h} = transform.getSize()
        const {x:vx,y:vy} = phys.getVelocity()
        const rotate = transform.getRotate()
        const moveSpeed = Math.abs(vx)+Math.abs(vy)
        if (moveSpeed > this.speed) {
            return
        }
        phys.setVelocity(new Vector(this.moveX*this.speed/60,this.moveY*this.speed/60))
        const eventData = {newPosX:x,newPosY:y,w,h,rotate,component:this}
        const event = new MoveEvent(eventData)
        this.sendEvent(event)
    }
    update(){
        this.move()
    }
}