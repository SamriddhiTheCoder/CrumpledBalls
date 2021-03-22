
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1000, 300);

	engine = Engine.create();
	world = engine.world;

	ball = new Paper(100, 150, 20);
  
  ground = new Ground(500, 290, 1000, 20);

  wall1 = new Basket(850, 230, 30, 100);
  wall2 = new Basket(700, 230, 30, 100);
  wall3 = new Basket(775, 265, 120, 30);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  
  Engine.update(engine);
  background(0);
  
  ball.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();

  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position, {x:65, y:-65});
  }
}

