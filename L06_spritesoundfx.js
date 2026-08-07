function  preload() {


}

function setup(){
    createCanvas(400,400);
    background("lightblue");
    rectMode(CENTER);
    noStroke();
}
let xpos = width/2;
let ypos = height/2;

function draw(){
    background("skyblue");
    rect(xpos,ypos,50,50)
    if (keyIsDown(UP_ARROW)){
        ypos = ypos+1
    }
    if (keyIsDown(DOWN_ARROW)){
        ypos = ypos-1
    }
    if (keyIsDown(RIGHT_ARROW)){
        xpos = xpos+1
    }
    if (keyIsDown(LEFT_ARROW)){
        xpos = xpos-1
    }
    xpos = constraint(xpos,50,350);
    
}
