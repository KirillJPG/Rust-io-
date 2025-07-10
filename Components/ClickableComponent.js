import {Component} from "../Component.js"
import {MouseMoveEvent} from "../Events/MouseMoveEvent.js"
import {TransformComponent} from "../Components/TransformComponent.js"
import { CheckCollideRectRect } from "../Lib/Collides/ChecksCollide.js"
import { Vector } from "../Lib/Vector2.js"
import { ClickEvent } from "../Events/ClickEvent.js"
import { ClickEntityEvent } from "../Events/ClickEntityEvent.js"
export class ClickableComponent extends Component{
    hover = false
    constructor(entity){
        super("clickable",entity)
        this.listenEvents[new MouseMoveEvent().getName()] = (event)=>{
            this.move(event)
        }
        this.listenEvents[new ClickEvent().getName()] = (event) =>{
            this.click(event)
        }
        this.addListensEntity()
    }
    checkCollide(vecMouse){
        const transform = this.getEntity().getComponent(new TransformComponent().getName())
        const {w,h} = transform.getSize()
        const {x,y} = transform.getPosition()
        const checker = CheckCollideRectRect(x,y,w,h,0)
        if (checker(vecMouse.x,vecMouse.y,1,1,0)){
            return true
        }else{
            return false
        }

    }
    click(event){
        const data = event.getEvent()
        if (this.hover){
            const data = {target:this.getEntity()}
            const event = new ClickEntityEvent(data)
            this.sendEvent(event)
        }
    }
    move(event){
        const data = event.getEvent()    
        const {x,y} = this.getCamera().getPosition()
        const xm = data.clientX
        const ym = data.clientY
        const isHover = this.checkCollide(new Vector(xm+x,ym+y))
        this.hover = isHover
    }
}