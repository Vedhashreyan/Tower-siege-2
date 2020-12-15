const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;
var backgroundIMG;

function preload(){
  polygonImg=loadImage("polygon.png");
  
}
function setup() {
  var canvas = createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 
  b1=new Box(480,275);
  b2=new Box(510,275);
  b3=new Box(540,275);
  b4=new Box(570,275);
  b5=new Box(600,275);
  b6=new Box(450,275);
  b7=new Box(630,275);
  b8=new Box(480,235);
  b9=new Box(510,235);
  b10=new Box(540,235);
  b11=new Box(570,235);
  b12=new Box(600,235);
  b13=new Box(500,195);
  b14=new Box(530,195);
  b15=new Box(560,195);
  b16=new Box(530,155);
  b17=new Box(800,100);
  b18=new Box(800,140);
  b19=new Box(830,140);
  b20=new Box(770,140);
  b21=new Box(800,180);
  b22=new Box(830,180);
  b23=new Box(860,180);
  b24=new Box(770,180);
  b25=new Box(740,180);
  ground1=new Ground(500,390,1000,20);
  ground2=new Ground(540,305,250,20);
  ground3=new Ground(800,205,250,20);
  // var options={
  //   density:2.5,
  //   restitution:0.5,
  //   friction:1.2,
  // }
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingShot = new SlingShot(this.polygon,{x:200,y:200});
}
function draw() {
  background(0); 
  //Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  fill("lightgreen");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill("blue");
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill("red");
  b13.display();
  b14.display();
  b15.display();
  fill("yellow");
  b16.display();
  fill("yellow");
  b17.display();
  fill("red");
  b18.display();
  b19.display();
  b20.display();
  fill("blue");
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  ground1.display();
  ground2.display();
  ground3.display();
  imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
  // drawSprites();
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}