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
        events.forEach(e=>{
            this.entity.addListenEvent(e)
        }) 
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