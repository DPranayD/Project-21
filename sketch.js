var bullet;
var wall;
var s;
var w;
var t;

function setup() {
  createCanvas(1600,400);

  s = random(223,321);
  w = random(30,52);
  t = random(22,83);

  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor("white");
  bullet.velocityX = s;

  wall = createSprite(1200,200,t,height/2);
  wall.shapeColor = color(80,80,80);

  
}

function draw() {
  background(255,255,255);  

    if(hasCollided(bullet,wall)) {
      bullet.velocityX = 0;
      var damage = 0.5 * w * s * s/(t * t * t);

     if(damage > 10){
       wall.shapeColor = color(255,0,0);
     }

     if(damage < 10){
       wall.shapeColor = color(0,255,0);
     }
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = bullet.x + bullet.width;
  wall.LeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  } 
  return false;
}