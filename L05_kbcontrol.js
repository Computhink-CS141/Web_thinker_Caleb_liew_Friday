function setup(){
createCanvas(1200,700);
background("grey");
noStroke();
}
// let size = 5
// rectsize = 20
function draw(){
background("skyblue");
rect(width/2,height/2,rectsize,rectsize);









}

function keyPressed(){
    rectsize = 200;
}
function keyReleased(){
    rectsize = 50;
}



// function mouseDragged(){
// circle(mouseX,mouseY,size)
// size = size+100
// }

// function mousePressed(){
// size = 5;
// fill(random(1,255),random(1,255),random(1,255))
// }

