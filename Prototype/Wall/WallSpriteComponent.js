import { SpriteComponent } from "../../Components/SpriteComponent.js";
import {GetRad} from "../../Lib/GetRad.js"
export class WallSpriteComponent extends SpriteComponent{
    constructor(entity){
        super(entity)
    }
    draw(x,y,w,h,rotate){
        const ctx = this.getContext()
        ctx.fillStyle = window.getComputedStyle(document.body).getPropertyValue("--wall")
        let rad = 0
        ctx.save()
        ctx.beginPath()
        if (rotate){
            rad = GetRad(rotate)
            ctx.translate(x,y)
            ctx.rotate(rad)
            ctx.fillRect(0,0,w,h)
        }else{
            ctx.fillRect(x,y,w,h)
        } 
        ctx.closePath()
        ctx.restore()
    }
}