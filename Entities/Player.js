import { TransformComponent } from "../Components/TransformComponent.js";
import { Entity } from "../Entity.js";

export class Player extends Entity{
    constructor(runtime){
        super("player","player",runtime,[])
        this.addComponent(new TransformComponent(this))
    }
}