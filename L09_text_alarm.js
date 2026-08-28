
let speed , xpos;

function setup(){
    createCanvas(500,500);
    background("grey");
    textAlign(CENTER,CENTER);
    xpos = width/2;
    speed = 5;
}

function draw(){
    background("grey");
    textSize(25);
    text("bounce",xpos,height/2);
    xpos = xpos*0.5;

}

