// * GLOBAL VARIABLES
let counter = 0;

// canvas setup
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

//dom elements - when I click this button something will happen
let startBtn = document.querySelector("#start-btn");
let restartBtn = document.querySelectorAll(".restart-btn");
let splashScreen = document.querySelector("#splash-screen");
let gameoverScreen = document.querySelector("#gameover-screen");
let gamewiningScreen = document.querySelector("#gamewining-screen");

//game object
let game;

// * FUNCTIONS
const startGame = () => {
  splashScreen.style.display = "none";
  canvas.style.display = "flex";
  game = new Game();
  game.gameLoop();
  game.audio.play();
};

const restartGame = () => {
  gameoverScreen.style.display = "none";
  gamewiningScreen.style.display = "none";
  canvas.style.display = "flex";
  game.audio.pause();
  game = new Game();
  game.gameLoop();
  game.audio.play();
};

// * ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);
restartBtn.forEach((eachBtn) => eachBtn.addEventListener("click", restartGame)); //The querySelectorAll creates an array and that's why I have to do the forEach

canvas.addEventListener("click", () => {
  //here I wanna make the mask stop!
  game.maskStop();
  game.maskFit();
});
