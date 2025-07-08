import {GetRad} from "./GetRad.js"
import { Vector } from "./Vector2.js"
export function GetPointsRect(x,y,w,h,rotate){
    const pointsNoRotate =  [{x,y},{x:x+w,y},{x:x+w,y:y+h},{x,y:y+h},{x,y}]
    const rotatedPoints = pointsNoRotate.map(e=>{
        const nV = new Vector(e.x,e.y)
        return nV.getRotate(rotate)
    })
    return rotatedPoints
}