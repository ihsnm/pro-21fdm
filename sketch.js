
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;

var ball 
var Ground

function preload()
{
	
}

function setup() {
	createCanvas(1280, 720);

	engine = Engine.create();
	world = engine.world;

	land = new Ground(200.390,400,20)
	left = new Ground(800,200,20,400)
	right = new Ground(1000,200,20,400)

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	var land_options={
    isStatic:true
	}

    ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball)

	Engine.run(engine);
}


function draw() {

  background(0);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ground.show()
  left.show()
  right.show()

  ellipseMode(ball.position.x,ball.position.Body,20)
  Engine.update(engine);

  drawSprites();
 
}



