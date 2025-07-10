import { ClickableComponent } from "../../Components/ClickableComponent.js";
import { CollisionComponent, TypeCollider } from "../../Components/CollisionComponent.js";
import { ItemComponent } from "../../Components/ItemComponent.js";
import { PhysicsComponent } from "../../Components/PhysicsComponent.js";
import { TransformComponent } from "../../Components/TransformComponent.js";
import { Entity } from "../../Entity.js";

export class Item extends Entity{
    constructor(runtime,name,desc,x,y,w,h,mass,typeCollide,rotate,friction,icon){
        super(name,desc,runtime)
        this.addComponent(new ClickableComponent(this)) 
        this.addComponent(new TransformComponent(this,x,y,h,w,rotate))
        this.addComponent(new PhysicsComponent(this,"dynamic",mass,friction))
        this.addComponent(new ItemComponent(this,icon))
        this.addComponent(new CollisionComponent(this,typeCollide))
    }
}