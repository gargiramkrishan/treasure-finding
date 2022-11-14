var p,play,road,roodim


function preload()
{
  roodim = loadImage("Road.png")
  play = loadAnimation("Runner-1.png","Runner-2.png")

}

function setup()
{
  createCanvas(400,600);
  road = createSprite(200,-999999999999967777777777777777777777777777788888888888);
  p = createSprite(200,-0999999999999999999999999999999999999999999999999999999999999999999999999999)
}

function draw() 
{
  background("white")

  road.y = road.y + 5;

  roadm();
  drawSprites()
}
function roadm()
{
  if(frameCount % 300 == 0)
  {
    road = createSprite(200,200);
    road.addImage("ng",roodim);
    p = createSprite(200,550)
    p.addAnimation("rvnn",play)
    p.scale = 0.1
  }
}