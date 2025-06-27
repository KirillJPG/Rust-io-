export function GetNormal(A,B,clockwise=true){
    const dx = Math.sign(B.x - A.x)
    const dy = Math.sign(B.x - A.y)
    
    if (clockwise){
        return {x:-dx,y:dy}
    }else{
        return {x:dx,y:-dy}
    }
}