
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700); // increasing canvas size


	engine = Engine.create();
	world = engine.world;
ground = new Ground(800, 70, 700, 20)
bob1 = new Bob(200, 210)
bob2 = new Bob(260, 210)
bob3 = new Bob(320, 210)
bob4 = new Bob(380, 210)
bob5 = new Bob(440, 210)
rope1 = new Rope(ground.body, bob1.body)
rope2 = new Rope(ground.body, bob2.body)
rope3 = new Rope(ground.body, bob3.body)
rope4 = new Rope(ground.body, bob4.body)
rope5 = new Rope(ground.body, bob5.body)








	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



