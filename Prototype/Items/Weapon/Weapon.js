import { Component } from "../../../Component.js";
import { TransformComponent } from "../../../Components/TransformComponent.js";
import { UseItemEvent } from "../../../Events/UseItemEvent.js";
import { CalculateRotating } from "../../../Lib/CalculateRotating.js";
import { Random } from "../../../Lib/Random.js";
import { Vector } from "../../../Lib/Vector2.js";
import { EntitiesManager } from "../../../Managers/EntitiesManager.js";

export class Weapon extends Component{
        constructor(entity,FabricBullet){
            super("weapon",entity)
            this.creatorBullet = FabricBullet
            if (entity){
                this.entManager = new EntitiesManager(this.getEntity().getRuntime())
            }
            this.listenEvents[new UseItemEvent().getName()] = (event) =>{
                this.onUse(event)
            }
            this.addListensEntity()
        }
        onUse(event){
            const {item,user,posClick} = event.getEvent()
            if (item != this.getEntity() || !posClick) return 
            this.shot(user,posClick)

        }
        createBullet(shoter,posClick){
            const transform = shoter.getComponent( new TransformComponent().getName())
            const posCamera = this.getCamera().getPosition()    
            const {w,h} = transform.getSize()
            const pos = transform.getPosition()
            const posCenterShoter = pos.plus(new Vector(w/2,h/2))
            const rotate = CalculateRotating(posCenterShoter,posClick.plus(posCamera))-180
            const shotPos = posCenterShoter.plus(new Vector(w+20,0).getRotate(rotate))
            const bullet = this.creatorBullet(this.getEntity().getRuntime(),shotPos.x,shotPos.y,rotate,shoter)
            return bullet   
        }   
        shot(shoter,posClick){
            const bullet = this.createBullet(shoter,posClick)
        }
}