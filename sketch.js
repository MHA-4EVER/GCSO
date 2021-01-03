var car, wall;
var speed, weight;

function setup() {

  createCanvas(1600,400);

  speed = random(55, 90);
  weight = random(1500, 400);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);

  car.velocityX = speed;

}

function draw() {

  background(0); 

  if(car.isTouching(wall)){

    car.velocityX = 0;

    var deformation = 0.5 * speed * speed * weight/22500;

    if (deformation < 100){
      car.shapeColor = color(0, 255, 0)
    }

    if (deformation > 100 && deformation < 180){
      car.shapeColor = color(230, 230, 0)
    }

    if (deformation > 180){
      car.shapeColor = color(255, 0, 0)
    }

  }
  
  drawSprites();

}