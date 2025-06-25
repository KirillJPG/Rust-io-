import {Entity} from "../../Entity.js"
import {TransformComponent} from "../../Components/TransformComponent.js"
import { WallSpriteComponent } from "./WallSpriteComponent.js"
export class Wall extends Entity{
    constructor(runtime){
        super("wall","wall",runtime,[])
        this.addComponent(new TransformComponent(this,0,0,100,100))
        this.addComponent(new WallSpriteComponent(this))
    }
}