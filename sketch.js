var bg;
var player1,player2,plrImg1,plrImg2
var ball,ballImg;
player2.setCollider("Rectangle",0,0,100,100)
var goal1, goal2;
var player1Score = 0, player2Score = 0;
var celebration;


function preload()
{
bg = loadImage("Images/Field.jpg")
plrImg1 = loadImage("Images/football1.png")
plrImg2 = loadImage("Images/football2.png")
ballImg = loadImage("Images/Football.png")
}

function setup() 
{
  
  createCanvas(displayWidth - 25,displayHeight - 25);

  
  player1 = createSprite(250,500)
  player1.addImage(plrImg1)
  player1.scale = 0.255
  player1.debug = true

  player2 = createSprite(1600,550,100,100)
  player2.addImage(plrImg2)
  player2.scale = 0.25
  player2.debug = true
  

  ball = createSprite(displayWidth/2 - 20,displayHeight/2 - 25)
  ball.addImage(ballImg)
  ball.scale = 0.25

  goal1 = createSprite(40,515,70,300)
  goal1.visible = false

  goal2 = createSprite(1850,515,70,300)
  goal2.visible = false
  

  edges = createEdgeSprites();
  
  
  
}

function draw() 
{
  console.log(player1Score, player2Score)
  background(bg)
  if(keyDown(UP_ARROW)){
    player1.velocityY = -5
  }
  if(keyDown(DOWN_ARROW)){
    player1.velocityY = 5
  }
  if(keyDown(LEFT_ARROW)){
    player1.velocityX = -5
  }
  if(keyDown(RIGHT_ARROW)){
    player1.velocityX = 5
  }

  if(keyDown("w")){
    player2.velocityY = -5
  }
  if(keyDown("s")){
    player2.velocityY = 5
  }
  if(keyDown("a")){
    player2.velocityX = -5
  }
  if(keyDown("d")){
    player2.velocityX = 5
  }


  edges = createEdgeSprites();
  player1.bounceOff(edges[0])
  player1.bounceOff(edges[1])
  player1.bounceOff(edges[2])
  player1.bounceOff(edges[3])
  player1.bounce(player2)
  player1.debug = true
  
  player2.bounceOff(edges[0])
  player2.bounceOff(edges[1])
  player2.bounceOff(edges[2])
  player2.bounceOff(edges[3])

  ball.bounceOff(player1)
  ball.bounceOff(player2)
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[1])

  if(ball.isTouching(goal1) || ball.isTouching(goal2))
  {
    celebration = createSprite(displayWidth,displayHeight)
    if(ball.isTouching(goal1))
    {
      player1Score += 1
    }
  
    if(ball.isTouching(goal2))
    {
    player2Score += 1
    }
  }
  drawSprites();
  
  
}

