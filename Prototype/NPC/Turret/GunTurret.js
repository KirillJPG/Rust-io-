import { Component } from "../../../Component.js";
import { TransformComponent } from "../../../Components/TransformComponent.js";
import { Random } from "../../../Lib/Random.js";
import { TurretBullet } from "../../Damaged/Bullet/Turret/TurretBullet.js";
import { AimToPlayer } from "./AimToPlayerComponent.js";

export class GunTurret extends Component{
    isReload = false
    scatter = 15
    constructor(entity){
        super("gunTurret",entity)
        setInterval(()=>this.isReload = true,200)
    }
    shot(){
        if (!this.isReload) return
        const aim = this.getEntity().getComponent(new AimToPlayer().getName())
        const transform = this.getEntity().getComponent(new TransformComponent().getName())
        const gunRotator = this.getEntity().getComponent(new AimToPlayer().getName())
        const target = aim.getTarget()
        const rotateGun = gunRotator.getRotateGun()+Random(-this.scatter,this.scatter)
        const posTurret = transform.getPosition()
        const {w,h} = transform.getSize()
        if (!target) return
        const newBullet = new TurretBullet(this.getEntity().getRuntime(),posTurret.x+w/2,posTurret.y+h/2,rotateGun+(3.14*180/Math.PI)/4,4,this.getEntity())
        this.isReload = false
    }
    update(){
        this.shot()
    }
}