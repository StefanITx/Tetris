const canvasesContainer = document.getElementById("canvasesContainer");
canvasesContainer.style.width = `${canvasWidth}px`;
canvasesContainer.style.height = `${canvasHeight}px`;

const panelsWidth = canvasWidth * 1.2;
const StartPanel = document.getElementById("StartPanel");
StartPanel.style.width = `${panelsWidth}px`;
StartPanel.style.height = `${canvasHeight}px`;

const LederBoardPanel = document.getElementById("LederBoardPanel");
LederBoardPanel.style.width = `${panelsWidth}px`;
LederBoardPanel.style.height = `${canvasHeight}px`;

const gameUIWidth = canvasWidth / 1.5;
const gameUI1 = document.getElementById("gameUI1");
gameUI1.style.width = `${gameUIWidth}px`;
gameUI1.style.height = `${canvasHeight}px`;

const gameUI2 = document.getElementById("gameUI2");
gameUI2.style.width = `${gameUIWidth}px`;
gameUI2.style.height = `${canvasHeight}px`;

const nextForms = document.getElementById("nextForms");
const holdUI = document.getElementById("holdUI");

const levelPoints = document.getElementById("levelPoints");
const linesPoins = document.getElementById("linesPoins");
const combosPoins = document.getElementById("combosPoins");
const scorePoins = document.getElementById("scorePoins");

function UpdateStats() {
    levelPoints.innerText = level.toString();
    linesPoins.innerText = lines.toString();
    let text = "";
    combos.forEach((combo) => {
        text += combo.toString();
        text += " ";
    });
    combosPoins.innerText = text;
    scorePoins.innerText = score.toString();
}

function GameOver() {
    console.log("Game over!    ");
    //window.location.reload();
    gameOver = true;
}

function LoadNextForms() {
    const images = nextForms.querySelectorAll("img");
    for (let i = 0; i < 4; i++) {
        switch (formsArray[i]) {
            case 0:
                images[i].src = "./src/form_0.png";
                break;
            case 1:
                images[i].src = "./src/form_1.png";
                break;
            case 2:
                images[i].src = "./src/form_2.png";
                break;
            case 3:
                images[i].src = "./src/form_3.png";
                break;
            case 4:
                images[i].src = "./src/form_4.png";
                break;
            case 5:
                images[i].src = "./src/form_5.png";
                break;
            case 6:
                images[i].src = "./src/form_6.png";
                break;
            default:
                console.error("Wrong");
                images[i].src = "./src/form_0.png";
        }
    }
}
LoadNextForms();

function LoadHoldForm() {
    const img = holdUI.querySelector("img");
    const holdText = holdUI.querySelector("h1");
    if (holdForm === -1) {
        img.style.display = "none";
        holdText.style.display = "none";
    } else {
        img.style.display = "block";
        holdText.style.display = "block";
        switch (holdForm) {
            case 0:
                img.src = "./src/form_0.png";
                break;
            case 1:
                img.src = "./src/form_1.png";
                break;
            case 2:
                img.src = "./src/form_2.png";
                break;
            case 3:
                img.src = "./src/form_3.png";
                break;
            case 4:
                img.src = "./src/form_4.png";
                break;
            case 5:
                img.src = "./src/form_5.png";
                break;
            case 6:
                img.src = "./src/form_6.png";
                break;
            default:
                console.error("Wrong");
                img.src = "./src/form_0.png";
        }
    }
}

LoadHoldForm();
