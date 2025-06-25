import { SpriteComponent } from "../../../Components/SpriteComponent.js";

export class SpritePlayer extends SpriteComponent{
    constructor(player){
        super(player)
    }
    draw(x,y){
        const ctx = this.getContext()
        ctx.fillStyle = window.getComputedStyle(document.body).getPropertyValue("--player")
        ctx.beginPath()
        ctx.arc(x,y,30,0,Math.PI*2)
        ctx.fill()
        ctx.closePath()

    }
}