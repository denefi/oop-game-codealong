class Game {
  constructor(){
    this.player = null;
    this.obstacles = [];
  }
  startGame() {
    //initialize Player
    this.player = new Player();
    this.attachEventHandlers();
    //set Intervall for creatign objects
    setInterval(() => {
      this.obstacles.push(new Obstacle());
    }, 5000);
    //set interval for movement of obstacles
    setInterval(() => {
      this.obstacles.forEach((obstacle) => {
        obstacle.moveDown();
        if (obstacle.checkCollision()) {
          window.location.replace("./../you-loose.html")
        }
        obstacle.checkCollision();
        obstacle.checkObstacleOutOfScreen();
      });
      }
    , 100);
    //Event listener for Player movement with arrow keys.
  }
  attachEventHandlers() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        this.player.moveLeft();
      } else if (event.key === "ArrowRight") {
        this.player.moveRight();
      }
    });
  }
}//Define Class Player
class Player {
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
        this.width = 10;
        this.heigth = 10; 
        this.playerElm = document.getElementById("player");
        this.playerElm.style.width = this.width + "vw";
        this.playerElm.style.height = this.heigth + "vh"
    
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
    this.width = 10;
    this.heigth = 10;
    this.obstacleDiv = document.createElement("div");
    this.parentElm = document.getElementById("board");
    //call the addDomElement method to append the new obstacle div to the DOM.
    this.addDomElement();
  }
  addDomElement() {
    this.obstacleDiv.className = "obstacle";
    this.obstacleDiv.style.left = this.positionX + "vw";
    this.obstacleDiv.style.width = this.width + "vw";
    this.obstacleDiv.style.height = this.heigth + "vh";
    this.parentElm.appendChild(this.obstacleDiv);
  }
  moveDown() {
    this.positionY--;
    this.obstacleDiv.style.bottom = this.positionY + "vh";
  }
  checkCollision() {
    if (
      game.player.positionX < this.positionX + this.width &&
      game.player.positionX + game.player.width > this.positionX &&
      game.player.positionY < this.positionY + this.heigth &&
      game.player.heigth + game.player.positionY > this.positionY
    ) {
      return true;
    }
    return false;
  }
  checkObstacleOutOfScreen() {
    //remove Div from DOM and the obstacle from obstacles array.
    if (this.positionY < -10) {
      this.parentElm.removeChild(this.obstacleDiv);
      game.obstacles.shift();
    }
  }
}

const game = new Game();
game.startGame();