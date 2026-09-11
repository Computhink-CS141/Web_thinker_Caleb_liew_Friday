
let usertext = "ENTER YOUR NAME HERE";
let agetext = "AGE"
let input;
let ageinput;
function setup(){
    createCanvas(400,400);
    background(220);
    textAlign(CENTER,CENTER);
    input= createInput("");
    input.position(width/2,300);
    input.input(updateText);
    ageinput= createInput("");
    ageinput.position(width/2,330);
    ageinput.input(updateText);
}

function draw(){
    background(220);
    fill(0);
    textSize(24);
    text(usertext,width/2,height/2);
    textSize(24);
    text(agetext,width/2,height/2);
    textSize(14);
    text("Enter name here:",140,312)

}
function updateText(){
    usertext = this.value();


}