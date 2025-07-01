const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

canvas.width = canvasWidth;
canvas.height = canvasHeight;
let fallInterval;

/**
 * Function to update the score based on the number of full lines.
 * @param {number} linesFull - Number of full lines.
 */
function Score(linesFull) {
    // Ensure the combos array has enough elements to accommodate linesFull
    while (combos.length < linesFull) {
        combos.push(0);
    }

    // Increment the combo count for the line
    combos[linesFull - 1]++;

    // Update the score
    score += lineScore * linesFull * linesFull;

    // Update the number of lines
    lines += linesFull;

    // Level up
    while (lines >= LevelUpLinesCount) {
        // Increment the level
        level++;

        // Deduct the lines
        lines -= LevelUpLinesCount;

        // Decrease the fall delay
        fallDelay -= fallDelayDecese;
    }

    // Clear the fall interval
    clearInterval(fallInterval);

    // Reset the fall delay if it becomes too low
    if (fallDelay < fallDelayMin) {
        fallDelay = fallDelayMin;
    }

    // Reset the fall interval
    fallInterval = setInterval(Fall, fallDelay);

    // Update the statistics
    UpdateStats();
}

/**
 * Checks each row in the game frame for a full line and
 * removes the line if found, shifting the rest of the lines down.
 * After each line is shifted, it updates the score and draws the updated game frame.
 */
function FullLineCheck() {
    // Initialize variables to keep track of the number of full lines and the current row being checked
    let lineCheck = gameFrameRows;
    let linesFull = 0;

    // Loop through each row in reverse order
    while (lineCheck >= 0) {
        // Initialize a variable to keep track of whether the current row is a full line
        let fullLine = true;

        // Loop through each column in the current row
        for (let col = 0; col <= gameFrameCols; col++) {
            // If a space in the current row is empty, the row is not full
            if (gameFrame[lineCheck][col] == null) {
                fullLine = false;
                break;
            }
        }

        // If the current row is full
        if (fullLine) {
            // Increment the number of full lines found
            linesFull++;

            // Clear the current row
            for (let col = 0; col <= gameFrameCols; col++) {
                gameFrame[lineCheck][col] = null;
            }

            // Shift the rows down and update the game frame
            for (
                let rows = lineCheck - 1;
                rows >= 0 && lineCheck != 0;
                rows--
            ) {
                for (let col = 0; col <= gameFrameCols; col++) {
                    if (gameFrame[rows][col] != null) {
                        let t = gameFrame[rows][col];
                        t.moveDown();
                        gameFrame[rows][col] = null;
                        gameFrame[rows + 1][col] = t;
                    }
                }
            }

            // Draw the updated game frame
            Draw();
        } else {
            // Move on to the next row
            lineCheck--;
        }
    }

    // Update the score with the number of full lines found
    Score(linesFull);
}

/**
 * Checks if the game is over by checking if the top row is occupied.
 * If it is, the game is over and the GameOver function is called.
 */
function CheckGameOver() {
    // Initialize a variable to keep track of whether the game is over
    let checkGameOver = false;

    // Loop through each column in the game frame
    for (let col = 0; col <= gameFrameCols; col++) {
        // If a space in the top row is occupied, the game is over
        if (gameFrame[0][col] != null) {
            checkGameOver = true;
            break;
        }
    }

    // If the game is over, call the GameOver function
    if (checkGameOver) {
        GameOver();
    }
}

//cube
let spawnX = Math.floor(gameFrameCols / 2);

let form = new Form(spawnX, true);

/**
 * Spawns a new form in the game.
 * @param {boolean} random - Determines whether to spawn a random form or not.
 */
function SpawnNewForm(random) {
    // Check for full lines and update the game state if necessary
    FullLineCheck();

    // Check if the game is over and update the game state if necessary
    CheckGameOver();

    // Spawn a new form at the specified spawnX location with the provided randomness
    form = new Form(spawnX, random);
}

/**
 * Function to make the current form fall down.
 * If the fall causes the form to reach the bottom of the game frame,
 * a new form is spawned and the game continues.
 */
function Fall() {
    // If the game is over, stop the fall interval
    if (gameOver) {
        clearInterval(fallInterval);
    }

    // Move the form down
    form.moveDown(false);

    // If the form reaches the bottom of the game frame, spawn a new form and allow holding
    if (form.getFinish() == true) {
        SpawnNewForm(true);
        canHold = true;
    }
}
fallInterval = setInterval(Fall, fallDelay);

/**
 * Function to make the current form drop down as far as possible.
 * If the drop causes the form to reach the bottom of the game frame,
 * a new form is spawned and the game continues.
 * The function stops executing if the game is over.
 */
function Drop() {
    // Continue dropping the form until it reaches the bottom of the game frame
    // or if the game is over
    while (!gameOver) {
        // Move the form down
        form.moveDown(true);

        // If the form reaches the bottom of the game frame,
        // spawn a new form and allow holding
        if (form.getFinish() == true) {
            // Spawn a new form
            SpawnNewForm(true);
            // Allow holding
            canHold = true;
            // Stop dropping the form
            break;
        }
    }
}

/**
 * Function to rotate the current form clockwise.
 *
 * This function increments the rotation of the form by 1,
 * updates the form accordingly, and then changes the form
 * to reflect the new rotation.
 */
function Rotate() {
    // Increment the rotation of the form by 1
    form.setRoate(form.getRotate() + 1);

    // Change the form to reflect the new rotation
    // by calling the changeForm function
    form.changeForm();
}
let RightInterval = null;
let LeftInterval = null;
let DownInterval = null;
let canDown = true;

document.addEventListener("keydown", (e) => {
    if (!gameOver) {
        if (e.key == "ArrowRight") {
            if (RightInterval == null) {
                RightInterval = setInterval(() => {
                    form.moveRight();
                }, moveDelay);
            }
        } else if (e.key == "ArrowLeft") {
            if (LeftInterval == null) {
                LeftInterval = setInterval(() => {
                    form.moveLeft();
                }, moveDelay);
            }
        } else if (e.key == "ArrowDown") {
            if (DownInterval == null) {
                DownInterval = setInterval(() => {
                    form.moveDown(true);
                }, moveDelay);
            }
        }
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key == "ArrowRight") {
        clearInterval(RightInterval);
        RightInterval = null;
    }
    if (e.key == "ArrowLeft") {
        clearInterval(LeftInterval);
        LeftInterval = null;
    }
    if (e.key == "ArrowDown") {
        clearInterval(DownInterval);
        DownInterval = null;
    }
});

document.addEventListener("keypress", (e) => {
    if (e.key === " ") {
        Drop();
    } else if (e.key == "z") {
        Rotate();
    } else if (e.key == "r") {
        window.location.reload();
    } else if (e.key == "x" && canHold) {
        canHold = false;
        if (holdForm === -1) {
            if (form.getFinish() == false) {
                holdForm = form.getForm();
                form = null;
                SpawnNewForm(true);
            }
        } else {
            let actualForm = form.getForm();
            form = null;
            SpawnNewForm(false);
            holdForm = actualForm;
        }
        LoadHoldForm();
    }
});
