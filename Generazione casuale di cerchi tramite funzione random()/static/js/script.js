let w = 600
let h = 600
let minD = 30
let maxD = 90
let r 
let g 
let b 
let a

function setup(){
	createCanvas(w,h)
	background("green")
}

function draw(){
	x = random(w)
	y = random(h)
	d = random(minD,maxD)
	r = random(255)
	g = random(255)
	b = random(255)
	a = random(255)
	fill(r,g,b,a)
	noStroke()
	circle(x,y,d)

	if(frameCount==1000){
		background("green")
	}

}