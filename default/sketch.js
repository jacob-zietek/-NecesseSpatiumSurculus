var drops; // "Stars"
var cnv; // Canvas
var battleship; // Player controlled battleship
var enemies; // Array of type Enemy (UFO things)
var ufoImg; // UFO png
var gameState; // State of the game, for use in fctn draw
var gameScore; // Player's score for the game
var shootTimer; // For use in laser burnout mechanic

function setup() { // Sets up variables to run game
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(0,0,0);
  drops = [];
  for (var i = 0; i < 45; i++) {
    drops[i] = new Drop();
  }
  enemies = [];
  battleship = new Battleship();
  ufoImg = loadImage('ufo-icon.png');
  gameScore = 0;
  gameState = "active";
  //cnv.hide();
}

function draw() {
  switch(gameState){
    case "active": // Active gamestate runs the game
                   // Be sure to run setup() to restart game
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
      textSize(12);
      stroke(255, 255, 255);
      strokeWeight(.5);
      text('Official support for Jacob Zietek\'s Linux Desktop', 10, 30);
      text("Score: " + gameScore, 10, 50)
      fill(255, 255, 100);
      gameScore++;
    break;

    case "gameOver": // Runs after player loses game
      background(0);
      textSize(60);
      stroke(255, 255, 255);
      strokeWeight(.5);
      text('Game over!', 10, 80);
      text("Score: " + gameScore, 10, 200)
      text("Click on the screen to restart", 10, 320)
      fill(255, 255, 100);
    break;
  }
}

function mousePressed() {
  if(gameState == "gameOver"){ // Restarts game on game over screen
    setup();
  }
  battleship.shoot();
}

function mouseReleased(){
  battleship.unshoot();
}
