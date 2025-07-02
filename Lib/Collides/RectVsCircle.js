import {CheckerCollide} from "./CheckerCollide.js"
import {TransformComponent} from "../../Components/TransformComponent.js"
import { CheckCollidePointCircle, IntersectCircleLine } from "./ChecksCollide.js"
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
        const vecCircle = new Vector(pos2.x,pos2.y)
        const centerRect = new Vector(pos1.x+w1/2,pos1.y+h1/2)
        const test1 = IntersectCircleLine(pos2.x,pos2.y,diameter/2)
        const test2 = CheckCollidePointCircle(vecCircle,diameter/2)
        const points = GetPointsRect(pos1.x,pos1.y,w1,h1,0)
        let isCollide = false
        points.reduce((pv,v)=>{
            const points_test1 = test1(pv,v)
            if (points_test1){
                const first_point = points_test1.points[0]
                isCollide=true
                this.addIntersects(points_test1.points)
                console.log(this.calculateNormal(first_point,vecCircle))
                this.setNormal(this.calculateNormal(first_point,vecCircle))
            }
            // if (test2(pv) || test2(v)){
            //     isCollide=true
            //     this.setNormal(this.calculateNormal(pv,vecCircle))
            // }
            return v
        })
        if (isCollide) return isCollide
        return isCollide
    }
    
}