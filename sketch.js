
var bg;
var cat,catimage1,catimage2,catimage4,mouse ,mouseimage1,mouseimage2,mouseimage4;
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    catimage1=loadAnimation("images/cat1.png");
    catimage2=loadAnimation("images/cat2.png","images/cat3.png")
    catimage4=loadAnimation("images/cat4.png");
    mouseimage1=loadAnimation("images/mouse1.png");
    mouseimage2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseimage4=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("catSleeping",catimage1);
    cat.scale=0.2;

    
    mouse=createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseimage1);
    mouse.scale=0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation("catLastImage", catimage4);
    cat.scale=0.2;
    cat.x=300;
    cat.changeAnimation("catLastImage");
    mouse.addAnimation("mouseLastImage",mouseimage4);
    mouse.scale=0.15;
    mouse.changeAnimation("mouseLastImage");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode === LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning", catimage2);
    cat.changeAnimation("catRunning");
    

    mouse.addAnimation("mouseTeasing",mouseimage2);
    mouse.frameDelay = 25;
    mouse.changeAnimation("mouseTeasing");
    

    

}
}
