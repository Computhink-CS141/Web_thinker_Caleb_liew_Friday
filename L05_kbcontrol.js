function setup(){
createCanvas(600,600);
background("grey");
}
let size = 0
function draw(){

}

function mouseDragged(){
circle(mouseX,mouseY,size)
size = size+0.5
}

function mousePressed(){
size = size +0.5;


}

