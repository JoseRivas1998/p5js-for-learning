const fixedX = 50;
const fixedRadius = 25;
const restLength = 150;
const restPosition = fixedX + restLength;

const springRadius = 15;

let springX;
let springVel = 0;

let isMoving = false;

let springConstantSlider;

function setup() {
    createCanvas(400, 400);
    springX = fixedX + restLength;
    springConstantSlider = createSlider(0, 1, 0.1, 0.01);
}

function draw() {
    background(210);

    const k = springConstantSlider.value();

    noStroke();
    fill(0);
    textSize(24);
    text("K = " + k, 10, 30);

    if (isMoving) {
        springX = constrain(mouseX, fixedX + fixedRadius + springRadius, width);
        springVel = 0;
    } else {
        const force = springForce(k);
        springVel += force;
        springX += springVel;
        springVel *= 0.9;
    }

    stroke(0);
    line(fixedX, height / 2, springX, height / 2);
    stroke(255);
    line(restPosition, height / 4, restPosition, height * 3 / 4);
    noStroke();
    fill(255, 0, 0);
    circle(fixedX, height / 2, fixedRadius * 2);
    if (isMoving) {
        fill(0, 255, 0);
    } else {
        fill(0, 255, 255);
    }
    circle(springX, height / 2, springRadius * 2);
}

function mousePressed() {
    if (dist(springX, height / 2, mouseX, mouseY) < springRadius) {
        isMoving = true;
    }
}

function mouseReleased() {
    isMoving = false;
}

function springForce(k) {
    const x = springX - restPosition;
    return -k * x;
}
