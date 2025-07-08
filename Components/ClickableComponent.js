import {Component} from "../Component.js"
import {MouseMoveEvent} from "../Events/MouseMoveEvent.js"
import {TransformComponent} from "../Components/TransformComponent.js"
import { CheckCollideRectRect } from "../Lib/Collides/ChecksCollide.js"
import { Vector } from "../Lib/Vector2.js"
export class ClickableComponent extends Component{
    hover = false
    constructor(entity){
        super("clickable",entity)
        this.listenEvents[new MouseMoveEvent().getName()] = (event)=>{
            this.move(event)
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
    move(event){
        const data = event.getEvent()    
        const xm = data.clientX
        const ym = data.clientY
        const isHover = this.checkCollide(new Vector(xm,ym))
        console.log(xm,ym,data,isHover)
    }
}