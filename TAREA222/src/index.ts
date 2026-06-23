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


const graficar =
document.getElementById("graficar");


const funcion =
document.getElementById("funcion") as HTMLInputElement;





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






graficar?.addEventListener(
"click",
()=>{


let texto = funcion.value;


if(texto.trim() !== ""){


miCanvas.setFuncion(texto);


miCanvas.paint();


}



});