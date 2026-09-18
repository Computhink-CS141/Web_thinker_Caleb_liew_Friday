let noun;

let verb;

let adjective;

let adverb;

let place;

let story;
function setup(){
    createCanvas(600,600);
    background(220);
    textAlign(RIGHT,CENTER);

    noun = createInput();
    noun.position(width/2+50,50);
    
    verb = createInput();
    verb.position(width/2+50,100);

    adjective = createInput();
    adjective.position(width/2+50,150);

    adverb = createInput();
    adverb.position(width/2+50,200);

    place = createInput();
    place.position(width/2+50,250);
    
    story = createButton("Generate Story");
    story.position(width/2+50,300);
    story.mousePressed(updatetext);
}

function draw(){
    background(220);
    textSize(18);
    text("Enter a noun",width/2,)


}

function updatetext(){
    story = updatetext.input;
    

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