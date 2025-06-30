export function GetNormal(A,B,clockwise=true){
    const dx = A.x-B.x
    const dy = A.y-B.y
    let normal;
    if (clockwise){
        normal = {y:-dx,x:dy}
    }else{
        normal = {y:dx,x:-dy}
    }
    const length = Math.hypot(normal.x,normal.y)
    if (length>0){
        normal.x /= length
        normal.y /= length
    }
    return normal
}