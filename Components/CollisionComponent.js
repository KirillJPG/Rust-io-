import { Component } from "../Component.js";
import { CollideEvent } from "../Events/CollideEvent.js"
import { MoveEvent } from "../Events/MoveEvent.js";
import { CircleVsCircle } from "../Lib/Collides/CircleVsCircle.js";
import { RectVsCircle } from "../Lib/Collides/RectVsCircle.js";
import { RectVsRect } from "../Lib/Collides/RectVsRect.js";
import { DrawCircle, DrawLine } from "../Lib/DrawFigure.js";
import { GetPointsRect } from "../Lib/GetPointsRect.js";
import { TypeCollider } from "./CollisionComponent.js";
import { TransformComponent } from "./TransformComponent.js";
export {TypeCollider} from "../Enum/TypeCollider.js"

export class CollisionComponent extends Component{
    constructor(entity,typeBox=TypeCollider["BOX"]){
        super("Collision",entity)
        this.listenEvents[new MoveEvent().getName()] = (event) =>{
            this.onMove(event)
        } 
        this.typeBox = typeBox
        this.addListensEntity()
    }
    getType(){
        return this.typeBox
    }
    onMove(event){
        const data = event.getEvent()
        if (data.component.getEntity() == this.getEntity()) {
            return;
        }
        const entity = data.component.getEntity()

        this.StartCheck(this.getEntity(),entity)
                
    }
    StartCheck(entity1,entity2){
        const type1 = entity1.getComponent(new CollisionComponent().getName()).getType()
        const type2 = entity2.getComponent(new CollisionComponent().getName()).getType()
        let checker;
        if (type1 == type2){
            if (type1 == TypeCollider["BOX"]){
                checker = new RectVsRect(entity1,entity2)
            }
            if (type1 == TypeCollider["CIRCLE"]){
                checker = new CircleVsCircle(entity1,entity2)
            }
        }else{
            if (type1 == TypeCollider["BOX"]) checker = new RectVsCircle(entity1,entity2)
            else checker = new RectVsCircle(entity2,entity1)
        }
        const isCollide = checker.checkCollide()
        const normal = checker.getNormal()
        const points = checker.getIntersects()
        if (points?.length != 0){
            points.forEach((e)=>{
                DrawCircle(this.getContext(),this.getCamera(),e.x,e.y   )
            })
        }
        if (isCollide){
            this.sendCollideEvent(entity2,normal)
        }
    }

    sendCollideEvent(other,normal){
        const eventData = {other,our:this.getEntity(),normal}
        const newEvent = new CollideEvent(eventData)
        this.sendEvent(newEvent)
    }

    drawCollideBox(){
        const transform = this.getEntity().getComponent(new TransformComponent().getName())
        const {x,y} = transform.getPosition()
        const {w,h} = transform.getSize()

        if (this.getType() == TypeCollider["BOX"]){
            const points = GetPointsRect(x,y,w,h,0)
            points.reduce((pv,v)=>{
                DrawLine(this.getContext(),this.getCamera(),pv,v,0)
                DrawCircle(this.getContext(),this.getCamera(),v.x,v.y,5)
                return v
            })
        }else{
            DrawCircle(this.getContext(),this.getCamera(),x,y,w/2)
            DrawCircle(this.getContext(),this.getCamera(),x,y,5)
        }
    }
    update(){
        this.drawCollideBox()
    }
}