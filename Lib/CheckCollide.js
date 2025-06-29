import { GetPointsRect } from "./GetPointsRect.js"
import { GetRad } from "./GetRad.js"

export function CheckCollidePointRect(x,y,w,h,rotate){
    return (point)=>{
        const {x:px,y:py} = point
        const [p1,p2,p3,p4] = GetPointsRect(x,y,w,h,rotate)
        if (p1.x < px && p1.y > py && p2.x > px && p2.y > py && p3.x < px && p3.y < py && p4.x > px && p4.y < py){
            return true
        } 
        return false
    } 
}
export function CheckCollidePointCircle(x,y,radius){
    return (point)=>{
        const {x:x2,y:y2} = point
        const dx = x-x2
        const dy = y-y2
        const distance = Math.hypot(dx,dy)
        if (distance < radius) {
            return true
        }
        else return false
    } 
}
export function CheckCollideCircleCircle(x,y,radius){
    return (x2,y2,radius2)=>{
        const dx = x-x2
        const dy = y-y2
        const distance = Math.hypot(dx,dy)
        if (distance < (radius2+radius)) return true
        else return false
    }
}
export function CheckCollideCircleLine(x,y,r){

    return (point1,point2)=>{
        const {x:xp,y:yp} = point1
        const {x:xp2,y:yp2}= point2
        const A = yp2 - yp
        const B = xp - xp2
        const C = xp2 * yp - xp * yp2
        const dist = Math.abs(A * x+ B * y + C) / Math.sqrt(A*A+B*B)
        if (dist > r)return false

        const dotProduct = ((x-xp)*(xp2-xp)+(y-yp)*(yp2-yp)) / ((xp2-xp)**2+(yp2-yp)**2)
        return dotProduct >=0 && dotProduct<=1
    }
}