import { TransformComponent } from "../../Components/TransformComponent.js"
import {CheckerCollide} from "./CheckerCollide.js"
import { CheckCollideCircleCircle } from "./ChecksCollide.js"
export class CircleVsCircle extends CheckerCollide{
    constructor(circle1,circle2){
        super()
        this.circle1 = circle1
        this.circle2 = circle2
    }
    calculateNormal(vec1,vec2){
        const normal = vec1.minus(vec2).getNormalization()
        return normal
    }
    checkCollide(){
        const transform1 = this.circle1.getComponent(new TransformComponent().getName()) 
        const transform2 = this.circle2.getComponent(new TransformComponent().getName()) 
        const vec1 = transform1.getPosition()
        const vec2 = transform2.getPosition()
        const {w:diametr1} = transform1.getSize()
        const {w:diametr2} = transform2.getSize()
        const test = CheckCollideCircleCircle(vec1,diametr1/2)
        if (test(vec2,diametr2/2)){
            this.setNormal(this.calculateNormal(vec1,vec2))
            return true
        }
        return false
    }

}