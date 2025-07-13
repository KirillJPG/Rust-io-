import {Entity} from "../../../../Entity.js"
import {CollisionComponent, TypeCollider} from "../../../../Components/CollisionComponent.js"
import {TransformComponent} from "../../../../Components/TransformComponent.js"
import {PhysicsComponent} from "../../../../Components/PhysicsComponent.js"
import { TurretBulletSprite } from "./TurretBulletSprite.js"
import { BulletComponent } from "../Bullet.js"
export class TurretBullet extends Entity{
    constructor(runtime,x,y,rotateVelocity,speed,gun){
        super("turret_bullet","turret_bullet",runtime)
        this.addComponent(new CollisionComponent(this,TypeCollider["CIRCLE"]))
        this.addComponent(new TransformComponent(this,x,y,5,5,0))
        this.addComponent(new PhysicsComponent(this,"dynamic",0.1,1))
        this.addComponent(new TurretBulletSprite(this))
        this.addComponent(new BulletComponent(this,rotateVelocity,gun,0,speed))
    }

}