let w = 400
let h = 400
let angle 
angle = 0 
let ampiezza
ampiezza = 100
let grandezza = 50;
let x = w/2;
let y = h/2;

function setup() {
    createCanvas(w, h);
    background(220,220)



}

function draw() {
  background(220,220)
  grandezza = ampiezza * sin(angle)
  if(grandezza > 20){
    square(x,y,grandezza)
  }else{
    
  }
  angle += 0.01
}