import { GetRad } from "./GetRad.js"

export class Vector{
    x=0
    y=0
    constructor(x=0,y=0){
        this.x = x
        this.y = y
    }
    getPos(){
        return {x:this.x,y:this.y}
    }
    getDistance(Vec2){
        const dx = this.x-Vec2.x
        const dy = this.y-Vec2.y
        return Math.sqrt(dx*dx+dy*dy)
    }
    getLength(){
        return Math.sqrt(this.x*this.x+this.y*this.y)
    }
    getNormalization(){
        return new Vector(this.x/this.getLength(),this.y/this.getLength())
    }
    minus(vec2){
        return new Vector(this.x-vec2.x,this.y-vec2.y)
    }
    plus(vec2){
        return new Vector(this.x+vec2.x,this.y+vec2.y)
    }
    getRotate(deg){
        const rotate = GetRad(deg)
        const cos = Math.cos(rotate)
        const sin = Math.sin(rotate)

        const x = this.x*cos+this.y*sin
        const y = -this.x*sin+this.y*cos
        return new Vector(x,y)
    }
    increase(num){
        return new Vector(this.x*num,this.y*num)
    }
}