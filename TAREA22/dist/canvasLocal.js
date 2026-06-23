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
    }
    /*iX(x: number):number{return Math.round(this.centerX + x/this.pixelSize);}
    iY(y: number): number{ return Math.round(this.centerY - y / this.pixelSize); }
    */
    drawLine(x1, y1, x2, y2) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.closePath();
        this.graphics.stroke();
    }
    /*fx(x:number):number {
      return Math.sin(x*2.5);
    }*/
    // Triangles.java: This program draws 50 triangles inside each other.
    paint() {
        // limpia
        this.graphics.clearRect(0, 0, this.maxX + 1, this.maxY + 1);
        this.graphics.strokeStyle = 'black'; // estilo
        this.graphics.lineWidth = 1;
        const size = Math.min(this.maxX, this.maxY) * 0.8;
        const half = size / 2;
        let xA = this.centerX - half;
        let yA = this.centerY - half;
        let xB = this.centerX + half;
        let yB = this.centerY - half;
        let xC = this.centerX + half;
        let yC = this.centerY + half;
        let xD = this.centerX - half;
        let yD = this.centerY + half;
        const q = 0.05;
        const p = 1 - q;
        for (let i = 0; i < 10; i++) {
            // dibujar cuadrado
            this.graphics.beginPath();
            this.graphics.moveTo(xA, yA);
            this.graphics.lineTo(xB, yB);
            this.graphics.lineTo(xC, yC);
            this.graphics.lineTo(xD, yD);
            this.graphics.closePath();
            this.graphics.stroke();
            // calcula el siguiente cuadrado
            const xA1 = p * xA + q * xB;
            const yA1 = p * yA + q * yB;
            const xB1 = p * xB + q * xC;
            const yB1 = p * yB + q * yC;
            const xC1 = p * xC + q * xA;
            const yC1 = p * yC + q * yA;
            const xD1 = p * xD + q * xA;
            const yD1 = p * yD + q * yA;
            xA = xA1;
            yA = yA1;
            xB = xB1;
            yB = yB1;
            xC = xC1;
            yC = yC1;
            xD = xD1;
            yD = yD1;
        }
    }
}
exports.CanvasLocal = CanvasLocal;
