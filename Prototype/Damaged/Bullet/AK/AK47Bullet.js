import {Entity} from "../../../../Entity.js"
import {CollisionComponent, TypeCollider} from "../../../../Components/CollisionComponent.js"
import {TransformComponent} from "../../../../Components/TransformComponent.js"
import {PhysicsComponent} from "../../../../Components/PhysicsComponent.js"
import { AK47BulletSprite } from "./AK47BulletSprite.js"
import { BulletComponent } from "../Bullet.js"

export function AK47BulletFabic(runtime,x,y,rotateVelocity,gun){
    const bullet =new AK47Bullet(runtime,x,y,rotateVelocity,5,gun) 
    return bullet 
}
export class AK47Bullet extends Entity{
    constructor(runtime,x,y,rotateVelocity,speed,gun){
        super("ak47_bullet","ak47_bullet",runtime)
        this.addComponent(new CollisionComponent(this,TypeCollider["BOX"]))
        this.addComponent(new TransformComponent(this,x,y,12,30,rotateVelocity))
        this.addComponent(new PhysicsComponent(this,"dynamic",0.1,1))
        this.addComponent(new AK47BulletSprite(this))
        this.addComponent(new BulletComponent(this,rotateVelocity,gun,40,speed))
    }
}