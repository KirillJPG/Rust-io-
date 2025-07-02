import { CameraPlayerComponent } from "../../../Components/CameraPlayerComponent.js";
import { CollisionComponent, TypeCollider } from "../../../Components/CollisionComponent.js";
import { MoveControlComponent } from "../../../Components/MoveControlComponent.js";
import { PhysicsComponent } from "../../../Components/PhysicsComponent.js";
import { RotateToMouseComponent } from "../../../Components/RotateToMouseComponent.js";
import { TransformComponent } from "../../../Components/TransformComponent.js";
import { Entity } from "../../../Entity.js";
import { SpritePlayer } from "./SpritePlayer.js";
export class Player extends Entity{
    constructor(runtime){
        super("player","player",runtime,[])
        this.addComponent(new TransformComponent(this,0,0,20,50))
        this.addComponent(new SpritePlayer(this))
        this.addComponent(new MoveControlComponent(this,1000))
        this.addComponent(new PhysicsComponent(this,"dynamic",1))
        this.addComponent(new CameraPlayerComponent(this))
        this.addComponent(new CollisionComponent(this,TypeCollider["CIRCLE"]))
        this.addComponent(new RotateToMouseComponent(this))        
    }
}