var car1;
var wall1;
var speed1;
var weight1;
function setup() {
  createCanvas(1200,600);

  background(0);

  speed1=random(55,90);

  weight1=random(400,1500);

  car1=createSprite(100,100,70,50);

  car1.velocityX=speed1/10

  wall1=createSprite(1000,100,20,100);

}

function draw() {
  background(0);
collide();

  drawSprites(); 
}

function collide(){
  if(wall1.x-car1.x<(wall1.width+car1.width)/2){
    var deformation=0.5*weight1*speed1*speed1/22509
    
    if(deformation>180){
    car1.shapeColor=color(255,0,0);
    car1.velocityX=0;
    }
    
    else if(deformation<180 && deformation>100){
      car1.shapeColor=color(230,230,0);
      car1.velocitX=0;
    }
    
    else 
    car1.shapeColor=color(0,255,0);
      car1.velocityX=0;
    
    }
}