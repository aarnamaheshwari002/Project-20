var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  background("black");  
 
  speed = random(55, 90);
  weight = random(400, 1500);

  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = 80, 80, 80;
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;



}

function draw() {
  background("lightblue");  

  

if(wall.x - car.x < (car.width + wall.width/2)){

car.velocityX = 0;

var deformation = 0.5 * weight * speed * speed/22509;

if (deformation > 180){

car.shapeColor = ("red");

}

if (deformation < 180 && deformation > 100){

  car.shapeColor = ("orange");

}
if (deformation < 100){

  car.shapeColor = ("green");

}


}

  drawSprites();
}