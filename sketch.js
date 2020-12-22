var rect1 , rect2;


function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 100, 50, 50);
  rect2 = createSprite (400,300,50,50);
  rect1.debug = true;
  rect2.debug = true;
  rect1.velocityY = 5;
  rect2.velocityY = -5;
}

function draw() {
  background(255,255,255); 
  
  bounceOff(rect1,rect2);
  if (isTouching(rect1,rect2)){
    rect1.x = 100;
    rect2.y = 300;
  }else{

    rect1.shapeColor = "green";
    rect2.shapeColor = "blue";

  }


  drawSprites();
}