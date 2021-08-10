var jet, jetImg;
var fighter, fighterImg;
var bullet, bulletImg;
var Back, backgroundImg;
var score = 0;
var point;
function preload() {
  jetImg = loadImage("jet.png");
  fighterImg = loadImage("fighter.png");
  bulletImg = loadImage("bullet.png");
  backgroundImg = loadImage("background.png");
}

function setup() {
  createCanvas(2000, 400);
  jet = createSprite(100, 200, 50, 50);
  jet.addImage(jetImg);
  jet.scale = 0.5;
  point = createSprite(400, 1, 1, 800);
  point.visible = false;
}

function draw() {
  background(backgroundImg);
  if (frameCount % 160 === 0) {
    fighter = createSprite(2000, random(0, 400), 50, 50);

    fighter.addImage(fighterImg);
    fighter.scale = 0.5;
    fighter.velocityX -= 5;
    fighter.setLifetimeEach -= 1;
  }

  jet.x = mouseX;
  jet.y = mouseY;
  Destroy();
  drawSprites();
}
function mouseClicked() {
  bullet = createSprite(jet.x, jet.y);
  bullet.addImage(bulletImg);
  bullet.scale = 0.1;
  bullet.velocityX = 5;
}
function Destroy() {
  if (bullet.isTouching(fighter)) {
    fighter.destroyEach();
    bullet.destroyEach();
    fill("Black");
    textSize("30");
    text("Score" + score, 500, 100);
  }
}
