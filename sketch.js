
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	//render = Render.create();
	//world = render.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,656);
	paperball= new Paper(200,200,25)

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  if(keyDown("up"))
  {
	  Body.applyForce(paperball.body,paperball.body.position,{x:30,y:-45});
  }
 

  groundObject.display();
  paperball.display();
  dustbinObj.display();

}

