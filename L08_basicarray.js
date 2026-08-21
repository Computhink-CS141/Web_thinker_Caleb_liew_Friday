
function setup(){
    createCanvas(500,600);
    background("grey");
    textAlign(RIGHT,TOP);
}

function draw(){
background("grey");
let foodlist=["Hamburger","Fries","Ice cream","Milo","Coke"];
let ypos= 50;
for (let count = 0;count < foodlist.length;count++){
    textSize(30);
    text(count+1+"." + foodlist[count],width/2,ypos);
    ypos=ypos+50;
    // print(foodlist[count])
}

// fill("white");
// textSize();
// text("My name is Caleb.",50,50);
// text("I am 12 years old this year.",50,100);
// text("My favourite activity is reading.",50,150);

}

