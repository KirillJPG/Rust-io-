import { SpriteComponent } from "../../../Components/SpriteComponent.js";
import {GetRad} from "../../../Lib/GetRad.js"
export class SpritePlayer extends SpriteComponent{
    constructor(player){
        super(player)
    }
    draw(x,y,w,h,rotate){
        const ctx = this.getContext()
        ctx.fillStyle = window.getComputedStyle(document.body).getPropertyValue("--player")
        ctx.beginPath()
        ctx.save()
        if (rotate){
            let rad = GetRad(rotate)
            ctx.translate(x,y)
            ctx.rotate(rad)
            ctx.arc(0,0,w/2,0,Math.PI*2)
            ctx.fill()
            ctx.fillStyle="black"
            ctx.lineTo(100,0)
            ctx.stroke()
            ctx.fillText("player",0,0)
        }else{
            ctx.arc(x,y,w/2,0,Math.PI*2)
            ctx.fill()
            ctx.fillStyle="black"
            ctx.fillText("player",x,y)
        }
        ctx.closePath()
        ctx.restore()
    }
}