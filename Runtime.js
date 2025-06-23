import { Entity } from "./Entity.js"
import {ClickEvent} from "./Events/ClickEvent.js"
import {KeyEvent} from "./Events/KeyEvent.js"
import {MouseMoveEvent} from "./Events/MouseMoveEvent.js"
export class Runtime{
    listEntities = []
    constructor(canvas){
        this.canvas = canvas
        this.listEntities = []
        this.ctx = canvas.getContext("2d")
        this.canvas.addEventListener("click",(e)=>this.onClick(e))
        document.addEventListener("keydown",(e)=>this.onKey(e))
        this.canvas.addEventListener("mousemove",(e)=>this.onMouseMove(e))
        setInterval(()=>this.update(),1000)
    }
    getEntities(){
        return this.listEntities
    }
    addEntity(entity){
        this.listEntities.push(entity) 
    }
    onClick(e){
        const newEvent = new ClickEvent(e)
        this.listEntities.forEach(e=>{
            e.callEvent(newEvent)
        })
    }
    onKey(e){
        const newEvent = new KeyEvent(e)
        this.listEntities.forEach(e=>{
            e.callEvent(newEvent)
        })
    }
    onMouseMove(e){
        const newEvent = new MouseMoveEvent(e)
        
        this.listEntities.forEach(e=>{
            e.callEvent(newEvent)
        })   
    }
    update(){
        this.listEntities.forEach(entity=>{
            entity.update()   
        })
    }

}