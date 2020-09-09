
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Dustbin;
var ground1;
var Paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Dustbin = new dustbin(900,330);
	ground1 = new ground (600,350,1200,20);
    Paper = new paper (200,200,5);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Dustbin.display();
  ground1.display();
  Paper.display();

  drawSprites();
 
}



