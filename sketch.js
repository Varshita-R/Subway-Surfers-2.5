var backgroundImg;
var track1, track2, track3;
var jake, security;
var jakeImg;
var trainImg;
var train1Group, train2Group, train3Group;
var gameState = "play";
var endImg;

function preload(){
backgroundImg = loadImage("Tracks.png");
jakeImg = loadImage("JakeFront.png");
train1Img = loadImage("Train1.jpg");
train2Img = loadImage("Train2.jpg");
train3Img = loadImage("Train3.jpg");
endImg = loadImage("jakeCaught.png");
}

function setup() {

  createCanvas(windowWidth,windowHeight);

  edges = createEdgeSprites();

  track1 = createSprite(windowWidth/4,height,width,height);
  track1.scale = 2;
  track1.addImage("track1",backgroundImg);
  track1.velocityY = 7;

  track2 = createSprite(windowWidth/2+50,height,width,height);
  track2.scale = 2;
  track2.addImage("track2",backgroundImg);
  track2.velocityY = 8;

  track3 = createSprite(windowWidth/2+500,height,width,height);
  track3.scale = 2;
  track3.addImage("track3",backgroundImg);
  track3.velocityY = 7;

  jake = createSprite(width/2-160,height-200,20,20);
  jake.scale = 0.2;
  jake.addImage("jake",jakeImg);
  //jake.velocityY = -6;

  train1Group = new Group();
  train2Group = new Group();
  train3Group = new Group();
}

function draw() {

  background("#786045");

  if(keyDown("space") && gameState === "end"){
    jake.velocityY = -3;
  }
  
  if(track1.y > height/2){
    track1.y = 350;
  }

  if(track2.y > height/2){
    track2.y = 350;
  }

  if(track3.y > height/2){
    track3.y = 350;
  }

  if(gameState === "play"){

  if(keyDown("LEFT_ARROW")){
    jake.x = jake.x-150;
  }

  if(keyDown("RIGHT_ARROW")){
    jake.x = jake.x+150;
  }

  if(keyDown("UP_ARROW")){
    jake.y = jake.y-20;
  }

  //jake.velocityY = jake.velocityY+0.5;

  if(jake.x < 0){
    jake.x = 20;
  }

  if(jake.x > width-20){
    jake.x = width-20;
  }

  if(frameCount > 4000){
    //add happy jake image
    fill("magenta");
    textFont("Bookman Old Style");
    textSize(50);
    text("Congratulations", width/2-200,height/2);
    track1.destroy();
    track2.destroy();
    track3.destroy();
    train1Group.destroyEach();
    train2Group.destroyEach();
    train3Group.destroyEach();
  }

  if(jake.isTouching(train1Group)|| jake.isTouching(train2Group)|| jake.isTouching(train3Group)){
    gameState = "end";
    var ending = createSprite(width/2-30,height/2,30,30);
    ending.addImage(endImg);
    ending.scale = 2.5;
    fill("red");
    textFont("Bookman Old Style");
    textSize(20);
    text("**YOU ARE CAUGHT**",width/2-200,height/2);
    jake.destroy();
    train1Group.destroyEach();
    train2Group.destroyEach();
    train3Group.destroyEach();
    }

  spawnTrain1();
  spawnTrain2();
  spawnTrain3();

}

  console.log(frameCount)

  drawSprites();
}

function spawnTrain1(){
  if(frameCount % 250 === 0){
   var train1 = createSprite(385,random(height/2,height),10,40);
   var rand = Math.round(random(1,3));
   train1.velocityY = 4;
   switch(rand){
     case 1: train1.addImage(train1Img);
             break;
     case 2: train1.addImage(train2Img);
             break;
     case 3: train1.addImage(train3Img);
             train1.scale = 0.5;
             break;
   }
   train1Group.add(train1);
  }
}

function spawnTrain2(){
  if(frameCount % 350 === 0){
   var train2 = createSprite(820,random(height/2,height),10,40);
   var rand = Math.round(random(1,3));
   train2.velocityY = -4;
   switch(rand){
     case 1: train2.addImage(train1Img);
             break;
     case 2: train2.addImage(train2Img);
             break;
     case 3: train2.addImage(train3Img);
             train2.scale = 0.5;
             break;
   }
   train2Group.add(train2);
  }
}

function spawnTrain3(){
  if(frameCount % 500 === 0){
   var train3 = createSprite(1270,random(height/2,height),10,40);
   var rand = Math.round(random(1,3));
   train3.velocityY = 4;
   switch(rand){
     case 1: train3.addImage(train1Img);
             break;
     case 2: train3.addImage(train2Img);
             break;
     case 3: train3.addImage(train3Img);
             train3.scale = 0.5;
             break;
   }
   train3Group.add(train3);
  }
}


