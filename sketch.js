var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var count=0;
var state="play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  stroke("white");
 fill("white");
  textSize(30);
 text("Score : "+score,20,30);
 text("500",15,550);
 text("500",95,550);
 text("500",175,550);
 text("500",255,550);
 text("200",335,550);
 text("200",415,550);
 text("200",495,550);
 text("100",575,550);
 text("100",655,550);
 text("100",735,550);
 
  Engine.update(engine);
  if(state==="play"){
if(particle!=null)
{
  particle.display();
  if(particle.body.position.y>760)
  {
    if(particle.body.position.x<300)
    {
      score+=500;
    }
    if(particle.body.position.x>300 && particle.body.position.x<500)
    {
      score+=200;
    }
    if(particle.body.position.x>500 && particle.body.position.x<800)
    {
      score+=100;
    }
    particle=null;
      if(count>=5){
        state="end";
      }
  }
}
}
  
else if(state==="end")
{
  stroke("white");
  fill("white");
  textSize(30);
  text("GAME OVER!",300,450);
}
for (var i = 0; i < plinkos.length; i++) {
     
  plinkos[i].display();
  
}

for (var k = 0; k < divisions.length; k++) {
  
  divisions[k].display();
}
}

function mousePressed(){
  if(state!=="end")
  {
    count++;
    particle=new Particle(mouseX,10,10,10);
  }
}