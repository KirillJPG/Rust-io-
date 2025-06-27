import { Entity } from "./Entity.js"
import {ClickEvent} from "./Events/ClickEvent.js"
import {KeyEvent} from "./Events/KeyEvent.js"
import {KeyUpEvent} from "./Events/KeyUpEvent.js"
import {MouseMoveEvent} from "./Events/MouseMoveEvent.js"
export class Runtime{
    listEntities = []
    constructor(canvas,camera=null){
        this.canvas = canvas
        this.camera = camera
        this.listEntities = []
        this.ctx = canvas.getContext("2d")
        this.canvas.addEventListener("click",(e)=>this.onClick(e))
        document.addEventListener("keydown",(e)=>this.onKey(e))
        document.addEventListener("keyup",(e)=>this.onKeyUp(e))
        this.canvas.addEventListener("mousemove",(e)=>this.onMouseMove(e))
        setInterval(()=>this.update(),1)
        this.resize()
    }
    getCamera(){
        return this.camera
    }
    setCamera(camera){
        this.camera = camera
    }
    resize(){
        const bound = this.canvas.getBoundingClientRect()
        const width = bound.width
        const height = bound.height 
        this.canvas.width = +width
        this.canvas.height = +height
    } 
    getEntities(){
        return this.listEntities
    }
    addEntity(entity){
        this.listEntities.push(entity) 
    }
    onClick(e){
        const newEvent = new ClickEvent(e)
        this.sendEvent(newEvent) 
    }
    onKeyUp(e){
        const newEvent = new KeyUpEvent(e)
        this.sendEvent(newEvent) 
    }
    onKey(e){
        const newEvent = new KeyEvent(e)
        this.sendEvent(newEvent) 
    }
    sendEvent(event){
        this.listEntities.forEach(e=>{
            e.callEvent(event)
        })
    }
    getContext(){
        return this.ctx
    }
    onMouseMove(e){
        const newEvent = new MouseMoveEvent(e)
        this.sendEvent(newEvent) 
    }
    fillBg(){
        this.ctx.fillStyle = window.getComputedStyle(document.body).getPropertyValue("--grass")
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
    }
    update(){
        this.fillBg()
        this.listEntities.forEach(entity=>{
            entity.update()   
        })
    }
    
}