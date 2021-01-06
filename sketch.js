const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ball,ground;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
  
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(0,399, 800, 1, ground_options)
  World.add(world, ground)

  var ball_options={
    restitution:1
  }
  ball=Bodies.circle(200, 1, 10, ball_options)
  World.add(world, ball)

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  
  rect(ground.position.x, ground.position.y, 800, 1)
  ellipse(ball.position.x, ball.position.y, 10)

  drawSprites();
}