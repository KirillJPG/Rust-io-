import { SpriteComponent } from "../../../../Components/SpriteComponent.js"
import { GetRad } from "../../../../Lib/GetRad.js"

export class MP5Sprite extends SpriteComponent{
    constructor(entity){
        super(entity)
        this.sprite = new Image()
        this.sprite.src ="/public/items/Guns/MP5.png"
    }
    draw(x,y,w,h,rotate){
        const ctx = this.getContext()
        ctx.save()
        ctx.translate(x,y)
        ctx.rotate(GetRad(rotate))
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(this.sprite,0,0,w,h)
        ctx.restore()
    }
}