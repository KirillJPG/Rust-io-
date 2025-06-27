import { Component } from "../Component.js";
import { CollideEvent } from "../Events/CollideEvent.js";
import { Vector } from "../Lib/Vector2.js";
import { MoveControlComponent } from "./MoveControlComponent.js";
import { TransformComponent } from "./TransformComponent.js";
import {GetNormal} from "../Lib/GetNormal.js"

export class PhysicsComponent extends Component{
    type = "static"
    mass = 1
    velocity = new Vector(0,0)
    constructor(entity,type = "static",mass = 1){
        super("Physics",entity)
        this.type = type
        this.mass = mass
        this.listenEvents[new CollideEvent().getName()] = (event)=>this.onCollide(event)
        this.addListensEntity()
    }
    setVelocity(velocity){
        this.velocity = new Vector(velocity.x/this.mass,velocity.y/this.mass)
    }
    getVelocity(){
        return this.velocity
    }
    getMass(){
        return this.mass
    }
    onCollide(event){
        const {entity1,entity2,side} = event.getEvent()
        const phys1 = entity1.getComponent(this.getName())
        const phys2 = entity2.getComponent(this.getName())
        const {x:vx1,y:vy1} = phys1.getVelocity()
        const {x:vx2,y:vy2} = phys2.getVelocity()
        const mass1 = phys1.getMass()
        const mass2 = phys2.getMass()
        const transferVel = 1
        const newVx2 = vx1 * transferVel * (mass1/mass2)
        const newVy2 = vy1 * transferVel * (mass1/mass2)
        const newVx1 = vx1 * (1-transferVel)
        const newVy1 = vy1 * (1-transferVel)
        phys1.setVelocity(new Vector(newVx1,newVy1))
        phys2.setVelocity(new Vector(vx2+newVx2,vy2+newVy2))

    }
    push(){
        const {x,y} = this.getVelocity()
        const transform = this.getEntity().getComponent(new TransformComponent().getName())
        const {x:oldX,y:oldY} = transform.getPosition()
        transform.setX(oldX+(x))
        transform.setY(oldY+(y))
        this.setVelocity(new Vector(x*0.8,y*0.8))
        if (x < 0.01){
            this.setVelocity(new Vector(0,y*0.8))
        }
        if (y < 0.01){
            this.setVelocity(new Vector(x*0.8,0))
        }

    }
    update(){
        this.push()
    }

}