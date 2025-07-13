import { TypeCollider } from "../../../../Enum/TypeCollider.js";
import { AK47BulletFabic } from "../../../Damaged/Bullet/AK/AK47Bullet.js";
import { Item } from "../../Item.js";
import { Weapon } from "../Weapon.js";
import { AK47Sprite } from "./AK47Sprite.js";


export class AK47 extends Item{
    constructor(runtime,x,y,rotate){
        super(runtime,"AK47","AK47",x,y,64,32,1,TypeCollider["BOX"],0,0.95,"/public/items/Guns/AK47.png")
        this.addComponent(new AK47Sprite(this))
        this.addComponent(new Weapon(this,AK47BulletFabic))
    }
}