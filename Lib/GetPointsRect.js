import {GetRad} from "./GetRad.js"
export function GetPointsRect(x,y,w,h,rotate){
    const rad = GetRad(rotate)
    const cos = Math.cos(rad)
    const sin = Math.sin(rad)
    const pointsNoRotate =  [{x,y},{x:x+w,y},{x:x+w,y:y+h},{x,y:y+h},{x,y}]
    const rotatedPoints = pointsNoRotate.map(e=>{
        const rotatedX = e.x*cos - e.y*sin
        const rotatedY = e.x*sin + e.y*cos
        return {
            x:rotatedX,
            y:rotatedY
        }
    })
    return rotatedPoints
}