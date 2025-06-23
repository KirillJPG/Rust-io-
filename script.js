'use strict'
import { Player } from "./Entities/Player.js"
import { Runtime } from "./Runtime.js"
const canvas = document.querySelector(".canvas")
console.log("start")
const runtime = new Runtime(canvas)
const player = new Player(runtime)
