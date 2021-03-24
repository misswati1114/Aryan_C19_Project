var STAND = 0;
var PLAY = 1;
var OVER = 2;
var gameState = STAND;
var boy, boyimg,boyrun;
var boy2;
var back;
var startbtn,restartbtn,gameover;
var startbtnimg,restartbtnimg,gameoverimg;
var title;
var bg1,bg2;
var obs1,obs2;
var obsGroup;

function preload(){
back = loadImage("bg1.jpg");
boyimg = loadImage("stand.png")
boyrun = loadAnimation("Run1.png","Run2.png","Run3.png","Run5.png","Run6.png")
startbtnimg = loadImage("start.png")
obs1 = loadImage("obstacle1.png")
obs2 = loadImage("obstacle2.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg1 = createSprite(width/2,height/2,windowWidth,windowHeight);
  bg1.addImage(back);
  bg1.scale = 3.5
 

  boy = createSprite(120,height-250, 50, 50);
  boy.addImage(boyimg)
  boy.scale = 0.5;
  boy.visible = true;
  
  boy2 = createSprite(120,height-245, 50, 50);
  boy2.addAnimation("run",boyrun)
  boy2.scale = 0.5;
  boy2.visible = false;


  startbtn = createSprite(width/2,height/2,50,20)
  startbtn.addImage(startbtnimg);
  startbtn.scale =0.09
  

  obsGroup = new Group();
}

function draw() {
  background(0);
  if(touches.length>0 || mousePressedOver(startbtn)) { 
    touches = [];
    gameState = PLAY;
  }
  if(gameState===PLAY){
    startbtn.visible = false;
    boy.addAnimation(boyrun)
    boy2.visible = true;
    boy.visible = false;
    bg1.velocityX = -6
    //bg2.velocityX = -3 
    if (bg1.x < 500){
      bg1.x = width/2;

      
    }
 
    obstacle();
if(boy2.isTouching(obsGroup)){
  gameState= OVER
  console.log("OVER")
}

console.log("PLAY")
  } else if(gameState===OVER){

  }
  

  drawSprites();

}

function obstacle(){
  if(World.frameCount%167 === 0){
var obs = createSprite(width-20,height-170,20,60)

rand = Math.round(random(1,4));
console.log(rand)
switch(rand){
  case 1 : obs.addImage(obs1);
  break;
  case 2 : obs.addImage(obs2);
  break
  case 3 : obs.addImage(obs1);
  break;
  case 4: obs.addImage(obs2);
  break;

  default: break;
}

obs.scale = 0.3;
obs.velocityX = -5;
obs.lifetime = 500;
obsGroup.add(obs);
  }
}