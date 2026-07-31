function setup(){
createCanvas(600,600);
background("grey");
noStroke();
}
// let size = 5
rectsize = 20
function draw(){
background("skyblue");
rect(height/2,width/2,rectsize,rectsize);









}

function keyPressed(){
    rectsize = 200;
}
function keyRelased(){
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

