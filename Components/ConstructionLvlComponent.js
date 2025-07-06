import { Component } from "../Component.js";

export class ConstructionLvlComponent extends Component{
    lvl=1
    constructor(entity,lvl=1){
        super("construction_lvl",entity)
        this.lvl = lvl
    }
    getLvl(){
        return this.lvl
    }
    setLvl(lvl){
        this.lvl = lvl
    }
}