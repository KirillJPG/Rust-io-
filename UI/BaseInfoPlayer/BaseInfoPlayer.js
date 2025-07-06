import {BaseUiElement} from "../BaseUiElement.js"
import {HealthComponent} from "../../Components/HealthComponent.js"

export class BaseInfoPlayer extends BaseUiElement{
    constructor(player){
        super()
        this.player = player
        this.hpBar = document.getElementsByClassName("hp")[0]
    }
    draw(){ 
        const style = this.hpBar.style
        const hpComp = this.player.getComponent(new HealthComponent().getName())
        const hp = hpComp.getHealth()
        const maxHp = hpComp.getMaxHealth()
        const progress = (hp/maxHp*100).toFixed(0)+"%"
        const value = style.getPropertyValue("--value")
        this.hpBar.textContent = hp
        console.log(progress,value)
        if (value == progress) return;
        style.setProperty("--value",progress)
    }

}