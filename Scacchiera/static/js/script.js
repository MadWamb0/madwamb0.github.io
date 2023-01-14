let rdm
let x = 0
let y = 0
let l = 62.5
let w = 500
let h = 500
let color = 0

function setup() {
  createCanvas(w,h);
  
  background(220);
}

function draw() {
  
  if(color==0){
    fill(0,0,0)
    color = 1
  }else{
    fill(255,255,255)
    color = 0
  }
  
  square(x,y,l)
  if(x>=w){
    x=0
    y+=l
  }else{
  x += l
  }
  
}
