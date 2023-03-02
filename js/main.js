class Player {
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
        this.playerElm = document.getElementById("player");

    }
    moveLeft () {
        this.positionX -- ;
        this.playerElm.style.left = this.positionX + "vw"; 
    }
    
    moveRight() {
        this.positionX ++; 
        this.playerElm.style.left = this.positionX + "vw"; 
    }
}

const myPlayer = new Player(); 

document.addEventListener("keydown", (event) =>{
    if (event.key === "ArrowLeft") {
        myPlayer.moveLeft();
    }
    else if (event.key === "ArrowRight") {
       myPlayer.moveRight(); 
    }
} )
 
