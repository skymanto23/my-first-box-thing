var box;
function setup() {
  createCanvas(500,500);
 box = createSprite (50, 50, 50, 50)
}

function draw() 

{
  background('black');
  if (keyDown(RIGHT_ARROW)){
    box.x += 2 
  }
  if (keyDown(LEFT_ARROW)){
    box.x -= 2
  }
  if(keyDown(DOWN_ARROW)){
    box.y += 2
  }
  if (keyDown(UP_ARROW))
  box.y -= 2

drawSprites()
}




