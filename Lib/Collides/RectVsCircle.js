import {CheckerCollide} from "./CheckerCollide.js"
import {TransformComponent} from "../../Components/TransformComponent.js"
import { CheckCollidePointCircle, CheckCollideRectRect, IntersectCircleLine } from "./ChecksCollide.js"
import {GetPointsRect} from "../../Lib/GetPointsRect.js"
import { Vector } from "../Vector2.js"
export class RectVsCircle extends CheckerCollide{
    constructor(rect,circle){
        super()
        this.rect = rect
        this.circle = circle
        this.normal = new Vector(0,0)
        this.intersects = []
    }

    checkCollide(){
        const transform1 = this.rect.getComponent(new TransformComponent().getName())
        const transform2 = this.circle.getComponent(new TransformComponent().getName())
        const pos1 = transform1.getPosition()
        const pos2 = transform2.getPosition()
        const {w:w1,h:h1} = transform1.getSize()
        const {w:diameter} = transform2.getSize()
        const rotate = transform1.getRotate()
        const vecCircle = new Vector(pos2.x,pos2.y)
        const test1 = IntersectCircleLine(pos2.x,pos2.y,diameter/2)
        const test2 = CheckCollideRectRect(pos1.x,pos1.y,w1,h1,rotate)
        const points = GetPointsRect(pos1.x,pos1.y,w1,h1,rotate)
        let isCollide = false
        if (test2(pos2.x,pos2.y,1,1,0)){
            this.addIntersects([pos2])
            isCollide= true
        }
        points.reduce((pv,v)=>{
            const points_test1 = test1(pv,v)
            if (points_test1){
                isCollide=true
                this.addIntersects(points_test1.points)
            }
            return v
        })
        let min_point = this.getMinDistanceIntersects(vecCircle)
        if ( min_point ) this.setNormal(this.calculateNormal(min_point,vecCircle))
        return isCollide
    }
    
}