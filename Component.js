export class Component{
    constructor(name,entity){
        this.name = name
        this.entity = entity
        this.listenEvents={}
    }
    getListenEvents(){
        return this.listenEvents
    }
    callEvent(event){
        const handler = this.getListenEvents()[event.getName()]
        if (!handler) return;
        handler(event)
    }
    addListensEntity(){
        const events = Object.keys(this.getListenEvents())
        if (!this.entity) return;
        events.forEach(e=>{
            this.entity.addListenEvent(e)
        }) 
    }
    sendEvent(event){
        this.getEntity().sendEvent(event)
    }
    getContext(){
        if (!this.entity.getContext()) return null
        return this.entity.getContext() 
    }
    getCamera(){
        return this.entity.getCamera()
    }
    setCamera(camera){
        this.entity.setCamera(camera)
    }
    update(){

    }
    getName(){
        return this.name
    }
    getEntity(){
        return this.entity
    }
}