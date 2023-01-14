let w = 500
let h = 500
let diff = 50

function setup() {
  createCanvas(w,h);
  noStroke()
}

function draw() {
  background(220);
  
  
  fill(255,255,255)
  circle(w/2,h/2,diff*9)
  
  fill(0,0,0)
  circle(w/2,h/2,diff*8)
  
  fill(255,255,255)
  circle(w/2,h/2,diff*7)
  
  fill(0,0,0)
  circle(w/2,h/2,diff*6)

  fill(255,255,255)
  circle(w/2,h/2,diff*5)
  
  fill(0,0,0)
  circle(w/2,h/2,diff*4)
  
  fill(255,255,255)
  circle(w/2,h/2,diff*3)
  
  fill(0,0,0)
  circle(w/2,h/2,diff*2)
  
  fill(255,0,0)
  circle(w/2,h/2,diff)
}