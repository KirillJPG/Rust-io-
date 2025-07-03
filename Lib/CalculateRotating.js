export function CalculateRotating(vec1,vec2){
    const {x,y} = vec1.minus(vec2)
    const rotate = Math.atan2(y,x)*(180/Math.PI)
    return rotate
}