const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,box1,box2,box3,box4,box5,bird1,log1,log2,log3,log4,g,pig1,pig2,rock1;



function setup() {
  createCanvas(1200,400);
  
engine=Engine.create();
world=engine.world;






//console.log(object);

box1 = new Box(800,370,50,50);
box2 = new Box(700,370,50,50);
log1 = new log (750,320,10,200,PI/2);
box3 = new Box(800,300,50,50);
box4 = new Box(700,300,50,50);
log2 = new log(750,250,10,200,PI/2);
box5 = new Box(750,230,50,50);
log3 = new log(780,220,10,80,-PI/4);
log4 = new log(750,220,10,80,PI/4);
pig1 = new pig(750,370,20,40);
pig2 = new pig(750,320,20,40);

bird1 = new bird(250,200,50,50);
rock1 = new Ground(250,300,200,200);


g = new Ground(600,390,1200,20);

}

function draw() {
  background("black");
  Engine.update(engine);
  console.log(box1.body.angle)
  
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  log1.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  pig1.display();
  pig2.display();
  bird1.display();
  rock1.display();
  g.display();
 
  
}