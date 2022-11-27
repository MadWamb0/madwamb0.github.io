let angle = 0;
let breadth = 100;
let frequency = 1;
let fase = 0;

function setup() {
    createCanvas(innerWidth, 400);
    background("white");
    angleMode(DEGREES);
    line(0,200,innerWidth,200);
}

function draw() {
    strokeWeight(3);
    stroke("Blue");
    let y2 = breadth * cos(frequency * angle + fase);
    point(angle,y2+200);
    stroke("Red");
    let y = breadth * sin(frequency * angle + fase);
    point(angle,y+200);
    angle += 1;

    if(angle > innerWidth) {
        stroke("black")
        background("white");
        strokeWeight(1);
        line(0,200,innerWidth,200);
        angle = 0;
    }
}

let breadthRange = document.querySelector("[name=breadth]");
breadthRange.addEventListener("input", function(e){
    breadth = parseInt(breadthRange.value);
})

let frequencyRange = document.querySelector("[name=frequency]");
frequencyRange.addEventListener("input", function(e){
    frequency = parseInt(frequencyRange.value);
})

let faseRange = document.querySelector("[name=fase]");
faseRange.addEventListener("input", function(e){
    fase = parseInt(faseRange.value);
})