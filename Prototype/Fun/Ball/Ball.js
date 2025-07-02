import { CollisionComponent, TypeCollider } from "../../../Components/CollisionComponent.js";
import { PhysicsComponent } from "../../../Components/PhysicsComponent.js";
import { TransformComponent } from "../../../Components/TransformComponent.js";
import { Entity } from "../../../Entity.js";
import { BallSprite } from "./BallSprite.js";

export class Ball extends Entity{
    constructor(runtime,x,y,width,height,mass){
        super("ball","ball",runtime,[])
        this.addComponent(new TransformComponent(this,x,y,width,height,0))
        this.addComponent(new PhysicsComponent(this,"dynamic",mass,0.99))
        this.addComponent(new CollisionComponent(this,TypeCollider["CIRCLE"]))
        this.addComponent(new BallSprite(this))
    }
}