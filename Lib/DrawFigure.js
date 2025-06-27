export function DrawCircle(ctx,camera,x,y){
    ctx.fillStyle = "red"
    const {x:xCam,y:yCam} = camera.getPosition() 
    ctx.beginPath()
    ctx.arc(x-xCam,y-yCam,5,0,Math.PI*2)
    ctx.fill()
    ctx.closePath()
}
export function DrawLine(ctx,camera,point1,point2,rotate){
    ctx.strokeStyle = "red"
    ctx.lineWidth = 2
    const {x:xCam,y:yCam} = camera.getPosition() 
    if (!point1) return;
    const {x,y} = point1
    const {x:x2,y:y2} = point2
    ctx.beginPath()
    ctx.moveTo(x-xCam,y-yCam)
    ctx.lineTo(x2-xCam,y2-yCam)
    ctx.stroke()
    ctx.closePath()
}