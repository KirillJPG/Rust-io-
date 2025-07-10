import { CameraPlayerComponent } from "../../../Components/CameraPlayerComponent.js";
import { CollisionComponent, TypeCollider } from "../../../Components/CollisionComponent.js";
import { HealthComponent } from "../../../Components/HealthComponent.js";
import { MoveControlComponent } from "../../../Components/MoveControlComponent.js";
import { PhysicsComponent } from "../../../Components/PhysicsComponent.js";
import { TransformComponent } from "../../../Components/TransformComponent.js";
import { Entity } from "../../../Entity.js";
import { SpritePlayer } from "./SpritePlayer.js";
import { UserInterfaceComponent } from "../../../Components/UserInterfaceComponent.js"
import { BaseInfoPlayer } from "../../../UI/BaseInfoPlayer/BaseInfoPlayer.js"
import { ContainerComponent } from "../../../Components/ContainerComponent.js";
import { QuickSlotsPlayer } from "../../../UI/BaseInfoPlayer/QuickSlotsPlayer.js";


export class Player extends Entity{
    constructor(runtime,x=0,y=0,body=true){
        super("player","player",runtime,[])
        this.addComponent(new TransformComponent(this,x,y,70,50))
        this.addComponent(new SpritePlayer(this))
        this.addComponent(new MoveControlComponent(this,1000))
        this.addComponent(new PhysicsComponent(this,"dynamic",1))
        this.addComponent(new CollisionComponent(this,TypeCollider["RECT"]))
        this.addComponent(new HealthComponent(this,100))  
        this.addComponent(new ContainerComponent(this,36))
        if (body){
            this.addComponent(new CameraPlayerComponent(this))
            runtime.setPlayer(this)
            this.addComponent(new UserInterfaceComponent(this,[
                new BaseInfoPlayer(this),
                new QuickSlotsPlayer(this)
            ]))
        }   
    }
}