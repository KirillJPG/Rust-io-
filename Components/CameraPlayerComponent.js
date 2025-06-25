import { Component } from "../Component.js";
import { TransformComponent} from "./TransformComponent.js"
export class CameraPlayerComponent extends Component{
    x=0
    y=0
    constructor(entity){
        super("CameraPlayer",entity)
        this.setCamera(this)
    }
    setX(x){
        this.x=x
    }
    setY(y){
        this.y=y
    }
    getPosition(){
        const x = this.x
        const y = this.y
        return {x,y}
    }
    update(){
        const transform = this.getEntity().getComponent(new TransformComponent().getName())
        const width = this.getContext().canvas.width
        const height = this.getContext().canvas.height
        const {w:widthPlayer,h:heightPlayer} = transform.getSize() 
        const {x,y} = transform.getPosition() 
        this.setX(x-width/2-widthPlayer/2)
        this.setY(y-height/2-heightPlayer/2)
    }
}