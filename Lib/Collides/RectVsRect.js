import { TransformComponent } from "../../Components/TransformComponent.js"
import { GetPointsRect } from "../GetPointsRect.js"
import { Vector } from "../Vector2.js"
import {CheckerCollide} from "./CheckerCollide.js"
import { IntersectLineLine } from "./ChecksCollide.js"

export class RectVsRect extends CheckerCollide{
    constructor(rect1,rect2){
        super()
        this.rect1 = rect1
        this.rect2 = rect2
    }
    calculateNormal(x,y,w,h,x2,y2,w2,h2,reverce=true){
        const overlapX = Math.min(
        x + w - x2,
        x2 + w2 - x
        );
        
        const overlapY = Math.min(
            y + h - y2,
            y2 + h2 - y
        );
        if (overlapX < overlapY) {
            return new Vector( x < x2 ? -1 : 1,0 );
        } else {
            return new Vector(  0,   y < y2 ? -1 : 1 );
        }
    }
    checkCollide(){
        let isCollide = false
        const transform1 = this.rect1.getComponent(new TransformComponent().getName())
        const transform2 = this.rect2.getComponent(new TransformComponent().getName())
        const pos1 = transform1.getPosition()
        const pos2 = transform2.getPosition()
        const {w:w1,h:h1} = transform1.getSize()
        const {w:w2,h:h2} = transform2.getSize()
        const rotate1 = transform1.getRotate()
        const rotate2 = transform2.getRotate()
        const points = GetPointsRect(pos1.x,pos1.y,w1,h1,rotate1)
        const points2 = GetPointsRect(pos2.x,pos2.y,w2,h2,rotate2)
        points.reduce((pv,v)=>{
            const p1 = new Vector(pv.x,pv.y)
            const p2 = new Vector(v.x,v.y)
            const line1 = {point1:p1,point2:p2}
            points2.reduce((pv2,v2)=>{
                const p3 = new Vector(pv2.x,pv2.y)
                const p4 = new Vector(v2.x,v2.y)
                const line2 = {point1:p3,point2:p4}
                const point_test1 = IntersectLineLine(line1,line2)
                if (point_test1){
                    isCollide=true
                    this.addIntersects([point_test1])
                    this.setNormal(this.calculateNormal(pos1.x,pos1.y,w1,h1,pos2.x,pos2.y,w2,h2))
                }
                return v2
            })
            return v
        })
        
        return isCollide
    }
}