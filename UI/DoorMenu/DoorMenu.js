import {BaseUiElement} from "../BaseUiElement.js"
import {TransformComponent} from "../../Components/TransformComponent.js"
export class DoorMenu extends BaseUiElement{
    constructor(entity){
        super()
        this.entity = entity
        this.openButton = document.createElement("button")
        this.openButton.textContent = "Open"
        this.openButton.classList.add("btn","invisible")
        this.openButton.onclick = (e) => this.onOpen()
        document.body.appendChild(this.openButton)
    }
    onOpen(){
        console.log("open")
    }
    draw(){
        const vecP = this.entity.getRuntime().getPlayer().getComponent(new TransformComponent().getName()).getPosition()
        const transform = this.entity.getComponent(new TransformComponent().getName())
        const vecDoor = transform.getPosition()
        const {w,h} = transform.getSize()
        const {x:xCam,y:yCam} = this.entity.getCamera().getPosition()
        if (vecP.getDistance(vecDoor) < 200){
            this.openButton.classList.remove("invisible")
        }else{
            this.openButton.classList.add("invisible")
            return;
        }
        this.openButton.style.left = vecDoor.x-xCam+"px"
        this.openButton.style.top = vecDoor.y-yCam+"px"
    }   
}