var ball
var lighting

function preload(){
  ballImg = loadImage("ball.png");
  lightingImg = loadImage("lighting.jpg");
  }

function setup(){
  createCanvas(1300,1300);
  ball = createSprite(600,600,300,300);
  ball.scale = 0.3;
  ball.addImage("ball", ballImg);

  lighting = createSprite(300,300);
  lighting.addImage("lighting",lightingImg);
  lighting.velocityY = 1;
}

function draw(){
  background(0);
  if(keyDown("left_arrow")){
    ball.x = ball.x - 3;
  }
  
  if(keyDown("right_arrow")){
    ball.x = ball.x + 3;
  }
  
  if(keyDown("space")){
    ball.velocityY = -10;
  }
  
  ball.velocityY = ball.velocityY + 0.8
    
  if(lighting.y > 400){
    lighting.y = 300

    drawSprites();
  }
  

/*
function spawnDoors() {
  //write code here to spawn the doors in the tower
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    
    door.x = Math.round(random(120,400));
    climber.x = door.x;
    invisibleBlock.x = door.x;
    
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;
    
    ghost.depth = door.depth;
    ghost.depth +=1;
   
    //assign lifetime to the variable
    door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;

    
    //add each door to the group
    doorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

*/