import { SpriteComponent } from "../../../../Components/SpriteComponent.js";

export class TurretBulletSprite extends SpriteComponent{
    constructor(entity){
        super(entity)
    }
    draw(x,y,w,h,rotate){
        const ctx = this.getContext()
        ctx.save()
        ctx.translate(x,y)
        ctx.rotate(rotate)
        ctx.fillStyle = "black"
        ctx.beginPath()
        ctx.arc(0,0,5,0,Math.PI*2)
        ctx.fill()
        ctx.closePath()
        ctx.restore()
    }
}