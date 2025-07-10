import { Item } from "../../Item.js";
import { MP5Sprite } from "./MP5Sprite.js";

export class MP5 extends Item{
    constructor(runtime,x,y,rotate){
        super(runtime,"MP5","MP5",x,y,rotate)
        this.addComponent(new MP5Sprite(this))
    }
}