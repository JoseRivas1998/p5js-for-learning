const xPositions = [];
const yPositions = [];

let ballX;
let ballY;

const ballRadius = 10;

let targetIndex = 0;

function setup() {
    createCanvas(400, 400);
    xPositions.push(width / 2);
    yPositions.push(height / 2);
    ballX = random(width);
    ballY = random(height);
}

function draw() {
    background(210);

    const targetX = xPositions[targetIndex];
    const targetY = yPositions[targetIndex];

    if (dist(ballX, ballY, targetX, targetY) < 1) {
        if (targetIndex === xPositions.length - 1) {
            targetIndex = 0;
        } else {
            targetIndex++;
        }
    } else {
        if (targetX > ballX) {
            ballX++;
        } else if (targetX < ballX) {
            ballX--;
        }
        if (targetY > ballY) {
            ballY++;
        } else if (targetY < ballY) {
            ballY--;
        }
    }

    fill(255, 0, 0);
    circle(targetX, targetY, 10);

    fill(255);
    circle(ballX, ballY, ballRadius * 2);

    fill(0);
    text("Target Index: " + targetIndex, 25, 25);
    text("Number Positions: " + xPositions.length, 25, 40);

}

function mousePressed() {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        xPositions.push(mouseX);
        yPositions.push(mouseY);
    }
}
