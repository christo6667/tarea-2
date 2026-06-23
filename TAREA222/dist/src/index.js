"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvasLocal_js_1 = require("./canvasLocal.js");
let canvas;
let graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
const miCanvas = new canvasLocal_js_1.CanvasLocal(graphics, canvas);
miCanvas.paint();
const zoomMas = document.getElementById("zoomMas");
const zoomMenos = document.getElementById("zoomMenos");
const graficar = document.getElementById("graficar");
const funcion = document.getElementById("funcion");
zoomMas?.addEventListener("click", () => {
    miCanvas.zoomIn();
});
zoomMenos?.addEventListener("click", () => {
    miCanvas.zoomOut();
});
graficar?.addEventListener("click", () => {
    let texto = funcion.value;
    if (texto.trim() !== "") {
        miCanvas.setFuncion(texto);
        miCanvas.paint();
    }
});
