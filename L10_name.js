
let usertext = "ENTER YOUR TEXT HERE";
let input;
function setup(){
    createCanvas(400,400);
    background(220);
    textAlign(CENTER,CENTER);
    input= createInput("");
    input.postion(300,300);
}

function draw(){
    background(220);
    fill(0);
    textSize(24);
    text(usertext,width/2,height/2);


}
