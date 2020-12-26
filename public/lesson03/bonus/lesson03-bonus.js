const ballRadius = 30;

let ballX;
let ballY;
let ballHorizontalSpeed;
let ballVerticalSpeed;

function setup() {
    createCanvas(400, 400);
    ballX = width / 2;
    ballY = height / 2;
    ballHorizontalSpeed = 2;
    ballVerticalSpeed = 4;
}

function draw() {
    background(210);

    ballX += ballHorizontalSpeed;
    ballY += ballVerticalSpeed;

    if (ballX + ballRadius > width) {
        ballX = width - ballRadius;
        ballHorizontalSpeed *= -1;
    } else if (ballX - ballRadius < 0) {
        ballX = ballRadius;
        ballHorizontalSpeed *= -1;
    }
    if (ballY + ballRadius > height) {
        ballY = height - ballRadius;
        ballVerticalSpeed *= -1;
    } else if (ballY - ballRadius < 0) {
        ballY = ballRadius;
        ballVerticalSpeed *= -1;
    }

    ellipse(ballX, ballY, ballRadius * 2, ballRadius * 2);
}
