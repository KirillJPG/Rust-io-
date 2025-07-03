import {StaticObject} from "../StaticObject/StaticObject.js"
import { WallSprite } from "./WallSprite.js"

export class Wall extends StaticObject{
    constructor(runtime,x=0,y=0,w=0,h=0,rotate=0,mass=1){
        super(runtime,"wall","wall",x,y,w,h,rotate,mass)
        this.addComponent(new WallSprite(this))
    }
}