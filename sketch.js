var back;
var cat ,mouse;



function preload() {
    //load the images here
backImg=loadImage("garden.png");
catImg=loadAnimation("cat2.png","cat3.png");
catImg1=loadImage("cat1.png");
ratImg=loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
ratImg1=loadImage("mouse1.png");
ratImg2=loadImage("mouse2.png");
ratImgg=loadAnimation("mouse4.png");
edloo=loadImage("cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
back=createSprite(350,350);
back.addImage(backImg);

cat=createSprite(650,600);
cat.addAnimation("1st",catImg1);
cat.scale=0.2;

rat=createSprite(100,580);
rat.addAnimation("2nd",ratImg1)
rat.scale=0.2;
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide

if(cat.x - rat.x < (cat.width-rat.width)/2){
    cat.velocityX=0;
    cat.addImage("56",edloo);
    cat.x=300;
    cat.changeImage("56");
    rat.addAnimation("hii",ratImgg);
    rat.changeAnimation("hii");
          
}

keyPressed();
    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here
if(keyDown("left")){
 rat.addAnimation("mouseTeasing",ratImg2);
 rat.changeAnimation("mouseTeasing");
rat.frameDelay=25; 

cat.addAnimation("cat",catImg);
cat.changeAnimation("cat");

}
if(keyDown("left")){
    cat.velocityX=-3;
}
if(keyDown("right")){
    //cat.velocityX=cat.velocityX+3;
    cat.velocityX=+3;
    //rat.addAnimation("mouseTeasing",ratImg2);
   // rat.changeAnimation("mouseTeasing")

   rat.addAnimation("mouseTeasing",ratImg2);
 rat.changeAnimation("mouseTeasing");
rat.frameDelay=25; 

cat.addAnimation("cat",catImg);
cat.changeAnimation("cat");
}

}
