import { Component } from "../Component.js"
import{HitBulletEvent} from "../Events/HitBulletEvent.js" 
import {EntitiesManager} from "../Managers/EntitiesManager.js"
import {BulletComponent} from "../Prototype/Damaged/Bullet/Bullet.js"
export class HealthComponent extends Component{
    constructor(entity,hp=100,maxHp=100){
        super("Health",entity)
        this.maxHp=maxHp
        this.hp = hp
        this.entManager = entity && new EntitiesManager(entity.getRuntime())
        this.listenEvents[new HitBulletEvent().getName()] = (event) =>{
            this.onHit(event)
        }
        this.addListensEntity()
    }
    getMaxHealth(){
        return this.maxHp
    }
    onHit(event){
        const data = event.getEvent()
        if (data.our != this.getEntity() && data.other != this.getEntity())return
        const bullet = this.our == this.getEntity() ? data.other : data.our
        const damage = bullet.getComponent(new BulletComponent().getName()).getDamage() ?? 0
        this.takeDamage(damage)
    }
    getHealth(){
        return this.hp
    }
    takeDamage(damage){
        this.hp -= damage
        if (this.hp <= 0) {
            this.entManager.destroyEntity(this.getEntity())
        }
    }
}