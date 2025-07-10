import { GetRad } from "./GetRad.js"

export class Vector{
    x=0
    y=0
    constructor(x=0,y=0){
        
        this.x = +Number.parseFloat(x).toFixed(2)
        this.y = +Number.parseFloat(y).toFixed(2)
    }
    getPos(){
        return {x:this.x,y:this.y}
    }
    getDistance(Vec2){
        const {x:x2,y:y2} = Vec2.getPos()
        const dx = this.x-x2
        const dy = this.y-y2
        return Math.sqrt(dx*dx+dy*dy)
    }
    dot(vec2){
        return this.x*vec2.x+this.y*vec2.y 
    }
    getLength(){
        return Math.sqrt(this.x*this.x+this.y*this.y)
    }
    getNormalization(){
        return new Vector(this.x/this.getLength(),this.y/this.getLength())
    }
    minus(vec2){
        const {x:x2,y:y2} = vec2.getPos()
        return new Vector(this.x-x2,this.y-y2)
    }
    plus(vec2){
        const {x:x2,y:y2} = vec2.getPos()
        return new Vector(this.x+x2,this.y+y2)
    }
    getRotate(deg){
        const rotate = GetRad(deg)
        const cos = Math.cos(rotate)
        const sin = Math.sin(rotate)

        const x = this.x*cos-this.y*sin
        const y = this.x*sin+this.y*cos
        return new Vector(x,y)
    }
    increase(num){
        return new Vector(this.x*num,this.y*num)
    }
}