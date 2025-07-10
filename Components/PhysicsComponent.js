import { Component } from "../Component.js";
import { CollideEvent } from "../Events/CollideEvent.js";
import { Vector } from "../Lib/Vector2.js";
import { TransformComponent } from "./TransformComponent.js";
import { MoveEvent } from "../Events/MoveEvent.js";
import { DrawLine } from "../Lib/DrawFigure.js";

export class PhysicsComponent extends Component{
    type = "static"
    mass = 1
    velocity = new Vector(0,0)
    angularVelocity = 0
    friction = 0.99
    constructor(entity,type = "static",mass = 1,friction = 0.99){
        super("Physics",entity)
        this.type = type
        this.friction = Math.min(friction,1)
        this.mass = mass
        this.listenEvents[new CollideEvent().getName()] = (event)=>this.onCollide(event)
        this.addListensEntity()
    }
    setVelocity(velocity){
        if (velocity.x||velocity.y){
            if ( this.getEntity().name =="ball"){
                console.log(velocity)
            }
        }
        this.velocity = new Vector(velocity.x,velocity.y)
    }
    getVelocity(){
        return this.velocity
    }
    getMass(){
        return this.mass
    }
    pushFriction(){
        const {x,y} = this.getVelocity()
        const newX = Math.abs(x*this.friction) < 0.1 ? 0 : x*this.friction 
        const newY = Math.abs(y*this.friction) < 0.1 ? 0 : y*this.friction
        const angVel = this.getAngularVel()
        if (Math.abs(angVel) > 0.1 ){
            this.setAngularVel(angVel*this.friction)
        }else{
            this.setAngularVel(0)
        }
        this.setVelocity(new Vector(newX,newY))
        

    }
    onCollide(event){
        const {other,our,normal} = event.getEvent()
        const physOther = other.getComponent(this.getName())
        const physOur = our.getComponent(this.getName())
        const {x:vx1,y:vy1} = physOther.getVelocity()
        const {x:vx2,y:vy2} = physOur.getVelocity()
        const mass1 = physOther.getMass()
        const mass2 = physOur.getMass() 
        
        const relative = {
            x:vx2-vx1 ,
            y: vy2-vy1
        }
        const velAlongNormal = relative.x * normal.x + relative.y * normal.y
        if (velAlongNormal >-0.1) return
   
        let j = (-(1+1) * velAlongNormal) / (1 / mass1 + 1/mass2)
        const impulse = new Vector(j*normal.x,j*normal.y)

        const newVX2 = 1/mass2 * impulse.x
        const newVY2 = 1/mass2 * impulse.y
        const newVX = -1/mass1*impulse.x
        const newVY = -1/mass1*impulse.y
        
        physOther.setVelocity(new Vector(newVX,newVY))
        if (physOur.getType() != "static"){
            physOur.setVelocity(new Vector(newVX2,newVY2))
        }
        
    }
    push(){
        const {x,y} = this.getVelocity()
        const angVel = this.getAngularVel()
        const transform = this.getEntity().getComponent(new TransformComponent().getName())
        const {x:oldX,y:oldY} = transform.getPosition()
        const rotate = transform.getRotate()
        this.pushFriction()
        transform.setX(oldX+(x))
        transform.setY(oldY+(y))
        transform.setRotate(rotate+angVel)
        if (this.getType() != "static"){
            const {w,h}= transform.getSize()
            const {x:newPosX,y:newPosY} = transform.getPosition()
            const eventData = {w,h,rotate,newPosX,newPosY,component:this}
            const event = new MoveEvent(eventData)
            this.sendEvent(event)
        } 


    }
    setAngularVel(angVel){
        this.angularVelocity = angVel
    }
    getAngularVel(){
        return this.angularVelocity
    }
    getType(){
        return this.type
    }
    update(){
        this.push()
    }

}