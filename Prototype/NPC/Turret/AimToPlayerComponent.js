import { Component } from "../../../Component.js";
import { TransformComponent } from "../../../Components/TransformComponent.js";
import { Vector } from "../../../Lib/Vector2.js";
import { EntitiesManager } from "../../../Managers/EntitiesManager.js";

export class AimToPlayer extends Component{
    constructor(entity){
        super("aimToPlayer",entity)
        this.eManager = new EntitiesManager(entity.getRuntime())
        this.addListensEntity()
    }
    aiming(){
        const transform = this.getEntity().getComponent(new TransformComponent().getName())
        const pos = transform.getPosition()
        const {w,h} = transform.getSize()
        const center = new Vector(pos.x+w/2,pos.y+h/2) 
        const allPlayers = this.eManager.getEntitiesByRange(center,"player",500)
        console.log(allPlayers)
    }
    update(){
        this.aiming()
    }
}