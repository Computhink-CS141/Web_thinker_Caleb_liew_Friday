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
    fill(colorbox.value());
    text(up,50,120);
    
}

function changedText(){
    updatetext = textbox.value();
}