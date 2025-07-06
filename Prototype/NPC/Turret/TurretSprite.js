import {SpriteComponent} from "../../../Components/SpriteComponent.js"
import { GetRad } from "../../../Lib/GetRad.js"
import { AimToPlayer } from "./AimToPlayerComponent.js"
import { GunTurret } from "./GunTurret.js"
export class TurretSprite extends SpriteComponent{
    constructor(entity){
        super(entity)
        this.gunImage = new Image()
        this.gunImage.src = "../../../public/items/Guns/MP5.png"
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
        ctx.rotate(GetRad(aimingComp.getRotateGun()+90))
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(this.gunImage,-wGun/2,-hGun/2,wGun,hGun)
        ctx.restore()
    }
}
