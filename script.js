'use strict'
import { Player } from "./Prototype/NPC/Player/Player.js"
import { Turret } from "./Prototype/NPC/Turret/Turret.js"
import { Wall } from "./Prototype/Structures/Wall/Wall.js"
import { Runtime } from "./Runtime.js"
const canvas = document.querySelector(".canvas")
console.log("start",Math.random())
const runtime = new Runtime(canvas)
const player = new Player(runtime,true)
const wall = new Wall(runtime,-240,-250,500,20,0,1)
const turret = new Turret(runtime,-450,100)

