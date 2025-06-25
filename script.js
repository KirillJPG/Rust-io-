'use strict'
import { Player } from "./Prototype/NPC/Player/Player.js"
import { Wall } from "./Prototype/Wall/Wall.js"
import { Runtime } from "./Runtime.js"
const canvas = document.querySelector(".canvas")
console.log("start")
const runtime = new Runtime(canvas)
const player = new Player(runtime)
const wall = new Wall(runtime)
