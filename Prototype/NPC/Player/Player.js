import { CameraPlayerComponent } from "../../../Components/CameraPlayerComponent.js";
import { MoveControlComponent } from "../../../Components/MoveControlComponent.js";
import { TransformComponent } from "../../../Components/TransformComponent.js";
import { Entity } from "../../../Entity.js";
import { SpritePlayer } from "./SpritePlayer.js";
export class Player extends Entity{
    constructor(runtime){
        super("player","player",runtime,[])
        this.addComponent(new TransformComponent(this,100,100,50,50))
        this.addComponent(new SpritePlayer(this))
        this.addComponent(new MoveControlComponent(this))
        this.addComponent(new CameraPlayerComponent(this))
    }
}