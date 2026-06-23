"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasLocal = void 0;
class CanvasLocal {
    constructor(g, canvas) {
        this.graphics = g;
        this.rWidth = 640;
        this.rHeight = 480;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 2;
        this.centerY = this.maxY / 2;
        this.zoom = 1;
        this.funcion = "x*x";
    }
    setFuncion(f) {
        this.funcion = f;
    }
    zoomIn() {
        this.zoom += 0.1;
        this.paint();
    }
    zoomOut() {
        if (this.zoom > 0.2) {
            this.zoom -= 0.1;
            this.paint();
        }
    }
    paint() {
        this.graphics.clearRect(0, 0, this.maxX + 1, this.maxY + 1);
        this.graphics.strokeStyle = "#dddddd";
        this.graphics.lineWidth = 1;
        for (let x = 0; x <= this.maxX; x += 40) {
            this.graphics.beginPath();
            this.graphics.moveTo(x, 0);
            this.graphics.lineTo(x, this.maxY);
            this.graphics.stroke();
        }
        for (let y = 0; y <= this.maxY; y += 40) {
            this.graphics.beginPath();
            this.graphics.moveTo(0, y);
            this.graphics.lineTo(this.maxX, y);
            this.graphics.stroke();
        }
        this.graphics.strokeStyle = "black";
        this.graphics.lineWidth = 2;
        this.drawLine(0, this.centerY, this.maxX, this.centerY);
        this.drawLine(this.centerX, 0, this.centerX, this.maxY);
        this.graficarFuncion();
    }
    graficarFuncion() {
        this.graphics.beginPath();
        this.graphics.strokeStyle = "red";
        this.graphics.lineWidth = 3;
        let inicio = -this.centerX;
        let primero = true;
        for (let x = inicio; x < this.centerX; x++) {
            let valor = x / this.zoom;
            let y = this.calcular(valor);
            let px = this.centerX + x;
            let py = this.centerY - y;
            if (primero) {
                this.graphics.moveTo(px, py);
                primero = false;
            }
            else {
                this.graphics.lineTo(px, py);
            }
        }
        this.graphics.stroke();
    }
    calcular(x) {
        try {
            let funcion = this.funcion
                .replaceAll("x", `(${x})`);
            return eval(funcion);
        }
        catch {
            return 0;
        }
    }
    drawLine(x1, y1, x2, y2) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.stroke();
    }
}
exports.CanvasLocal = CanvasLocal;
