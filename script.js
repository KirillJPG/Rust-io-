'use strict'
import { Player } from "./Prototype/NPC/Player/Player.js"
import { Wall } from "./Prototype/Wall/Wall.js"
import { Runtime } from "./Runtime.js"
const canvas = document.querySelector(".canvas")
console.log("start")
const runtime = new Runtime(canvas)
const player = new Player(runtime)
const wall = new Wall(runtime,-250,-250,500,10,0,10000)
const wall2 = new Wall(runtime,-250,-250,10,500,0,10000)
const wall3 = new Wall(runtime,-250,250,10,500,0,10000)
const wall4 = new Wall(runtime,250,-250,250,10,0,10000)
const wall5 = new Wall(runtime,0,50,200,200,0,1)
