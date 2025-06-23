import {Random} from "./Lib/Random.js"
export class Entity{
    components = []
    listenEvents = []
    constructor(name,desc,runtime,components){
        this.name = name
        this.desc = desc
        this.runtime = runtime
        this.uid = this.generateUid() 
        this.components = components
    }
    getUid(){
        return this.uid
    }
    addListenEvent(nameEvent){
        this.listenEvents.push(nameEvent)
    }
    getComponents(){
        return this.components
    }
    addComponent(comp){
        this.components.push(comp)
    }
    generateUid(){
        const newUid = Random(0,1000000)
        if (this.checkEqualsUid(newUid)){
            return newUid
        }else{
            return this.generateUid()
        }
    }
    checkEqualsUid(uid){
        const entites = this.runtime.getEntities()
        if (!entites.lenght){
            return true
        }
        const equalsEntity = entites.filter(e=>e.getUid() == uid)
        if (equalsEntity.lenght != 0){
            return false
        }
        return true
    }
    update(){
        
    }
    callEvent(event){
        if (this.listenEvents.includes(event.getName())){
        }
    }
}