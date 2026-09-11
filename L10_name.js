
let usertext = "ENTER YOUR TEXT HERE";
let input;
function setup(){
    createCanvas(400,400);
    background(220);
    textAlign(CENTER,CENTER);
    input= createInput("");
    input.position(width/2,300);
    input.input(updateText);
}

function draw(){
    background(220);
    fill(0);
    textSize(24);
    text(usertext,width/2,height/2);

    textSize(14);
    text("")

}
function updateText(){
    usertext = this.value();


}