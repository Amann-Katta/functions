var fixedRect, movingRect;
var gameObject1;

function setup() {
  createCanvas(1200,800);
  gameObject1 = createSprite(100, 100, 50, 50)
  gameObject1.shapeColor = "green";
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -1;
  movingRect.velocityX = 1
  fixedRect.velocityY = 1;
  fixedRect.velocityX = -1;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
   /*if (isTouching(movingRect, gameObject1)) {
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "green"
      gameObject1.shapeColor = "red";
   }
   else if (isTouching(movingRect, fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    gameObject1.shapeColor = "green";
 }
  else {
   movingRect.shapeColor = "green";
   fixedRect.shapeColor = "green";
   gameObject1.shapeColor = "green";
 }
*/

  bounceOff(movingRect, fixedRect);



  drawSprites();
}

