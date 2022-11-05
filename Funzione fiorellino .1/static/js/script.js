w = 600
h = 600
let x = 50
let y = 50
let xPos = 25
let d = 50


function setup(){
	createCanvas(w,h)
	background(0,200,2)
}

function flower() {
	strokeWeight(2.5)
	
		//centrale
	fill(255,128,1)
	stroke("black")
	circle(x-xPos,y-xPos,d)
	
	fill(255,128,1)
	stroke("black")
	circle(x+xPos,y-xPos,d)
	
	fill(255,128,1)
	stroke("black")
	circle(x+xPos,y+xPos,d)
	
	fill(255,128,1)
	stroke("black")
	circle(x-xPos,y+xPos,d)

	fill("red")
	stroke("black")
	circle(x,y,d)
}


function draw(){

	flower()
	x = x + d*2
	if (x>=w) {
		y = y+d*2
		x = d
	}

}