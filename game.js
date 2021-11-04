class Game {
  constructor() {
    this.mask = new Mask();
    this.arrOfMask = [new Mask()];
    this.isGameover = false;
    this.freeze = false;
    this.maskFited = false;
    this.audio = new Audio(
      "./images/Cardi_B_ft_iMarkkeys_-_Corona_Virus(koboinfo.com).mp3"
    );
  }

  gameover = () => {
    this.audio.pause();
    this.isGameover = true;
    canvas.style.display = "none";
    gameoverScreen.style.display = "flex";
  };

  gamewining = () => {
    this.audio.pause();
    this.isGameover = true;
    canvas.style.display = "none";
    gamewiningScreen.style.display = "flex";
  };

  spawnMasks = () => {
    let lastIndex = this.arrOfMask.length - 1;
    let lastMask = this.arrOfMask[lastIndex];
    if (lastMask.x === canvas.width) {
      let newMask = new Mask();
      this.arrOfMask.push(newMask);
    }
  };

  maskStop = () => {
    this.freeze = true;
    counter++;
  };

  maskFit = () => {
    console.log(counter);
    if (
      this.arrOfMask[this.arrOfMask.length - 1].x >= 320 &&
      this.arrOfMask[this.arrOfMask.length - 1].x <= 335
    ) {
      this.maskFited = true;
      this.gamewining();
    } else {
      restartGame();
      if (counter % 3 === 0) {
        this.maskFited = false;
        this.audio.pause();
        this.gameover();
        counter = 0;
      }
    }
  };

  gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.arrOfMask.forEach((eachMask) => {
      eachMask.drawMask();
    });

    this.spawnMasks();

    if (!this.freeze) {
      this.arrOfMask.forEach((eachMask) => {
        eachMask.maskMove();
      });
    }

    // * ANIMATION FRAME AND GAME LOGIC CHANGES
    if (!this.isGameover) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
