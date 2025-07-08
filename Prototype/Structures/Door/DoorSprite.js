import {SpriteComponent} from "../../../Components/SpriteComponent.js"
export class DoorSprite extends SpriteComponent{
    constructor(entity){
        super(entity)
    }
    draw(x,y,w,h,rotate){
        const ctx = this.getContext()
        ctx.save()
        ctx.fillStyle = "wood"
        ctx.fillRect(x,y,w,h)
        ctx.restore()
    }
}