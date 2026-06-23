export class CanvasLocal {

  protected graphics: CanvasRenderingContext2D;
  protected rWidth:number;
  protected rHeight:number;
  protected maxX: number;
  protected maxY: number;
  protected pixelSize: number;
  protected centerX: number;
  protected centerY: number;
  protected zoom:number;


  public constructor(g: CanvasRenderingContext2D, canvas: HTMLCanvasElement){

    this.graphics = g;
    this.rWidth = 640;
    this.rHeight = 480;
    this.maxX = canvas.width - 1;
    this.maxY = canvas.height - 1;

    this.pixelSize = Math.max(
      this.rWidth / this.maxX,
      this.rHeight / this.maxY
    );

    this.centerX = this.maxX / 2;
    this.centerY = this.maxY / 2;

    this.zoom = 1;
  }


  zoomIn(){
    this.zoom += 0.1;
    this.paint();
  }


  zoomOut(){

    if(this.zoom > 0.2){
      this.zoom -= 0.1;
      this.paint();
    }

  }


  drawLine(x1:number,y1:number,x2:number,y2:number){

    this.graphics.beginPath();
    this.graphics.moveTo(x1,y1);
    this.graphics.lineTo(x2,y2);
    this.graphics.closePath();
    this.graphics.stroke();

  }


  paint(){

    this.graphics.clearRect(
      0,
      0,
      this.maxX + 1,
      this.maxY + 1
    );


    this.graphics.strokeStyle = "black";
    this.graphics.lineWidth = 1;


    const size =
      Math.min(this.maxX,this.maxY) * 0.8 * this.zoom;


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
    const p = 1-q;


    for(let i=0;i<100;i++){


      this.graphics.beginPath();

      this.graphics.moveTo(xA,yA);
      this.graphics.lineTo(xB,yB);
      this.graphics.lineTo(xC,yC);
      this.graphics.lineTo(xD,yD);

      this.graphics.closePath();

      this.graphics.stroke();



      const xA1 = p*xA + q*xB;
      const yA1 = p*yA + q*yB;

      const xB1 = p*xB + q*xC;
      const yB1 = p*yB + q*yC;

      const xC1 = p*xC + q*xA;
      const yC1 = p*yC + q*yA;

      const xD1 = p*xD + q*xA;
      const yD1 = p*yD + q*yA;



      xA=xA1;
      yA=yA1;

      xB=xB1;
      yB=yB1;

      xC=xC1;
      yC=yC1;

      xD=xD1;
      yD=yD1;

    }

  }

}