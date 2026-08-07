function  preload() {


}

function setup(){
    createCanvas(400,400);
    background("lightblue");
    rectMode(CENTER);
    noStroke();
    xpos = width/2;
    ypos = height/2;
}


function draw(){
    background("skyblue");
    rect()
    rect(xpos,ypos,50,50)
    if (keyIsDown(UP_ARROW)){
        ypos = ypos-1
    }
    if (keyIsDown(DOWN_ARROW)){
        ypos = ypos+1
    }
    if (keyIsDown(RIGHT_ARROW)){
        xpos = xpos+1
    }
    if (keyIsDown(LEFT_ARROW)){
        xpos = xpos-1
    }
    xpos = constrain(xpos,50,350);
    ypos = constrain(ypos,50,350);
}
