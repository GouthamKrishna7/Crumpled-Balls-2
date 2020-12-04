const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var paper;
var ground;
var box1,box2,box3;

function setup() {
	createCanvas(1600, 700);

 engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//	Engine.run(engine);
  paper = new Paper(200,310,70);
  ground = new Ground(400,660,2500,20);
  box1 = new Dustbin();
  box2 = new Dustbin();
  box3 = new Dustbin();
}


function draw() {
  background(255);
  Engine.update(engine);
  ground.display();
  paper.display();
  box1.display();
  box3.display();
  box2.display();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:118,y:-118});
  }
 

}



