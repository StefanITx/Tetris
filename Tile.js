class Tile {
    constructor(path, x, y) {
        this.tile = new Image();
        this.tile.src = path;
        this.x = x * tileSize;
        this.y = y * tileSize;
        this.size = tileSize;
        this.tile.onload = () => {
            context.drawImage(this.tile, this.x, this.y, this.size, this.size);
        };
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getTile() {
        return this.tile;
    }

    checkSpwnCorect() {
        if (gameFrame[this.positionGF()[0]][this.positionGF()[1]] != null) {
            return true;
        }
        return false;
    }

    draw() {
        context.drawImage(this.tile, this.x, this.y, this.size, this.size);
    }
    /**
     * Draws the tile on the static canvas.
     * This function calculates the position of the tile on the static canvas
     * and then uses the static canvas context to draw the image at that position.
     */
    drawStatic() {
        // Calculate the position of the tile on the static canvas
        let x = this.positionGF()[1] * tileSize; // x-coordinate
        let y = this.positionGF()[0] * tileSize; // y-coordinate

        // Set the onload handler for the tile image
        this.tile.onload = () => {
            // Draw the tile image on the static canvas
            staticContext.drawImage(this.tile, x, y, tileSize, tileSize);
        };

        // Draw the tile image on the static canvas
        staticContext.drawImage(this.tile, x, y, tileSize, tileSize);
    }

    positionGF() {
        const pos = [2];
        pos[0] = Math.round(this.y / this.size);
        pos[1] = Math.round(this.x / this.size);
        return pos;
    }
    canMoveDown() {
        if (this.positionGF()[0] < gameFrameRows) {
            if (
                gameFrame[this.positionGF()[0] + 1][this.positionGF()[1]] ==
                null
            ) {
                return true;
            } else return false;
        } else return false;
    }
    canMoveRight() {
        if (this.positionGF()[1] < gameFrameCols) {
            if (
                gameFrame[this.positionGF()[0]][this.positionGF()[1] + 1] ==
                null
            ) {
                return true;
            } else return false;
        } else return false;
    }
    canMoveLeft() {
        if (this.positionGF()[1] > 0) {
            if (
                gameFrame[this.positionGF()[0]][this.positionGF()[1] - 1] ==
                null
            ) {
                return true;
            } else return false;
        } else return false;
    }

    saveTile() {
        gameFrame[this.positionGF()[0]][this.positionGF()[1]] = this;
        this.drawStatic();
    }

    moveDown() {
        this.y += this.size;
        context.drawImage(this.tile, this.x, this.y, this.size, this.size);
    }

    moveRight() {
        this.x += this.size;
        context.drawImage(this.tile, this.x, this.y, this.size, this.size);
    }

    moveLeft() {
        this.x -= this.size;
        context.drawImage(this.tile, this.x, this.y, this.size, this.size);
    }
}
