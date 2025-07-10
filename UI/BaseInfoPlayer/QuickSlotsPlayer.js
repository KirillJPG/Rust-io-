import { ContainerComponent } from "../../Components/ContainerComponent.js";
import { ItemComponent } from "../../Components/ItemComponent.js";
import { BaseUiElement } from "../BaseUiElement.js";

export class QuickSlotsPlayer extends BaseUiElement{
    constructor(player){
        super()
        this.player = player
        this.slots = document.getElementsByClassName("slot")
    }
    draw(){
        const container = this.player.getComponent(new ContainerComponent().getName())
        container.getSlots().slice(0,6).forEach((element,id)=> {
            if (!element || !this.slots[id]) return;
            const icon = element.getComponent(new ItemComponent().getName()).getIcon()
            const contentSlot = "<img src=\""+icon+"\" class=\"item-slot\"/>"
            if (this.slots[id].children[0]) return;
            this.slots[id].innerHTML = contentSlot
        });
    }
}