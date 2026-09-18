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

    noun = createInput("e.g.a dog");
    noun.position(width/2+50,25);
    
    verb = createInput("e.g.a dog");
    verb.position(width/2+50,50);

    adjective = createInput("e.g.a dog");
    adjective.position(width/2+50,100);

    adverb = createInput("e.g.a dog");
    adverb.position(width/2+20,150);

    place = createInput("e.g.a dog");
    place.position(width/2+150,250);
    
    story = createButton("Generate Story");
    story.position(width/2+50,200);
    story.mousePressed(updatetext);
}

function draw(){
    background(220);
    textSize(18);
    text("Enter a noun",width/2,25);
    text("Enter a verb",width/2,50);
    text("Enter a adjective",width/2,75);
    text("Enter a adverb",width/2,100);
    text("Enter a place",width/2,125);
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