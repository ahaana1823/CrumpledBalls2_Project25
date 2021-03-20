
var paperBall1;
var trashCan1;
var trashCan2;
var trashCan3;
var ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    paperBall1 = new paperBall(75,560,20);
	ground1 = new ground(400, 675, 800, 45)
	Engine.run(engine);

  trashCan1 = createSprite(500, 605, 20, 100)
  trashCan2 = createSprite(600, 645, 200, 20)
  trashCan3 = createSprite(700, 605, 20, 100)
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  drawSprites(); 
  paperBall1.display();
  ground1.display();
}

function keyPressed () {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperBall1.body, 
    paperBall1.body.position,{x:55,y:-55})
  }
}



