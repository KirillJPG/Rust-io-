import { TypeCollider } from "../../../../Enum/TypeCollider.js";
import { Item } from "../../Item.js";
import { MP5Sprite } from "./MP5Sprite.js";

export class MP5 extends Item{
    constructor(runtime,x,y,rotate){
        super(runtime,"MP5","MP5",x,y,64,32,1,TypeCollider["BOX"],0,0.95,"/public/items/Guns/MP5.png")
        this.addComponent(new MP5Sprite(this))
    }
}