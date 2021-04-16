
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,ground,invisibleground;
var FoodGroup, obstacleGroup;
var survivaltime;
var score;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.2;
  
  survivaltime=0;
  score=0;
  ground=createSprite(400,380,900,10);
  ground.velocityX=-4;
  console.log(ground.x);
  
  bananasGroup=createGroup();
  obstacleGroup=createGroup();
   
}


function draw() {
  background("skyblue");
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  survivaltime = survivaltime+ Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
  
  
  monkey.collide(ground);
  monkey.velocityY=monkey.velocityY+ 0.9;
  
  if(keyDown("space")){
     monkey.velocityY=-12;
     }
  
  
  
  if(bananasGroup.isTouching(monkey)){
    bananasGroup.destroyEach();
    score=score+1;
    }
  
  
  bananas();
  obstacle();
  drawSprites();
  
  
  textSize(27);
  text("score:"+score,450,30);
  
  textSize(27);
  text("survival time:"+survivaltime,30,30);
  
}

function obstacle(){
  if(frameCount%130===0){
   obstace=createSprite(500,340,20,20);
  obstace.addImage(obstaceImage);
  obstace.scale=0.2;
  obstace.velocityX=-(4 + 3*survivaltime/100);;
  obstace.lifetime=110;
  
  obstacleGroup.add(obstace);}
}

function bananas(){
  if (frameCount%90===0){
  banana=createSprite(500,170,20,20);
  banana.addImage(bananaImage);
  banana.y=Math.round(random(300,100));
  banana.scale=0.1;
  banana.velocityX=-(4 + 3*survivaltime/100);;
  banana.lifetime=110;
  
  bananasGroup.add(banana);}
}





