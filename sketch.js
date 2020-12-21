const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var roof;
var line1, line2, line3, line4, line5;
var bob1, bob2, bob3, bob4, bob5;

function setup() {
	createCanvas(windowWidth,600);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(500,200,2000,20);

	bob = new Bob(250,300,20,20);

	Engine.run(engine);
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  
  roof.display();
 // bob.display();
}