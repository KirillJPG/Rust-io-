import { GetRad } from "./GetRad.js                                                                 "

export function DrawCircle(ctx,camera,x,y,radius=5){
    ctx.strokeStyle = "red"
    ctx.lineWidth = 2
    const {x:xCam,y:yCam} = camera.getPosition() 
    ctx.beginPath()
    ctx.arc(x-xCam,y-yCam,radius,0,Math.PI*2)
    ctx.stroke()
    ctx.closePath()
}
export function DrawLine(ctx,camera,point1,point2,rotate){
    ctx.save()
    ctx.strokeStyle = "red"
    ctx.lineWidth = 2
    const {x:xCam,y:yCam} = camera.getPosition() 
    const {x,y} = point1
    const {x:x2,y:y2} = point2
    ctx.beginPath()
    ctx.moveTo(x-xCam,y-yCam)
    ctx.lineTo(x2-xCam,y2-yCam)
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
}
