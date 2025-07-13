import { ClickEvent } from "../Events/ClickEvent.js";
import { HoldItemEvent } from "../Events/HoldItemEvent.js";
import { MouseMoveEvent } from "../Events/MouseMoveEvent.js";
import { UseItemEvent } from "../Events/UseItemEvent.js";
import { Vector } from "../Lib/Vector2.js";
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
        this.listenEvents[new ClickEvent().getName()] = (event) =>{
            this.useItem(event)
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
    useItem(event){
        if (!this.holdItem) return
        const data = event.getEvent()
        const posClick = new Vector(data.clientX,data.clientY)
        const newData = {user:this.getEntity(),item:this.getHoldItem(),posClick}
        const newEvent = new UseItemEvent(newData)
        this.holdItem.callEvent(newEvent)
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