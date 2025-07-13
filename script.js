'use strict'
import { AK47 } from "./Prototype/Items/Weapon/AK47/AK47.js"
import { MP5 } from "./Prototype/Items/Weapon/MP5/MP5.js"
import { Player } from "./Prototype/NPC/Player/Player.js"
import { Turret } from "./Prototype/NPC/Turret/Turret.js"
import { Door } from "./Prototype/Structures/Door/Door.js"
import { Wall } from "./Prototype/Structures/Wall/Wall.js"
import { Runtime } from "./Runtime.js"

const canvas = document.querySelector(".canvas")
console.log("start",Math.random())
const runtime = new Runtime(canvas)
const player = new Player(runtime,50,50,true)
// const wall = new Wall(runtime,-50,-50,1,5,0,1)
// const wall2 = new Wall(runtime,150,-50,1,5,0,1)
// const wall3 = new Wall(runtime,-50,-50,5,1,0,1)
const turret = new Turret(runtime,-550,200)
// const door = new Door(runtime,0,150,0)
const mp5 = new MP5(runtime,0,0,0)
const  ak47 = new AK47(runtime,0,0,0)

