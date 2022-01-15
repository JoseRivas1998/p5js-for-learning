let clock;

function setup() {
    createCanvas(windowWidth, windowHeight);
    clock = new Clock(createVector(width / 2, height / 2), min(width / 2, height / 2) * 0.95);
}

function draw() {
    background(220);
    clock.display();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    clock = new Clock(createVector(width / 2, height / 2), min(width / 2, height / 2) * 0.95);
}
