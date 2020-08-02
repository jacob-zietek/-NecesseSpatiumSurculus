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
    this.burnOut = false;
    this.burnOutTimer = 0;

    this.shoot = function(){
        console.log("pew!");
        this.shootState = true;
    };

    this.unshoot = function(){
        console.log("unpew!");
        this.shootState = false;
        shootTimer = 0;
    };

    this.update = function(){
        this.x = mouseX; // Updates the Battleship's position
        this.y = mouseY;
        
        switch(this.burnOut){ // Handles the laser burnout system.
            case false:
                if(this.shootState){
                    shootTimer++;
                    if(shootTimer > map(gameScore, 0, 100000, 80, 20)){ // Time to fire before burnout is inverse to score. Makes the game harder as time goes on.
                        this.burnOut = true;
                        this.shootTimer = 0;
                    }
                    console.log(shootTimer);
                }
            break;
            
            case true:
                this.shootState = false;
                this.burnOutTimer++;
                if(this.burnOutTimer > 160){
                    this.burnOut = false;
                    this.burnOutTimer = 0;
                }
            break;
        }
    };

    this.deleteEnemies = function(){ // Checks to clean up or destroy enemies and handles them accordingly
        for (var i = 0; i < enemies.length; i++) {
            if((enemies[i].x < 0) || (enemies[i].x > this.x && enemies[i].x < width && enemies[i].y - 0 < this.y && enemies[i].y + 64 > this.y)){
                if(enemies[i].x > 0){
                    gameScore = gameScore + 200;
                }
                enemies.splice(i,1);
            }
        }
    };

    this.draw = function(){

        if(this.shootState){ // Draws laser if appropriate
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