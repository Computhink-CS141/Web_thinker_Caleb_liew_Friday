let textbox,colorbox
function setup(){
    createCanvas(400,200);
    background("skyblue");
    textAlign(CENTER,CENTER);
    textbox=createInput("");
    textbox.position(100,50)
    textbox.input(updateText)

}

function draw(){
    background("skyblue");


}