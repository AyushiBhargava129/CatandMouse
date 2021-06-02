var garden, gardenImg;
var cat, catImg;
var mouse, mouseImg, mouseImg2;

function preload() {
 gardenImg =  loadImage("images/garden.png");
 catImg    =  loadImage("images/cat1.png");
 mouseImg  =  loadImage("images/mouse1.png");
 mouseImg2 =  loadAnimation("images/mouse2.png", "images/mouse3.png");
 catImage2 =  loadAnimation("images/cat2.png", "images/cat3.png");
}

function setup(){
    createCanvas(1000,600);

    garden = createSprite(400, 300);
    garden.addImage("garden", gardenImg);
  
    cat = createSprite(670, 480, 30, 30);
    cat.addImage("cat1", catImg);
    cat.scale = 0.2;

    mouse = createSprite(100, 500, 30, 30);
    mouse.addImage("mouse1", mouseImg);
    mouse.scale = 0.15;

}

function draw() {

    background(255)

    keyPressed();

    if(cat.x - mouse.x <= cat.width/2 - mouse.width/2){
       mouse.changeAnimation("mouse1", mouseImg);
       cat.changeAnimation("cat1", catImg);
       cat.velocityX = 0;
       cat.x = 290;
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
     mouse.addAnimation("mouse teasing", mouseImg2);
     mouse.changeAnimation("mouse teasing" , mouseImg2);
     mouse.frameDelay = 15;
     cat.velocityX = -2;
     cat.addAnimation("cat walking", catImage2);
     cat.changeAnimation("cat walking", catImage2);
     cat.frameDelay = 5;
     

    }
  

}
