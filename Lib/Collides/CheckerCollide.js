import { Vector } from "../Vector2.js";

export class CheckerCollide{
    normal = null;
    intersects = []
    checkCollide(){
        return false
    }
    calculateNormal(vec1,vec2,reverce=true){
        const distance = vec1.minus(vec2)
        const normalize = distance.getNormalization()
        return reverce ?  new Vector(normalize.x,normalize.y) : new Vector(normalize.x,normalize.y) 
    }
    getNormal(){
        return this.normal
    }
    setNormal(normal){
        this.normal = normal
    }
    addIntersects(points){
        this.intersects = [...this.intersects,...points]
    }
    setIntersects(intersects){
        this.intersects = intersects
    }
    getIntersects(){
        return this.intersects
    }
    getMinDistanceIntersects(vec){
        let min;
        this.intersects.forEach((e)=>{
            if (!min) min = e
            const dist = vec.getDistance(e)
            if (dist < min){
                min = e
            }
        })
        return min
    }
}