import { SpriteComponent } from "../../../Components/SpriteComponent.js";
import {GetRad} from "../../../Lib/GetRad.js"
import {ConstructionLvlComponent} from "../../../Components/ConstructionLvlComponent.js"
export class WallSprite extends SpriteComponent{
    constructor(entity,col,row,w,h){
        super(entity)
        this.w = w
        this.h = h
        this.col = col
        this.row = row
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
        ctx.save()
        ctx.beginPath()
        ctx.translate(x,y)
        ctx.imageSmoothingEnabled = false;
        for(let xD=0; xD<this.col;xD++){
            for(let yD=0; yD<this.row;yD++){
                ctx.drawImage(imageWall,xD*this.w,yD*this.h,this.w,this.h)
            }
        }
        ctx.closePath()
        ctx.restore()
    }
}