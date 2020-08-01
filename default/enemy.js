/*
    Enemy ufo.
    Spawns randomly on the right side.
    Dies when hit with lazer.
    Kills battleship on collision with it.
    Ends game on collision.
    @TODO MOVEMENT
*/

function Enemy(){
    this.x = width + random(64, 100);
    this.y = random(0, height);
    this.vel = random(5, 7);

    this.update = function(){
        this.x = this.x - this.vel;
        // Checks for collision w/ player.
        if((this.x+64 > battleship.x-128 && this.x < battleship.x+128) && (this.y < battleship.y+64 && this.y+64 > battleship.y-64)){
            gameState=false;
        }
    };

    this.draw = function(){
        image(ufoImg, this.x, this.y);
    };
}