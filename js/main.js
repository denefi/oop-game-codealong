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
class Obstacle {
  constructor() {
    this.positionX = Math.floor(Math.random() * 90);
    this.positionY = 100;
    this.obstacleDiv = document.createElement("div");
    this.createDomElement();//create dom element
  }
  createDomElement() {
    this.obstacleDiv.className = "obstacle"
    const parentElm = document.getElementById("board");
    this.obstacleDiv.style.left = this.positionX +"vw";
    parentElm.appendChild(this.obstacleDiv);
  }
  moveDown() {
    this.positionY--;
    this.obstacleDiv.style.bottom = this.positionY + "vh";


  }
}
myPlayer = new Player();
const obstacles = [];
setInterval(() =>  obstacles.push(new Obstacle), 5000);
setInterval(() => {
  for (obstacle of obstacles) {
    obstacle.moveDown();
  }
}, 100); 

document.addEventListener("keydown", (event) =>{
    if (event.key === "ArrowLeft") {
        myPlayer.moveLeft();
    }
    else if (event.key === "ArrowRight") {
       myPlayer.moveRight(); 
    }
} )
 
