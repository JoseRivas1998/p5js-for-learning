/*
 * A cool thing we can do with a 2D array is create a game based on cellular automata. Cellular automata is a system
 * with a grid of cells, where each cell is either dead or alive. The grid is then put into a function that will
 * create a new grid of cells. With special rules, what is called emergent behavior will occur. Emergent behavior
 * is when a system is not told to do something complex, but its simple rules can lead to complex behavior.
 *
 * Part of cellular automata is the concept of a neighbor, a cell's neighbor is a cell that is touching it either
 * directly above, below, to the left, or to the right, as well as the diagonals. When dealing with this, the neighbors
 * are referred by their cardinal direction, north, south, east and west. Most cellular automata games base the rules
 * on how many neighbors are alive.
 *
 * This brings us to John Conway. John Conway was a mathematician born in 1937 and unfortunately left us due to COVID-19
 * in 2020. He is famous for inventing a cellular automata game known as Conway's Game of Life. It is famous for how
 * complex of behaviors come out of incredibly simple rules. The rules are as follows:
 *
 *      1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
 *      2. Any live cell with two or three live neighbours lives on to the next generation.
 *      3. Any live cell with more than three live neighbours dies, as if by overpopulation.
 *      4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
 *
 * These rules can be simplified even further to just three rules:
 *
 *      1. Any live cell with two or three live neighbours survives.
 *      2. Any dead cell with three live neighbours becomes a live cell.
 *      3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.
 *
 * (Source: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
 *
 * These three rules lead to some incredible behavior, so we are going to implement the game here. We wont need anything
 * other than the JavaScript knowledge we have so far!
 *
 */

const rows = 40;
const columns = 40;

let cellWidth;
let cellHeight;

const grid = new Array(rows);

let animateCheckbox;
let animateSlider;

function setup() {
    createCanvas(800, 800);
    // initialize all cells to be dead at the beginning.
    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(columns);
        for (let j = 0; j < columns; j++) {
            grid[i][j] = false;
        }
    }
    cellWidth = width / columns;
    cellHeight = height / rows;
    animateCheckbox = createCheckbox('Animate', false);
    animateSlider = createSlider(1, 60, 10);
}

function draw() {
    background(210);
    stroke(210);

    const shouldAnimate = animateCheckbox.checked();
    const animationFrames = animateSlider.value();
    // If we are animating and the number of frames specified in the slider have passed, do Conway step
    if (shouldAnimate && frameCount % animationFrames === 0) {
        // Conway step

        // First, we need to figure out the number of alive neighbors in each cell, we store this in a separate
        // array to simplify everything.
        const liveNeighbors = new Array(grid.length);
        for (let row = 0; row < liveNeighbors.length; row++) {
            liveNeighbors[row] = new Array(grid[row].length);
            for (let column = 0; column < liveNeighbors[row].length; column++) {
                const NORTH = row - 1;
                const SOUTH = row + 1;
                const WEST = column - 1;
                const EAST = column + 1;
                // Initialize our live neighbor count to zero.
                liveNeighbors[row][column] = 0;
                // if we are at row zero, then NORTH would be -1, which is invalid, so we start our loop at whichever
                // is bigger. In most cases, it will be NORTH, but when row is zero, then zero will be bigger. This
                // makes sure that i is in bounds.
                // Similarly, if the row is rows - 1, then SOUTH would be rows. This is also an invalid index so we dont
                // want to get whichever is smaller, SOUTH, or the number of rows.
                for (let i = max(NORTH, 0); i <= min(SOUTH, liveNeighbors.length - 1); i++) {
                    // The same explanation for NORTH and SOUTH apply to WEST and EAST.
                    for (let j = max(WEST, 0); j <= min(EAST, liveNeighbors[row].length - 1); j++) {
                        // The expression !(i === row && j === column) is false only when i and j both match row and
                        // column respectively, so we will not even bother checking grid[i][j] at that point because
                        // that is the same cell as the current cell, so skip and move on. Otherwise, grid[i][j] will
                        // be true if that neighbor is alive, and false if it is not. If the neighbor is alive, we want
                        // to increment our count of live neighbors.
                        if (!(i === row && j === column) && grid[i][j]) {
                            liveNeighbors[row][column]++;
                        }
                    }
                }
            }
        }
        // After calculating all the live counts, now we can apply conways game of life to each cell.
        for (let row = 0; row < grid.length; row++) {
            for (let column = 0; column < grid[row].length; column++) {
                const neighborsAlive = liveNeighbors[row][column];
                // if the cell is alive
                if (grid[row][column]) {
                    // A live cell stays alive if it has two or three alive neighbors. The following boolean expression
                    // returns true if there are two or three alive neighbors, or false otherwise.
                    grid[row][column] = neighborsAlive === 2 || neighborsAlive === 3;
                } else {
                    // Otherwise if the cell is dead:
                    // A dead cell becomes alive if it has three alive neighbors, dead otherwise. The boolean expression
                    // will give us that result.
                    grid[row][column] = neighborsAlive === 3;
                }
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                fill(0);
            } else {
                fill(255);
            }
            const x = j * cellWidth;
            const y = i * cellHeight;
            rect(x, y, cellWidth, cellHeight);
        }
    }
}

function mousePressed() {
    // When we click on a cell, toggle the cell
    let column = floor(mouseX / cellWidth);
    let row = floor(mouseY / cellHeight);
    if (row >= 0 && row < rows && column >= 0 && column < columns) {
        grid[row][column] = !grid[row][column];
    }
}

