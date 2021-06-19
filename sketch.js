var ship,ship_running;
var sea;

var sea,sea_img;

function preload(){
  ship_running = loadAnimation("trex1.png","trex3.png","trex4.png");
sea_img = loadImage("ground2.png")
}

function setup()
{
createCanvas(600,200);

ship = createSprite(50,160,20,50);
ship.addAnimation("running",ship_running);


ship.scale = 0.5;

sea = createSprite(200,180,600,20);
sea.addImage(ground_img)


}

function draw(){
  background("white");
  sea.velocityX = -1;

  if(sea<0){
    sea.x = sea.width/2;
  }

if(keyDown("space")){
  ship.velocityY = -10;
}

ship.velocityY = ship.velocityY + 0.5;
ship.collide(sea);




  drawSprites();
}

