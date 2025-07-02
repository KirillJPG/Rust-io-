import {CheckerCollide} from "./CheckerCollide.js"
export class CircleVsCircle extends CheckerCollide{
    constructor(circle1,circle2){
        super()
        this.circle1 = circle1
        this.circle2 = circle2
    }
    checkCollide(){
        return false
    }

}