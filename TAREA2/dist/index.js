"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvasLocal_js_1 = require("./canvasLocal.js");
let canvas;
let graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
const miCanvas = new canvasLocal_js_1.CanvasLocal(graphics, canvas);
miCanvas.paint();
