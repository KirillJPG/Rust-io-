import { Component } from "../Component.js";
import { Vector } from "../Lib/Vector2.js";
import { TransformComponent} from "./TransformComponent.js"
export class CameraPlayerComponent extends Component{
    position = new Vector(0,0)
    constructor(entity){
        super("CameraPlayer",entity)
        this.setCamera(this)
    }
    setX(x){
        this.position.x = x
    }
    setY(y){
        this.position.y = y
    }
    getPosition(){
        return this.position
    }
    update(){
        const transform = this.getEntity().getComponent(new TransformComponent().getName())
        const width = this.getContext().canvas.width
        const height = this.getContext().canvas.height
        const {w:widthPlayer,h:heightPlayer} = transform.getSize() 
        const {x,y} = transform.getPosition() 
        this.setX(x-width/2+widthPlayer/2)
        this.setY(y-height/2+heightPlayer/2)
    }
}