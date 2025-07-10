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
    getOverlap(proj1,proj2){
        if (proj1.max < proj2.min){
            return proj2.min - proj1.max
        }else{
            return proj1.min - proj2.max
        }
    }
    project(points, axis){
        let min = Infinity
        let max = -Infinity
        for(const p of points){
            const proj = p.dot(axis)
            min = Math.min(min,proj)
            max = Math.max(proj,max)
        }
        return {min,max}
    }
    calculateNormal(axes,points1,points2){
        let smalletsOverlap = Infinity
        let smallestAxis = new Vector(0,0)
        for (const axis of axes){
            const normalizedAxis = axis.getNormalization()
            const proj1 = this.project(points1,normalizedAxis)
            const proj2 = this.project(points2,normalizedAxis)

            if (proj1.max < proj2.min || proj2.max < proj1.min){
                return new Vector(0,0)
            }
            const overlap = Math.min(proj1.max - proj2.min, proj2.max - proj1.min)
            if (overlap < smalletsOverlap){
                smalletsOverlap = overlap
                smallestAxis = normalizedAxis
            }            
        }
        const center1 = this.getCenter(points1) 
        const center2 = this.getCenter(points2)
        const direct = center1.minus(center2)
        if (direct.dot(smallestAxis) < 0){
            smallestAxis = new Vector(-smallestAxis.x,-smallestAxis.y)
        }
        return smallestAxis
    }
    getCenter(points){
        let cX = 0
        let cY = 0
        for (const point of points){
            cX += point.x
            cY += point.y
        }
        return new Vector(cX/points.length,cY/points.length)
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
        const axes = [...transform1.getAxes(),...transform2.getAxes()]
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
                    this.setNormal(this.calculateNormal(axes,points,points2))
                }
                return v2
            })
            return v
        })
        
        return isCollide
    }
}