import { SpriteComponent } from "../../Components/SpriteComponent.js";

export class WallSpriteComponent extends SpriteComponent{
    constructor(entity){
        super(entity)
    }
    draw(x,y,w,h){
        const ctx = this.getContext()
        ctx.beginPath()
        ctx.fillStyle = window.getComputedStyle(document.body).getPropertyValue("--wall")
        ctx.fillRect(x,y,w,h)
        ctx.closePath()
    }
}