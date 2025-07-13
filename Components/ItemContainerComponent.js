import { Component } from "../Component.js";
import { TransformComponent } from "./TransformComponent.js";

export class ItemContainerComponent extends Component{
    constructor(entity,container){
        super("item_container",entity)
        this.container = container
        this.addListensEntity()

    }
    update(){
        const transformContainer = this.container.getComponent(new TransformComponent().getName())
        const itemContainer = this.getEntity().getComponent(new TransformComponent().getName())
        const pos = transformContainer.getPosition()
        itemContainer.setX(pos.x)
        itemContainer.setY(pos.y)
    }

}