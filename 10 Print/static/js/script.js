let w=400
let h=400
let numCaselle=20
let l=w/numCaselle
let x1=0
let y1=0
let x2=0
let y2=0
let rnd

 function setup() {
  createCanvas(w, h);
  frameRate(60)
  background(255,0,0);
}
function draw() {
  rnd=random(20)
  strokeWeight(5)
  if(rnd>=10){
    line(x1,y1,x2+l,y2+l)
    

  }else{
    line(x1,y1+l,x2+l,y2)
  }
  x1=x1+l
  x2=x2+l
  if(x1>= w){
    x1=0
    y1=y1+l
    x2=-1*l
    x2=x2+l
    y2=y2+l
    
  }
}