

function setup(){
    createCanvas(500,500);
    background("skyblue");
    textAlign(CENTER,CENTER);
}

function draw(){
    background("skyblue");
    let xhour = nf(hour(),2);
    let xminute = nf(minute(),2);
    let xsecond = nf(second(),2);
    let timeString = xhour + ":" + xminute + ":" + xsecond;
    textSize(50);
    text(timeString,width/2,height/2);

}



// Task 1   -----------------------------------------
// let speed , xpos;

// function setup(){
    // createCanvas(500,500);
    // background("grey");
    // textAlign(CENTER,CENTER);
    
    // xpos = width/2;
    // speed = 5;
// }

// function draw(){
    // background("grey")
    // textSize(50);
    // text("bounce",xpos,height/2);
    // text("bounce",xpos+10,(height/2)-50);
    // text("bounce",xpos-10,(height/2)+50);
    // xpos = xpos+speed;

    // if (xpos > width-78){
    //     speed = speed*-1;
    // }
    // if (xpos < 78){
    //     speed = speed*-1;
    // }
// }

