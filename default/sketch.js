var drops = [];
var cnv;
var battleship;
var enemies = [];
var ufoImg;
var gameState = true;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(0,0,0);
  for (var i = 0; i < 45; i++) {
    drops[i] = new Drop();
  }
  battleship = new Battleship();
  ufoImg = loadImage('ufo-icon.png');
  //cnv.hide();
}

function draw() {
  if(gameState){
    background(0,0,0);
    if(Math.random() < 0.03){
      enemies.push(new Enemy());
    }
    for (var i = 0; i < drops.length; i++) {
      drops[i].fall();
      drops[i].show();
    }
    for (var i = 0; i < enemies.length; i++) {
      enemies[i].update();
      enemies[i].draw();
    }
    battleship.update()
    battleship.draw();
  }
}

function mousePressed() {
  battleship.shoot();
}

function mouseReleased(){
  battleship.unshoot();
}
