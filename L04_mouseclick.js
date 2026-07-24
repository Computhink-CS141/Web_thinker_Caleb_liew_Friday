// write your codes here
function setup() {
    createCanvas(600,600);
    background(220);
    noLoop();
}

function draw(){
// print(width)
// print(height)
let green=0;
let x=0;
let y=0;

for(let counter = 0 ;counter < 10 ; counter += 1 ){
    green += 25;
    x += 50;
    y += 50;
    fill(0,green,0);
    circle(x,y,50);
}



}


