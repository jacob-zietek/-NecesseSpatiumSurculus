// Background is a modified version of Daniel Shiffman's Blue Rain 
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI

function Drop() {
  this.x = random(0, width + 1000);
  this.y = random(0, height);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 2, 5);
  this.xspeed = map(this.z, 0, 20, 1, 10);

  this.fall = function() {
    this.x = this.x - this.xspeed;

    if (this.x < 0) {
      this.x = random(width + 50, width + 1000);
      this.xspeed = map(this.z, 0, 20, 4, 10);
    }
  };

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(255, 255, 255);
    line(this.x, this.y, this.x + this.len, this.y);
  };
}