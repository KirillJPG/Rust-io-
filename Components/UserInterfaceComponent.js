import { Component } from "../Component.js";
import { BaseUiElement } from "../UI/BaseUiElement.js";

export class UserInterfaceComponent extends Component{
    constructor(entity,elements =[]){
        super("UserInterface",entity)
        this.elements = elements

    }
    update(){
        this.elements.forEach(e=>{
            if (e instanceof BaseUiElement){
                e.update()
            }
        })
    }
}