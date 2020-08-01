/*
    Player's battleship.
    Moves with mouse.
    Left click shoots a lazer!
    Button G does a random thing that I didn't think of yet.
*/

function Battleship(){

    this.x = 0;
    this.y = 0;
    this.img = loadImage('battleship.png');
    this.shootState = false;

    this.shoot = function(){
        console.log("pew!");
        this.shootState = true;
    };

    this.unshoot = function(){
        console.log("unpew!");
        this.shootState = false;
    };

    this.update = function(){
        this.x = mouseX;
        this.y = mouseY;
    };

    this.deleteEnemies = function(){
        for (var i = 0; i < enemies.length; i++) {
            if((enemies[i].x < 0) || (enemies[i].x > this.x && enemies[i].x < width && enemies[i].y - 0 < this.y && enemies[i].y + 64 > this.y)){
                enemies.splice(i,1);
            }
        }
    };

    this.draw = function(){
        if(this.shootState){
            strokeWeight(5);
            stroke(50, 255, 0);
            line(this.x, this.y, width, this.y);
            strokeWeight(2);
            stroke(255, 100, 100);
            line(this.x, this.y, width, this.y);
            this.deleteEnemies();
        }

        image(this.img, this.x - 128, this.y - 128);
    };

}