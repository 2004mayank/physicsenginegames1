
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
   restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,350,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

 box=Bodies.rectangle(200,0,50,50)
 World.add(world,box)

 box2=Bodies.rectangle(200,50,50,50)
 World.add(world,box2);

 box3=Bodies.rectangle(200,100,50,50)
 World.add(world,box3);

 box4=Bodies.rectangle(200,100,50,50)
 World.add(world,box4);

 box5=Bodies.rectangle(200,100,50,50)
 World.add(world,box5);

 box6=Bodies.rectangle(200,100,50,50)
 World.add(world,box6);


  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill("green")
  ellipse(ball.position.x,ball.position.y,20);
  fill("blue")
  rect(ground.position.x,ground.position.y,400,20);
  fill("yellow")
  rect(box.position.x,box.position.y,50,50);
  rect(box2.position.x,box2.position.y,50,50);
  rect(box3.position.x,box3.position.y,50,50);
  rect(box4.position.x,box4.position.y,50,50);
  rect(box5.position.x,box5.position.y,50,50);
  rect(box6.position.x,box6.position.y,50,50);

  ball.position.x=mouseX
  ball.position.y=mouseY


}

