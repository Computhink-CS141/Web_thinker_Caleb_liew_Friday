// write your codes here
function setup() {
    createCanvas(600,600);
    background(220);
    // noLoop();
}
let shapeColorcolor="red";

function draw(){
// // print(width)
// // print(height)
// let green=0;
// let x=0;
// let y=0;

// for(let counter = 0 ;counter < 10 ; counter += 1 ){
//     green += 25;
//     x += 50;
//     y += 50;
//     fill(0,green,green);
//     circle(x,y,50);
// }
// ---------------------------------------------------------
fill(shapecolor)
circle(300,300,300)
}

function mouseReleased(){
    shapeColor= color(random(0,255),random(0,255),random(0,255))

}

