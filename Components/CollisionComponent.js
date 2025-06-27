import { Component } from "../Component.js";
import { CollideEvent } from "../Events/CollideEvent.js"
import { MoveEvent } from "../Events/MoveEvent.js";
import { CheckCollideCircleCircle, CheckCollideCircleLine, CheckCollidePointCircle, CheckCollidePointRect } from "../Lib/CheckCollide.js";
import { TransformComponent } from "./TransformComponent.js";
import {GetPointsRect} from "../Lib/GetPointsRect.js"
import {DrawCircle, DrawLine} from "../Lib/DrawFigure.js"

export class CollisionComponent extends Component{
    constructor(entity,type="rect"){
        super("Collision",entity)
        this.listenEvents[new MoveEvent().getName()] = (event) =>{
            this.onMove(event)
        } 
        this.type = type
        this.addListensEntity()
    }
    getType(){
        return this.type
    }
    onMove(event){
        const data = event.getEvent()
        if (data.component.getEntity() == this.getEntity()) {
            return;
        }
        const collisionMover = data.component.getEntity().getComponent(new CollisionComponent().getName()) 
        const collisionType = collisionMover.getType()
        if (collisionType == "rect"){
            this.checkCollideWithRect(data)
        }else if(collisionType == "circle"){
            this.checkCollideWithCircle(data)
        } 
    }
    checkCollideWithRect(data){
        const transform =this.getEntity().getComponent(new TransformComponent().getName()) 
        const type = this.getEntity().getComponent(new CollisionComponent().getName()).getType()
        const {x,y} = transform.getPosition()
        const rotate = transform.getRotate()
        const {w,h} = transform.getSize()

    }
    checkCollideWithCircle(data){
        const transform = this.getEntity().getComponent(new TransformComponent().getName()) 
        const type = this.getEntity().getComponent(new CollisionComponent().getName()).getType() 
        const {x,y} = transform.getPosition()
        const rotate = transform.getRotate()
        const {w,h} = transform.getSize()
        if (type == "rect"){
            const points = GetPointsRect(x,y,w,h,rotate)
            const checker = CheckCollideCircleLine(data.newPosX,data.newPosY,data.w/2)
            points.reduce((pv,v)=>{
                DrawLine(this.getContext(),this.getCamera(),pv,v)
                if (checker(pv,v)){
                    this.sendCollideEvent(data,{point1:pv,point2:v})
                }
                return v
            })
        }
    }
    sendCollideEvent(event,side){
        const entity1 = event.component.getEntity() 
        const eventData = {entity1,entity2:this.getEntity(),side}
        const newEvent = new CollideEvent(eventData)
        this.sendEvent(newEvent)
    }
    draw(x,y,w,h,rotate){
        const points = GetPointsRect(x,y,w,h,rotate)
        points.reduce((pv,v)=>{
            DrawLine(this.getContext(),this.getCamera(),pv,v,rotate)
            return v
        })
    }
    update(){
        const type = this.getEntity().getComponent(new CollisionComponent().getName()).getType()
        if(type == "rect"){
            const transform =this.getEntity().getComponent(new TransformComponent().getName()) 
            const {x,y} = transform.getPosition()
            const rotate = transform.getRotate()
            const {w,h} = transform.getSize()
            this.draw(x,y,w,h,rotate)
        }
    }
}