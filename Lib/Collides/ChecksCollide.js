import { GetPointsRect } from "../GetPointsRect.js"
import { GetRad } from "../GetRad.js"
import { Vector } from "../Vector2.js"


export function CheckCollidePointCircle(vec1,radius){
    return (vec2)=>{
        const distance = vec1.getDistance(vec2)
        if (distance < radius) {
            return true
        }
        else return false
    } 
}
export function CheckCollideRectRect(x,y,w,h,rotate){
    return (x2,y2,w2,h2,rotate2)=>{
        if (x+w<x2 || x> x2+w2)return false
        if (y+h<y2 || y> y2+h2)return false
        return true
    }
}
export function CheckCollideCircleCircle(vec1,radius){
    return (vec2,radius2)=>{
        const distance = vec1.getDistance(vec2)
        if (distance < (radius2+radius)) return true
        else return false
    }
}
export function IntersectCircleLine(cx,cy,radius){
    return (point1,point2)=>{

        const {x: x1, y: y1} = point1;
        const {x: x2, y: y2} = point2;
        
        const dx = x2 - x1;
        const dy = y2 - y1;
        
        const fx = x1 - cx;
        const fy = y1 - cy;
        
        const a = dx * dx + dy * dy;
        const b = 2 * (fx * dx + fy * dy);
        const c = (fx * fx + fy * fy) - radius * radius;
        
        let discriminant = b * b - 4 * a * c;
        
        if (discriminant < 0) return null; 
        
        discriminant = Math.sqrt(discriminant);
        const t1 = (-b - discriminant) / (2 * a);
        const t2 = (-b + discriminant) / (2 * a);
        
        const intersections = [];
        
        if (t1 >= 0 && t1 <= 1) {
            intersections.push(new Vector(
                x1 + t1 * dx,
                y1 + t1 * dy
            ));
        }
        
        if (t2 >= 0 && t2 <= 1) {
            intersections.push(new Vector(
                x1 + t2 * dx,
                y1 + t2 * dy
            ));
        }
        
        if (intersections.length === 0) {
            return null;
        }
        
        return {
            points:intersections
        };

    }
}
export function IntersectLineLine(line1,line2){ 
    const {point1:p1,point2:p2} = line1
    const {point1:p3,point2:p4} = line2
    if (p1.getDistance(p2)==0 || p3.getDistance(p4) == 0) return false
    const denominator = ((p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y))
    if (denominator == 0 ) return false

    let ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denominator
    let ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denominator

    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return false
    const x1 = p1.x
    const y1 = p1.y
    const x2 = p2.x
    const y2 = p2.y
    let x = x1 + ua * (x2 - x1)
    let y = y1 + ua * (y2 - y1)

    return new Vector(x,y)
}