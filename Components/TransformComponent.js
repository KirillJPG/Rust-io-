import { Component } from "../Component.js";
import { KeyEvent } from "../Events/KeyEvent.js"
export class TransformComponent extends Component{
    x = 0
    y = 0
    constructor(entity){
        super("TransformComponent",entity)
        this.listenEvents[new KeyEvent().getName()] = (event)=>{
            this.onKey(event)
        } 
        this.addListensEntity()    
    }
    onKey(event){

    }
    getPosition(){
        return {x,y}
    }
    setY(y){
        this.y = y
    }
    setX(x){
        this.x = x
    }
}