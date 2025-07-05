import { Component } from "../../../Component.js";
import { PhysicsComponent } from "../../../Components/PhysicsComponent.js";
import { TransformComponent } from "../../../Components/TransformComponent.js";
import { CollideEvent } from "../../../Events/CollideEvent.js";
import { Vector } from "../../../Lib/Vector2.js";
import { EntitiesManager } from "../../../Managers/EntitiesManager.js";
import { GunTurret } from "../../NPC/Turret/GunTurret.js";
import {HitBulletEvent } from "../../../Events/HitBulletEvent.js"
export class Bullet extends Component{
    constructor(entity,rotateVelocity,gun,damage,speed=3){
        super("bullet",entity)
        this.gun = gun
        this.speed = new Vector(speed,speed)
        this.damage = damage
        this.rotateVelocity = rotateVelocity

        this.entManager =entity &&  new EntitiesManager(this.getEntity().getRuntime())
        setTimeout(()=>{
            this.destroy()
        },1000)
        this.listenEvents[new CollideEvent().getName()] = (event)=>{
            this.collideEntity(event)
        }
        this.addListensEntity()
    }
    getDamage(){
        return this.damage
    }
    destroy(){
        this.entManager.destroyEntity(this.getEntity())
    }
    collideEntity(event){
        const data =event.getEvent()
        if (data.our != this.getEntity() && data.other != this.getEntity()) return;
        if (data.other == this.gun || data.our == this.gun)return;
        const other = data.other != this ? data.our : data.other
        this.sendHitEvent(other)
        this.destroy()
    }
    sendHitEvent(other){
        const data = {other,our:this.getEntity()}
        const event = new HitBulletEvent(data)
        console.log(event)
        this.sendEvent(event)
    }
    force(){
        const phys = this.getEntity().getComponent(new PhysicsComponent().getName())
        const rotate = this.rotateVelocity
        phys.setVelocity(new Vector(this.speed.x,this.speed.y).getRotate(rotate))
    }
    update(){
        this.force()
    }
}