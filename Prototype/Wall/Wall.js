import {Entity} from "../../Entity.js"
import {TransformComponent} from "../../Components/TransformComponent.js"
import { WallSpriteComponent } from "./WallSpriteComponent.js"
import { CollisionComponent } from "../../Components/CollisionComponent.js"
import { PhysicsComponent } from "../../Components/PhysicsComponent.js"
export class Wall extends Entity{
    constructor(runtime,x=0,y=0,w=0,h=0,rotate=0,mass=1){
        super("wall","wall",runtime,[])
        this.addComponent(new TransformComponent(this,x,y,w,h,rotate))
        this.addComponent(new WallSpriteComponent(this))
        this.addComponent(new CollisionComponent(this,))
        this.addComponent(new PhysicsComponent(this,"static",mass))
    }
}