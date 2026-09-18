let textbox,colorbox;
let updatetext;
function setup(){
    createCanvas(400,200);
    background("skyblue");
    textAlign(CENTER,CENTER);
    textbox=createInput("");
    textbox.position(100,50)
    textbox.input(updatetext);

    colorbox = createColorPicker("#000")
    colorbox.position(100,100);
    
}

function draw(){
    background("skyblue");
    text(textbox,50,120);
    fill(colorbox,)
}

function changedText(){
    textbox = textInput.value();
}