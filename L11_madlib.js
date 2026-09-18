let noun, nounbutton;

let verb, verbbutton;

let adjective, adjbutton;

let adverb, advbutton;

let place, placebutton;


function setup(){
    createCanvas(600,600);
    background(220);
    textAlign(CENTER,CENTER);

    noun = createInput();
    noun.position(width/2,50);
    
    nounbutton = createButton();

}




// let textbox,colorbox;
// let updatetext;
// function setup(){
//     createCanvas(400,200);
//     background("skyblue");
//     textAlign(CENTER,CENTER);
//     textbox=createInput("");
//     textbox.position(100,50)
//     textbox.input(changedText);

//     colorbox = createColorPicker("#000")
//     colorbox.position(100,100);
    
// }

// function draw(){
//     background("skyblue");
//     fill(colorbox.value());
//     textSize(18);
//     text(updatetext,200,150);
    
// }

// function changedText(){
//     updatetext = textbox.value();
// }