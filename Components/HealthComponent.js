import { Component } from "../Component.js"
import{HitBulletEvent} from "../Events/HitBulletEvent.js" 
import {EntitiesManager} from "../Managers/EntitiesManager.js"
import {BulletComponent} from "../Prototype/Damaged/Bullet/Bullet.js"
export class HealthComponent extends Component{
    constructor(entity,hp=100){
        super("Health",entity)
        this.hp = hp
        this.entManager = entity && new EntitiesManager(entity.getRuntime())
        this.listenEvents[new HitBulletEvent().getName()] = (event) =>{
            this.onHit(event)
        }
        this.addListensEntity()
    }
    onHit(event){
        const data = event.getEvent()
        if (data.our != this.getEntity() && data.other != this.getEntity())return
        const bullet = this.our == this.getEntity() ? data.other : data.our
        console.log(bullet)
        const damage = bullet.getComponent(new BulletComponent().getName()).getDamage() ?? 0
        this.takeDamage(damage)
    }
    takeDamage(damage){
        this.hp -= damage
        if (this.hp <= 0) {
            this.entManager.destroyEntity(this.getEntity())
        }
    }
}