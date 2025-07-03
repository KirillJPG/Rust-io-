import {Entity} from "../../../Entity.js"
import {TransformComponent} from "../../../Components/TransformComponent.js"
import { CollisionComponent } from "../../../Components/CollisionComponent.js"
import { PhysicsComponent } from "../../../Components/PhysicsComponent.js"
export class StaticObject extends Entity{
    constructor(runtime,name="static",desc="static",x=0,y=0,w=0,h=0,rotate=0,mass=1){
        super(name,desc,runtime,[])
        this.addComponent(new TransformComponent(this,x,y,w,h,rotate))
        this.addComponent(new CollisionComponent(this,))
        this.addComponent(new PhysicsComponent(this,"static",mass))
    }
}