import {SpriteComponent} from "../../../Components/SpriteComponent.js"
import { GetRad } from "../../../Lib/GetRad.js"
import { AimToPlayer } from "./AimToPlayerComponent.js"
import { GunTurret } from "./GunTurret.js"
export class TurretSprite extends SpriteComponent{
    constructor(entity){
        super(entity)
    }
    draw(x,y,w,h,rotate){
        const gun = this.getEntity().getComponent(new GunTurret().getName())
        const {wGun,hGun} =gun.getSize()
        const aimingComp = this.getEntity().getComponent(new AimToPlayer().getName())

        const ctx = this.getContext()
        ctx.save()
        ctx.fillStyle = window.getComputedStyle(document.body).getPropertyValue("--turret")
        ctx.fillRect(x,y,w,h)
        ctx.translate(x+w/2,y+h/2)  
        ctx.rotate(GetRad(aimingComp.getRotateGun()))
        ctx.fillStyle = window.getComputedStyle(document.body).getPropertyValue("--turretGun")
        ctx.fillRect(-wGun/2,0,wGun,hGun)
        ctx.fillStyle = "black"
        ctx.fillRect(-wGun/2,hGun-4,wGun,1)
        ctx.fillRect(-wGun/2,hGun-8,wGun,1)
        ctx.fillRect(-wGun/2,hGun-12,wGun,1)
        ctx.fillRect(-wGun/2,hGun-16,wGun,1)
        ctx.restore()
    }
}
