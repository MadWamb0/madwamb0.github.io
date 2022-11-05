w = 600
h = 300
let x = 300
let speed = 5
let xPos = 62.5
let d = 125

function setup(){
	createCanvas(w,h)
}

function draw(){

	background(0,200,2)
	strokeWeight(5)


	//centrale
	fill(255,128,1)
	stroke("black")
	circle(x-xPos,h/2-xPos,d)
	
	fill(255,128,1)
	stroke("black")
	circle(x+xPos,h/2-xPos,d)
	
	fill(255,128,1)
	stroke("black")
	circle(x+xPos,h/2+xPos,d)
	
	fill(255,128,1)
	stroke("black")
	circle(x-xPos,h/2+xPos,d)

	fill("red")
	stroke("black")
	circle(x,h/2,d)


	//Movimento
	x = x + speed

	if(x <= xPos*2 || x >= w - xPos*2){
		speed = -speed
	}
	
}