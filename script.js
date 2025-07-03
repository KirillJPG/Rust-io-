'use strict'
import { Player } from "./Prototype/NPC/Player/Player.js"
import { Turret } from "./Prototype/NPC/Turret/Turret.js"
import { Wall } from "./Prototype/Structures/Wall/Wall.js"
import { Runtime } from "./Runtime.js"
const canvas = document.querySelector(".canvas")
console.log("start")
const runtime = new Runtime(canvas)
const player = new Player(runtime)
const wall = new Wall(runtime,-270,-250,500,20,0,100)
const turret = new Turret(runtime,100,100)