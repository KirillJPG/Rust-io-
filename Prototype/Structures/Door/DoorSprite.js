import {SpriteComponent} from "../../../Components/SpriteComponent.js"
import { GetRad } from "../../../Lib/GetRad.js"
export class DoorSprite extends SpriteComponent{
    constructor(entity){
        super(entity)
    }
    draw(x,y,w,h,rotate){
        const ctx = this.getContext()
        ctx.save()
        ctx.fillStyle = "wood"
        ctx.translate(x,y)
        ctx.rotate(GetRad(rotate))
        ctx.fillRect(0,0,w,h)
        ctx.restore()   
    }
}