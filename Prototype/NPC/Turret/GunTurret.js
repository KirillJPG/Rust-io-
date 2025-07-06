import { Component } from "../../../Component.js";
import { TransformComponent } from "../../../Components/TransformComponent.js";
import { Random } from "../../../Lib/Random.js";
import { Vector } from "../../../Lib/Vector2.js";
import { TurretBullet } from "../../Damaged/Bullet/Turret/TurretBullet.js";
import { AimToPlayer } from "./AimToPlayerComponent.js";

export class GunTurret extends Component{
    isReload = false
    scatter = 10
    wGun = 100
    hGun = 40
    constructor(entity){
        super("gunTurret",entity)
        setInterval(()=>this.isReload = true,100)
    }
    getSize(){
        return {wGun:this.wGun,hGun:this.hGun}
    }
    shot(){
        if (!this.isReload) return
        const aim = this.getEntity().getComponent(new AimToPlayer().getName())
        const transform = this.getEntity().getComponent(new TransformComponent().getName())
        const gunRotator = this.getEntity().getComponent(new AimToPlayer().getName())
        const target = aim.getTarget()
        const rotateGun = gunRotator.getRotateGun()+Random(-this.scatter,this.scatter)+(3.14*180/Math.PI)/4
        const posTurret = transform.getPosition()
        const {w,h} = transform.getSize()
        const gunPos = new Vector(w,h).getRotate(rotateGun)
        if (!target) return
        const newBullet = new TurretBullet(this.getEntity().getRuntime(),posTurret.x+w/2+gunPos.x,posTurret.y+h/2+gunPos.y,rotateGun,4,this.getEntity())
        this.isReload = false
    }
    update(){
        this.shot()
    }
}