import { ConstructionLvlComponent } from "../../../Components/ConstructionLvlComponent.js"
import {StaticObject} from "../StaticObject/StaticObject.js"
import { WallSprite } from "./WallSprite.js"

export class Wall extends StaticObject{
    constructor(runtime,x=0,y=0,col=1,row=1,rotate=0,mass=1){
        super(runtime,"wall","wall",x,y,row*50,col*50,rotate,mass)
        this.addComponent(new WallSprite(this,col,row,50,50))
        this.addComponent(new ConstructionLvlComponent(this,3))
    }
}