
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

  paper=new Paper(80,200,70);

  wall1=Bodies.rectangle(870,270,10,150,{isStatic:'true'});
  World.add(world,wall1);

  wall2=Bodies.rectangle(1024,270,10,150,{isStatic:'true'});
  World.add(world,wall2);

	//Create the Bodies Here.
  ground = new Ground(600,350,1200,10);
  //dustbin = new Dustbin(850,300,10,100);
  //dustbin1 = new Dustbin(1050,300,10,100);
  dustbin2 = new Dustbin(945,240,10,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  paper.display();
  ground.display();
  //dustbin.display();
  //dustbin1.display();
  dustbin2.display();
  rect(wall1.position.x,wall1.position.y,10,150);
  rect(wall2.position.x,wall2.position.y,10,150);
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){

      Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }

}



