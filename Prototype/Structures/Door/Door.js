import { TransformComponent } from "../../../Components/TransformComponent.js"
import { PhysicsComponent } from "../../../Components/PhysicsComponent.js"
import { CollisionComponent, TypeCollider } from "../../../Components/CollisionComponent.js"
import { UserInterfaceComponent } from "../../../Components/UserInterfaceComponent.js"
import {Entity} from "../../../Entity.js"
import { DoorSprite } from "./DoorSprite.js"
import { DoorMenu } from "../../../UI/DoorMenu/DoorMenu.js"
import { DoorComponent } from "./DoorComponent.js"
export class Door extends Entity{
    constructor(runtime,x,y,rotate= 0){
        super("door","door",runtime)
        this.addComponent(new TransformComponent(this,x,y,50,150,rotate))
        this.addComponent(new PhysicsComponent(this,"static",1,0))  
        this.addComponent(new DoorSprite(this))
        this.addComponent(new CollisionComponent(this,TypeCollider["BOX"]))
        this.addComponent(new UserInterfaceComponent(this,[
            new DoorMenu(this)
        ]))
        this.addComponent(new DoorComponent(this))
    }
}