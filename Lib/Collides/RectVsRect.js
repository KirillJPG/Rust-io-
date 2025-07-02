import {CheckerCollide} from "./CheckerCollide.js"

export class RectVsRect extends CheckerCollide{
    constructor(rect1,rect2){
        super()
        this.rect1 = rect1
        this.rect2 = rect2
    }
    checkCollide(){
        
        return false
    }
}