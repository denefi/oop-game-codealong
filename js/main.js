//Define Class Player
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
//Define class Obstacle
class Obstacle {
  constructor() {
    //generate random positon from which the obstacle will fall.
    //Max number is 90 because the obstacle has a width of 10vw.
    this.positionX = Math.floor(Math.random() * 90);
    this.positionY = 100;
    this.obstacleDiv = document.createElement("div");
    this.parentElm = document.getElementById("board");
    //call the addDomElement method to append the new obstacle div to the DOM. 
    this.addDomElement();
  }
  addDomElement() {
    this.obstacleDiv.className = "obstacle"
    this.obstacleDiv.style.left = this.positionX +"vw";
    this.parentElm.appendChild(this.obstacleDiv);
  }
  moveDown() {
    this.positionY--;
    this.obstacleDiv.style.bottom = this.positionY + "vh";
    this.checkDeath();
  }
  checkDeath() {
    //remove Div from DOM and the obstacle from obstacles array. 
    if(this.positionY < -10) {
      this.parentElm.removeChild(this.obstacleDiv);
      obstacles.shift();
    }
  }
}
//initialize Player 
myPlayer = new Player();
const obstacles = [];
//set Intervall for creatign objects
setInterval(() => { 
  obstacles.push(new Obstacle);
  console.log(obstacles)
}, 5000);
//set interval for movement of obstacles
setInterval(() => {
  for (obstacle of obstacles) {
    obstacle.moveDown();
  }
}, 100); 
//Event listener for Player movement with arrow keys. 
document.addEventListener("keydown", (event) =>{
    if (event.key === "ArrowLeft") {
        myPlayer.moveLeft();
    }
    else if (event.key === "ArrowRight") {
       myPlayer.moveRight(); 
    }
} )
 
