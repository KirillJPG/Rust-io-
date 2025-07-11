import { HoldItemEvent } from "../Events/HoldItemEvent.js";
import { ContainerComponent } from "./ContainerComponent.js";
import { SpriteComponent } from "./SpriteComponent.js";
import { TransformComponent } from "./TransformComponent.js";

export class ItemHandComponent extends SpriteComponent{
    constructor(entity){
        super(entity,"item-hand")
        this.holdItem = null
        this.listenEvents[new HoldItemEvent().getName()] = (event) =>{
            this.onHold(event)
        }
        this.addListensEntity()
    }
    onHold(event){
        const {holder,idSlot} = event.getEvent()
        if (holder != this.getEntity()) return
        const container = holder.getComponent(new ContainerComponent().getName())
        const slot = container.getSlot(idSlot)
        this.setHoldItem(slot)
    }
    draw(x,y,w,h,rotate){
        if (!this.holdItem) return;
        const {w:wItem,h:hItem} = this.holdItem.getComponent(new TransformComponent().getName()).getSize()
        const drawItem = this.holdItem.getComponent(new SpriteComponent().getName())
        drawItem.draw(x+w/2-wItem/2,y+h/2,wItem,hItem,rotate)       
    }
    getHoldItem(){
        return this.holdItem
    }
    setHoldItem(item){
        this.holdItem = item
    }
}