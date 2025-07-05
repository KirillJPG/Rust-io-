import { Component } from "../../../Component.js";
import { TransformComponent } from "../../../Components/TransformComponent.js";
import { CalculateRotating } from "../../../Lib/CalculateRotating.js";
import { Vector } from "../../../Lib/Vector2.js";
import { EntitiesManager } from "../../../Managers/EntitiesManager.js";

export class AimToPlayer extends Component{
    rotateGun = 0
    target = null
    constructor(entity){
        super("aimToPlayer",entity)
        if (entity){
            this.eManager = new EntitiesManager(entity.getRuntime())
        }
        this.addListensEntity()
    }
    aiming(){
        const transform = this.getEntity().getComponent(new TransformComponent().getName())
        const pos = transform.getPosition()
        const {w,h} = transform.getSize()
        const center = new Vector(pos.x+w/2,pos.y+h/2) 
        const allPlayers = this.eManager.getEntitiesByRange(center,"player",500)
        if (!allPlayers.length) {
            this.setTarget(null)
            return;
        }
        const firstPlayerTransform = allPlayers[0].getComponent(new TransformComponent().getName())
        const cameraPos = this.getCamera().getPosition()
        const posPlayer = firstPlayerTransform.getPosition().minus(cameraPos)
        
        const rotate = CalculateRotating(center.minus(cameraPos),posPlayer)+(3.14*180/Math.PI)/2
        this.setRotateGun(rotate)
        this.setTarget(allPlayers[0])
    }
    update(){
        this.aiming()
    }
    getTarget(){
        return this.target
    }
    setTarget(target){
        this.target = target
    }
    getRotateGun(){
        return this.rotateGun
    }
    setRotateGun(rotate){
        this.rotateGun = rotate
    }
}