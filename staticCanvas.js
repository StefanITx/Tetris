const staticCanvas = document.getElementById("gameStaticCanvas");
const staticContext = staticCanvas.getContext("2d");

staticCanvas.width = canvasWidth;
staticCanvas.height = canvasHeight;

const gameFrame = [];

//matrix for the canvas

for (let rows = 0; rows <= gameFrameRows; rows++) {
    gameFrame[rows] = [];
    for (let cols = 0; cols <= gameFrameCols; cols++) {
        gameFrame[rows][cols] = null;
    }
}

/**
 * Function to draw the grid on the static canvas.
 * The grid is made up of horizontal and vertical lines.
 * The lines are drawn in white color.
 */
const DrawGrid = () => {
    // Initialize the x and y coordinates of the first line
    let x = tileSize,
        y = tileSize;

    // Set the fill style of the context to white
    staticContext.fillStyle = "white";

    // Loop to draw the horizontal lines
    for (let i = 0; i <= gameFrameCols; i++) {
        // Draw a horizontal line
        staticContext.fillRect(x - 1, 0, 2, canvasHeight);

        // Update the x coordinate for the next line
        x += tileSize;
    }

    // Loop to draw the vertical lines
    for (let i = 0; i <= gameFrameRows; i++) {
        // Draw a vertical line
        staticContext.fillRect(0, y - 1, canvasWidth, 2);

        // Update the y coordinate for the next line
        y += tileSize;
    }
};

/**
 * Function to draw the game frame on the static canvas.
 * It clears the canvas, draws the grid, and then draws each tile in the game frame.
 */
const Draw = () => {
    // Clear the static canvas
    staticContext.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw the grid on the canvas
    DrawGrid();

    // Loop through each row and column in the game frame
    for (let rows = 0; rows <= gameFrameRows; rows++) {
        for (let cols = 0; cols <= gameFrameCols; cols++) {
            // Get the current tile
            let tile = gameFrame[rows][cols];

            // If the current tile is not null, draw it on the canvas
            if (tile != null) {
                tile.drawStatic();
            }
        }
    }
};

Draw();
