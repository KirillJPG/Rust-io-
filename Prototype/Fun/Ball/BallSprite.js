import { SpriteComponent } from "../../../Components/SpriteComponent.js";

export class BallSprite extends SpriteComponent{
    constructor(entity){
        super(entity)
    }

    draw(x,y,w,h,rotate){
        const ctx = this.getContext()
        ctx.save()
        ctx.fillStyle ="blue"
        ctx.arc(x,y,w/2,0,Math.PI*2)
        ctx.fill()
        ctx.restore()
    }
}