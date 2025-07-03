import {StaticObject} from "../StaticObject/StaticObject.js"
import { WallSpriteComponent } from "./WallSpriteComponent.js"

export class Wall extends StaticObject{
    constructor(runtime,x=0,y=0,w=0,h=0,rotate=0,mass=1){
        super(runtime,"wall","wall",x,y,w,h,rotate,mass)
        this.addComponent(new WallSpriteComponent(this))
    }
}