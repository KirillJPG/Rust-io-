import { Component } from "../Component.js";
import { CollideEvent } from "../Events/CollideEvent.js";
import { Vector } from "../Lib/Vector2.js";
import { MoveControlComponent } from "./MoveControlComponent.js";
import { TransformComponent } from "./TransformComponent.js";

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
        this.velocity = velocity
    }
    getVelocity(){
        return this.velocity
    }
    onCollide(event){
        const {entity1,entity2} = event.getEvent()
        const {vx1,vy1} = entity1.getComponent(this.getName()).getVelocity()
        const {vx2,vy2} = entity2.getComponent(this.getName()).getVelocity()
        
    }
    push(){
        const {x,y} = this.getVelocity()
        const transform = this.getEntity().getComponent(new TransformComponent().getName())
        const {x:oldX,y:oldY} = transform.getPosition()
        transform.setX(oldX+(x/this.mass))
        transform.setY(oldY+(y/this.mass))
    }
    update(){
        this.push()
    }

}