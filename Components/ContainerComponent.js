import { Component } from "../Component.js";
import { PickUpItemEvent } from "../Events/PickUpItemEvent.js";
import { EntitiesManager } from "../Managers/EntitiesManager.js";

export class ContainerComponent extends Component{
    constructor(entity,slots=10){
        super("container",entity)
        if (this.getEntity()){
            this.entManager = new EntitiesManager(this.getEntity().getRuntime())
        }
        this.slots = new Array(10).fill(null).map((e,id)=>null)
        this.listenEvents[new PickUpItemEvent().getName()] = (event) =>{
            this.onPickUp(event)
        }
        this.addListensEntity()
    }
    onPickUp(event){
        const data = event.getEvent()
        const {item,pickuper} = data
        if (pickuper != this.getEntity()) return
        console.log("pickup")
        this.addItem(item)
        console.log(this.slots)
    }
    getSlots(){
        return this.slots
    }
    setSlots(slots){
        this.slots = slots
    }
    dropSlot(slotId){
        this.slots[slotId] = null
    }
    addItem(item){
        let added = false
        this.slots.forEach((e,id)=>{
            if (added) return
            if (!e) {
                this.slots[id] = item
                added = true
                this.entManager.destroyEntity(item)
            }
        })
    }
}