import { CanvasLocal } from './canvasLocal.js';


let canvas: HTMLCanvasElement;

let graphics: CanvasRenderingContext2D;


canvas = <HTMLCanvasElement>
document.getElementById('circlechart');


graphics = canvas.getContext('2d')!;


const miCanvas = new CanvasLocal(
  graphics,
  canvas
);


miCanvas.paint();



const zoomMas =
document.getElementById("zoomMas");


const zoomMenos =
document.getElementById("zoomMenos");



zoomMas?.addEventListener(
"click",
()=>{

  miCanvas.zoomIn();

});



zoomMenos?.addEventListener(
"click",
()=>{

  miCanvas.zoomOut();

});