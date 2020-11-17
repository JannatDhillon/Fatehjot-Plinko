const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var particles=[]
var plinkos=[]
var divisions=[]
var x

function setup() {
  createCanvas(480,675);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(240,670,width,20)

  for (var i=0;i<=width;i=i+80){
    divisions.push(new Div(i,550,10,250))
  }
  for (var i=15;i<=width;i=i+60){
    plinkos.push(new Plinko(i,60))  
}
for (var i=45;i<=width;i=i+60){
  plinkos.push(new Plinko(i,100))  
}
for (var i=15;i<=width;i=i+60){
  plinkos.push(new Plinko(i,140))  
}
for (var i=45;i<=width;i=i+60){
  plinkos.push(new Plinko(i,180))  
}
for (var i=15;i<=width;i=i+60){
  plinkos.push(new Plinko(i,220))  
}
for (var i=45;i<=width;i=i+60){
plinkos.push(new Plinko(i,260))  
}
for (var i=15;i<=width;i=i+60){
plinkos.push(new Plinko(i,300))  
}
for (var i=45;i<=width;i=i+60){
plinkos.push(new Plinko(i,340))  
}
 

}

function draw() {
  background(0);
  Engine.update(engine);

  ground.display(); 

  for(var u=0;u<plinkos.length;u=u+1){
    plinkos[u].display();
   } 

  if(frameCount%90===0){
    particles.push(new Particle(random(50,350),0))
  }
  
  for(var d=0;d<divisions.length;d=d+1){
    divisions[d].display();
    }    
  
  for(var z=0;z<particles.length;z=z+1){
     particles[z].display();
    } 
  }