let picoimg;
let popsound;

function preload(){
    picoimg = loadImage("assets/pico-a.png");
    popsound = loadSound("assets/pop.mp3");
}
// let xpos,ypos;
function setup(){
    createCanvas(500,500);
    background(0);
    imageMode(CENTER);
    xpos = width/2;
    ypos = height/2;
    noStroke();

}
let ballx =300;
let bally =300;
let ballSize =10;
let ballSpeedx = 2;
let ballSpeedy = 2;


function draw(){
    background (0);
    circle (ball)
































}

// Recap 1

// let widthsize;
// widthsize = 110
// function draw(){
//     background(0);
//     image(picoimg,xpos,ypos,widthsize,133);
//     if (keyIsDown(RIGHT_ARROW)){
//         xpos = xpos+3;
//         widthsize = 55;
//     }
//     if (keyIsDown(LEFT_ARROW)){
//         xpos = xpos-3;
//         widthsize = 55;
//     }
//     if (keyIsDown(UP_ARROW)){
//         ypos = ypos-3;
//         widthsize =55;}
//     if (keyIsDown(DOWN_ARROW)){
//         ypos = ypos+3;
//         widthsize =55;
//     }
// }

// function keyPressed(){
//     if (keyCode===32) {
//     widthsize = 110;
//     popsound.play();
//     }
// }

