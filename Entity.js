import {Random} from "./Lib/Random.js"
export class Entity{
    components = []
    listenEvents = []
    constructor(name,desc,runtime,components = []){
        this.name = name
        this.desc = desc
        this.runtime = runtime
        this.uid = this.generateUid() 
        this.components = components
        this.runtime.addEntity(this)
    }
    getUid(){
        return this.uid
    }
    addListenEvent(nameEvent){
        this.listenEvents.push(nameEvent)
    }
    getListenEvents(){
        return this.listenEvents
    }
    getComponents(){
        return this.components
    }
    addComponent(comp){
        if (this.getComponent(comp.getName())) return; 
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
    getContext(){
        return this.runtime.getContext()
    }
    getRuntime(){
        return this.runtime
    }
    getCamera(){
        return this.runtime.getCamera()
    }
    setCamera(camera){
        this.runtime.setCamera(camera)
    }
    update(){
        this.getComponents().forEach(e=>{
            e.update()
        })
    }
    getComponent(compName){
        const comp = this.getComponents().filter(e=>e.getName()==compName)[0]
        return comp
    }
    sendEvent(event){
        this.runtime.sendEvent(event)
    }
    callEvent(event){
        if (this.getListenEvents().includes(event.getName())){
            this.getComponents().forEach(e=>{
                e.callEvent(event)
            })
        } 
    }
}