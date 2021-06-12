var trex, trex_running, edges;
var groundImage;
var groundSprite
var ground_2
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  groundSprite= createSprite(300,180,600,20)
  groundSprite.addAnimation('ground', groundImage)
  groundSprite.velocityX= -3
  groundSprite.x= groundSprite.width/2
  ground_2=createSprite(300,190,600,20)
ground_2.visible=false
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  if(groundSprite.x < 0){
groundSprite.x=groundSprite.width/2
  }
  //console.log(groundSprite.x)
  //jump when space key is pressed
  if(keyDown("space")& trex.y>=157){
    trex.velocityY = -10;
  }

  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(ground_2)
  drawSprites();
  
}