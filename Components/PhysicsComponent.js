import { Component } from "../Component.js";
import { CollideEvent } from "../Events/CollideEvent.js";
import { Vector } from "../Lib/Vector2.js";
import { MoveControlComponent } from "./MoveControlComponent.js";
import { TransformComponent } from "./TransformComponent.js";
import {GetNormal} from "../Lib/GetNormal.js"
import { CollisionComponent } from "./CollisionComponent.js";

export class PhysicsComponent extends Component{
    type = "static"
    mass = 1
    velocity = new Vector(0,0)
    angularVelocity = 0
    constructor(entity,type = "static",mass = 1){
        super("Physics",entity)
        this.type = type
        this.mass = mass
        this.listenEvents[new CollideEvent().getName()] = (event)=>this.onCollide(event)
        this.addListensEntity()
    }
    setVelocity(velocity){
        this.velocity = new Vector(velocity.x,velocity.y)
    }
    getVelocity(){
        return this.velocity
    }
    getMass(){
        return this.mass
    }
    onCollide(event){
        const {other,our,side} = event.getEvent()
        const physOther = other.getComponent(this.getName())
        const physOur = our.getComponent(this.getName())
        const {x:vx1,y:vy1} = physOther.getVelocity()
        const {x:vx2,y:vy2} = physOur.getVelocity()
        const mass1 = physOther.getMass()
        const mass2 = physOur.getMass()
        const normal = GetNormal(side.point1,side.point2,true)  
        
        const relative = {
            x:vx2-vx1,
            y: vy2-vy1
        }
        const velAlongNormal = relative.x * normal.x + relative.y * normal.y
        if (velAlongNormal > 0 ) return
   
        const j = (-(1+0.5) * velAlongNormal) / ( 1/ mass1 + 1/mass2)
        const impulse = new Vector(j*normal.x,j*normal.y)

        const newVX2 = 1/mass2 * impulse.x
        const newVY2 = 1/mass2 * impulse.y
        const newVX = -(1/mass1*impulse.x)
        const newVY = -(1/mass1*impulse.y)
        console.log(newVX,newVY,impulse.y,normal.y)
        physOther.setVelocity(new Vector(newVX,newVY))
        physOur.setVelocity(new Vector(newVX2,newVY2))
        
    }
    push(){
        const {x,y} = this.getVelocity()
        const friction = 0.98
        const transform = this.getEntity().getComponent(new TransformComponent().getName())
        const {x:oldX,y:oldY} = transform.getPosition()
        const rotate = transform.getRotate()
        transform.setX(oldX+(x))
        transform.setY(oldY+(y))
        transform.setRotate(this.getAngularVel()+rotate)
        this.setAngularVel(this.getAngularVel()*friction)
        this.setVelocity(new Vector(x*friction,y*friction))
        if (Math.abs(x) < 0.01 ){
            this.setVelocity(new Vector(0,y*friction))
        }
        if (Math.abs(this.getAngularVel()) < 0.1){
            this.setAngularVel(0)
        }
        if (Math.abs(y) < 0.01){
            this.setVelocity(new Vector(x*friction,0))
        }

    }
    setAngularVel(angVel){
        this.angularVelocity = angVel
    }
    getAngularVel(){
        return this.angularVelocity
    }
    update(){
        this.push()
    }

}