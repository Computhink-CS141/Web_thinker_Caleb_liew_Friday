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
let widthsize;
widthsize = 110
function draw(){
    background(0);
    image(picoimg,xpos,ypos,widthsize,133);
    if (keyIsDown(RIGHT_ARROW)){
        xpos = xpos+3;
        widthsize = widthsize*2;
    }
    if (keyIsDown(LEFT_ARROW)){
        xpos = xpos-3;
        widthsize = widthsize*2;
    }
    if (keyIsDown(UP_ARROW)){
        ypos = ypos-3;
        widthsize =widthsize*2;}
    if (keyIsDown(DOWN_ARROW)){
        ypos = ypos+3;
        widthsize*2;
    }
}

function keyPressed(){
    if (keyCode===32) {
    widthsize = widthsize/2;
    popsound.play();
    }
}

