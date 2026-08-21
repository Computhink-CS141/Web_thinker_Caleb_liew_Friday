let BGM;
function preload(){
    BGM = loadSound("assets/star_wars_theme_8_bit.mp3");
}

let yscroll;
function setup(){
    createCanvas(600,400);
    background("black");
    textAlign(CENTER,CENTER);
    yscroll = height;
}

function draw(){
background("black")
let storytext=[
"A long time ago in a Galaxy far,",
"far away..." , 
"THE BEGINNING",
"It is a period of learning...", 
"Students have begun their journey" ,
"into the world of..."
]
yscrolling = height -50
for (let count = 0; count<6; count++){
    fill("yellow");
    textSize(50);
    text(storytext[count],width/2,yscroll)
    yscroll-=0.6;
}


}