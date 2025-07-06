import { SpriteComponent } from "../../../Components/SpriteComponent.js";
import {GetRad} from "../../../Lib/GetRad.js"
export class SpritePlayer extends SpriteComponent{
    constructor(player){
        super(player)
        this.imgPlayer = new Image()
        this.imgPlayer.src = "../../../public/player/player.png"
    }
    draw(x,y,w,h,rotate){
        const ctx = this.getContext()
        ctx.fillStyle = window.getComputedStyle(document.body).getPropertyValue("--player")
        ctx.beginPath()
        ctx.save()
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(this.imgPlayer,x,y,w,h)
        ctx.closePath()
        ctx.restore()
    }
}