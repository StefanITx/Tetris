class Form extends Forms {
    constructor(x, random) {
        super();
        this.tiles = [];
        this.x = x;
        this.y = 0;
        this.form;
        if (random) this.getARandomFormFromList();
        else this.getAFormFromHold();
        this.rotate = 0;
        this.createForm();
        this.finish = false;
    }

    /**
     * Sets a random form from the list of forms and updates the UI.
     * Removes the selected form from the list and adds a random form to the list.
     * The random form is selected from the `userRandomForm` array.
     * The updated list of forms is then loaded into the UI.
     */
    getARandomFormFromList() {
        // Set the form to the first form in the list
        this.form = formsArray[0];
        // Remove the first form from the list
        formsArray.shift();
        // Select a random form from the `userRandomForm` array
        let x = Math.floor(Math.random() * userRandomForm.length);
        // Add the selected form back to the list
        formsArray.push(x);
        // Load the updated list of forms into the UI
        LoadNextForms();
    }

    /**
     * Gets a form from the hold and updates the UI.
     *
     * This function sets the form of the current instance to the
     * form in the hold, then sets the hold form to -1 and
     * loads the updated hold form into the UI.
     */
    getAFormFromHold() {
        // Set the form of the current instance to the form in the hold
        this.form = holdForm;
        // Reset the hold form to -1
        holdForm = -1;
        // Load the updated hold form into the UI
        LoadHoldForm();
    }

    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getForm() {
        return this.form;
    }

    choseARandomForm() {
        switch (this.form) {
            case 0:
                this.tiles = this.cube(this.x, this.y);
                break;
            case 1:
                this.tiles = this.T(this.rotate, this.x, this.y, this);
                break;
            case 2:
                this.tiles = this.I(this.rotate, this.x, this.y, this);
                break;
            case 3:
                this.tiles = this.S(this.rotate, this.x, this.y, this);
                break;
            case 4:
                this.tiles = this.Z(this.rotate, this.x, this.y, this);
                break;
            case 5:
                this.tiles = this.J(this.rotate, this.x, this.y, this);
                break;
            case 6:
                this.tiles = this.L(this.rotate, this.x, this.y, this);
                break;
            default:
                this.tiles = this.cube(this.x, this.y);
        }
    }

    /**
     * Create a new form by clearing the canvas, choosing a random form, and drawing the tiles.
     * If the tiles array is empty, call the GameOver function.
     */
    createForm() {
        // Clear the canvas
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        // Choose a random form
        this.choseARandomForm();

        // If the tiles array is empty, call the GameOver function
        if (this.tiles.length == 0) {
            GameOver();
        }

        // Draw all the tiles of the form
        for (let i = 0; i < this.tiles.length; i++) {
            this.tiles[i].draw();
        }
    }

    /**
     * Changes the form by clearing the canvas, choosing a random form, and redrawing the tiles.
     */
    changeForm() {
        // Clear the canvas
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        // Choose a random form
        this.choseARandomForm();

        // Redraw all the tiles of the form
        for (let i = 0; i < this.tiles.length; i++) {
            // Draw each tile
            this.tiles[i].draw();
        }
    }

    getRotate() {
        return this.rotate;
    }

    setRoate(r) {
        this.rotate = r;
    }

    /**
     * Moves the form down by one tile. If the tiles cannot move down,
     * the form is saved and the 'finish' property is set to true.
     * If the user parameter is true, the score is incremented and
     * the stats are updated.
     *
     * @param {boolean} user - Whether the move is performed by the user
     */
    moveDown(user) {
        // Clear the canvas
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        // Check if the tiles can move down
        let stop = 0;
        for (let i = 0; i < this.tiles.length; i++) {
            if (!this.tiles[i].canMoveDown()) {
                stop = 1;
                break;
            }
        }

        // If the tiles can move down, move them down and update the y position
        if (stop == 0) {
            for (let i = 0; i < this.tiles.length && stop == 0; i++) {
                this.tiles[i].moveDown();
            }
            this.y++;
            if (user == true) {
                // Update the score and stats
                score += moveDownScore;
                UpdateStats();
            }
        }
        // If the tiles cannot move down, save the form and set the finish property to true
        else {
            for (let i = 0; i < this.tiles.length; i++) {
                this.tiles[i].saveTile();
            }
            this.finish = true;
        }
    }
    /**
     * Moves the form to the right by one tile.
     * If the tiles cannot move to the right,
     * the form remains unchanged.
     *
     * This function does not update the score or stats.
     */
    moveRight() {
        // Initialize a variable to keep track of the tile movement
        let canMove = 0;

        // Check if each tile can move to the right
        for (let i = 0; i < this.tiles.length; i++) {
            if (!this.tiles[i].canMoveRight()) {
                // If any of the tiles cannot move, set the variable and break the loop
                canMove = 1;
                break;
            }
        }

        // If all the tiles can move, move them and update the x position
        if (canMove == 0) {
            // Clear the canvas
            context.clearRect(0, 0, canvasWidth, canvasHeight);

            // Move each tile to the right
            for (let i = 0; i < this.tiles.length; i++) {
                this.tiles[i].moveRight();
            }

            // Update the x position of the form
            this.x++;
        }
    }

    /**
     * Moves the form to the left by one tile.
     * If the tiles cannot move to the left,
     * the form remains unchanged.
     *
     * This function does not update the score or stats.
     */
    moveLeft() {
        // Initialize a variable to keep track of the tile movement
        let canMove = 0;

        // Check if each tile can move to the left
        for (let i = 0; i < this.tiles.length; i++) {
            // If any of the tiles cannot move to the left, set the variable and break the loop
            if (!this.tiles[i].canMoveLeft()) {
                canMove = 1;
                break;
            }
        }

        // If all the tiles can move to the left, move them and update the x position
        if (canMove == 0) {
            // Clear the canvas
            context.clearRect(0, 0, canvasWidth, canvasHeight);

            // Move each tile to the left
            for (let i = 0; i < this.tiles.length; i++) {
                this.tiles[i].moveLeft();
            }

            // Update the x position of the form
            this.x--;
        }
    }

    getFinish() {
        return this.finish;
    }
}
