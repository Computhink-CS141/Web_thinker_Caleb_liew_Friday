let picoimg;
let popsound;

function preload(){
    picoimg = loadImage("assets/pico-a.png");
    popsound = loadSound("assets/pop.mp3");
}
let xpos,ypos;
function setup(){
    createCanvas(500,500);
    background(0);
    imageMode(CENTER);
    xpos = width/2;
    ypos = height/2;
}

function draw(){
    background(0);
    image(picoimg,xpos,ypos,widthsize,133);


}