import {Entity} from "../../../Entity.js"
import {StaticObject} from "../../Structures/StaticObject/StaticObject.js"
import { AimToPlayer } from "./AimToPlayerComponent.js"
import { TurretSprite } from "./TurretSprite.js"
export class Turret extends StaticObject{
    constructor(runtime,x,y){
        super(runtime,"turret","turret",x,y,75,75,0,1)
        this.addComponent(new TurretSprite(this))
        this.addComponent(new AimToPlayer(this))
    }

}