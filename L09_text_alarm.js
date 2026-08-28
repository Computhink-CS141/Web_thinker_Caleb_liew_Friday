
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
    textSize(50);
    text("bounce",xpos,height/2);
    text("bounce",xpos-5,(height/2);
    text("bounce",xpos-10,(height/2));
    xpos = xpos+speed;

    if (xpos > width-78){
        speed = speed*-1;
    }
    if (xpos < 78){
        speed = speed*-1;
    }
}

