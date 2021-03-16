
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
const constraint = Matter.Constraint;

var boy ,boyImg;
var stones;
var tree , treeImg;
var mango1,mongo2,mongo3,mongo4,mango5,mongo6,mango7,mango8;



function preload(){
treeImage=loadImage("tree.png");
boyImage=loadImage("boy.png");
	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground();
	stone=new Stone(1000,460,23);

	tree=createSprite(775,368);
	tree.addImage(treeImage);
	tree.scale=0.42;

	boy=createSprite(160,550);
	boy=addImage(boyImage);
	boy.scale=0.125;

	mango1=new mango(730,200,35);
	mango2=new mango(710,320,36);
	mango3=new mango(780,250,35);
	mango4=new mango(825,170,33);
	mango5=new mango(880,260,35);
	mango6=new mango(940,220,35);
	mango7=new mango(980,305,35);
	mango8=new mango(600,210,34);

	attach = new Throw(stone.body,{x:100,y:465});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  fill("black");
  text(20);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  
  
  drawSprites();

  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
}

function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollion(lstone,mango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPositionPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
		}
}

function KeyPressed(){
	if(keycode === 32){	
Matter.body.setPosition(stone.body,{x:100,y:465});
attach.launch(stone.body);
	}
}


