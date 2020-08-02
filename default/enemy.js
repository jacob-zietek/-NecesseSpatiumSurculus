/*
    Enemy ufo.
    Spawns randomly on the right side.
    Dies when hit with lazer.
    Kills battleship on collision with it.
    Ends game on collision.
    @TODO COMPLEX MOVEMENT
*/

function Enemy(){
    this.x = width + random(64, 100);
    this.y = random(0, height - 64);
    this.vel = random(5, 7);

    this.update = function(){
        this.x = this.x - this.vel;

        // Uses tensorflow's toxicity model to update y position

        if(MLModelOutput != undefined && MLModelOutput[1]["results"][(int)(random(0,MLModelOutput[1]["results"].length-1))]["match"])
            this.y = this.y + 1;
        else 
            this.y = this.y - 1;
        
        // Checks for collision w/ player. Standard AABB-AABB collison detection
        // @TODO add deadzones, neither objects are perfect AABBs
        if((this.x+64 > battleship.x-128 && this.x < battleship.x+128) && (this.y < battleship.y+64 && this.y+64 > battleship.y-64)){
            gameState="gameOver";
        }
    };

    this.draw = function(){
        image(ufoImg, this.x, this.y);
    };
}