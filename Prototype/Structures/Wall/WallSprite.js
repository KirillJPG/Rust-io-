import { SpriteComponent } from "../../../Components/SpriteComponent.js";
import {GetRad} from "../../../Lib/GetRad.js"
import {ConstructionLvlComponent} from "../../../Components/ConstructionLvlComponent.js"
export class WallSprite extends SpriteComponent{
    constructor(entity){
        super(entity)
    }
    getTextureLvl(){
        const lvlWall = this.getEntity().getComponent(new ConstructionLvlComponent().getName()).getLvl()
        let img = new Image()
        let src = ''
        switch(lvlWall){
            case 1:
                src = "../../../public/textures/wall/wood.png"
                break
            case 2:
                src = "../../../public/textures/wall/stone.png"
                break
            case 3:
                src = "../../../public/textures/wall/steel.png"
                break
            case 4:
                src = "../../../public/textures/wall/hqm.png"
                break
            default:
                src = "../../../public/textures/wall/wood.png"
                break
        }
        img.src = src
        return img
    }
    draw(x,y,w,h,rotate){
        const imageWall = this.getTextureLvl()
        const ctx = this.getContext()
        const pattern = ctx.createPattern(imageWall,"repeat")
        ctx.fillStyle = pattern
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