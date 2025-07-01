//0-cube
//1-T
//2-I
//3-S
//4-Z
//5-J
//6-L
const tilesModels = [
    "./src/tile_0.png",
    "./src/tile_1.png",
    "./src/tile_2.png",
    "./src/tile_3.png",
    "./src/tile_4.png",
    "./src/tile_5.png",
    "./src/tile_6.png",
];

let tileNumber = 10;
let canvasMaxSizeW = 0.2;
let canvasMaxSizeH = 0.9;
let canvasSize = (canvasMaxSizeH * window.innerHeight) / window.innerWidth;
if (canvasSize > canvasMaxSizeW * 2) {
    canvasSize = canvasMaxSizeW * 2;
}
let canvasHeight = canvasSize * window.innerWidth;
let canvasWidth = canvasHeight / 2;
let tileSize = canvasWidth / tileNumber;

let gameFrameRows = Math.round(canvasHeight / tileSize - 1);
let gameFrameCols = Math.round(canvasWidth / tileSize - 1);

let fallDelay = 500;

let level = 0;
let lines = 0;
let combos = [0];
let score = 0;

let lineScore = 10;
let moveDownScore = 1;
let fallDelayDecese = 25;
let fallDelayMin = 25;
let LevelUpLinesCount = 10;

let gameOver = false;

let moveDelay = 30;

let userRandomForm = [0, 1, 2, 3, 4, 5, 6];

let formsArray = [];
for (let i = 0; i < 4; i++) {
    let x = Math.floor(Math.random() * userRandomForm.length);
    formsArray.push(x);
}
let canHold = true;
let holdForm = -1;
