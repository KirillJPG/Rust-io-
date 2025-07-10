import {TransformComponent} from "../Components/TransformComponent.js"

export class EntitiesManager{
    constructor(runtime){
        this.runtime = runtime
    }
    getEntities(){
        return this.runtime.getEntities()
    }
    getEntitiesByName(name){
        return this.runtime.getEntities().filter(e=>e.name==name || name == "")
    }
    getEntitiesByRange(vec,name="",range=0){
        const allEntities = this.getEntitiesByName(name)
        const filteredEntities = allEntities.filter(e=>{
            const vecEnt =  e.getComponent(new TransformComponent().getName()).getPosition()
            if ( vecEnt.getDistance(vec) < range) return true
            return false
        })
        return filteredEntities

    }
    destroyEntity(entity){
        this.runtime.removeEntity(entity)
    }
    addEntity(entity){
        this.runtime.addEntity(entity)
    }

}