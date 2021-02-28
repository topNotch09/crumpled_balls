var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2-300, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1

	//helicopterSprite=createSprite(width/2, 200, 10,10);
	//helicopterSprite.addImage(helicopterIMG)
	//helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2-300 , 620 , 5 , {restitution:0.5 , isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width+200, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1 = new Box(width/2+250, 590, 190,10,{isStatic:true});
	box2 = new Box(width/2+160, 430, 10,30,{isStatic:true});
	box3 = new Box(width/2+340, 430, 10,30,{isStatic:true});
	World.add(world,box1);
	World.add(world,box2);
	World.add(world,box3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  box1.display();
  box2.display();
  box3.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === RIGHT_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    //Matter.Body.setStatic(packageBody, false);
	packageBody.y += 20
	packageBody.x += 400

    
  }
}



