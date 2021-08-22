let slowPoint;
let fastPoint;

const circleRadius = 190;
const animationSeconds = 10;

function setup() {
    createCanvas(400, 400);
    const slowPointVelocity = TWO_PI * ((1 / 60) / animationSeconds);
    const fastCircleMultiplier = 8;
    slowPoint = new CirclePoint(circleRadius, slowPointVelocity);
    fastPoint = new CirclePoint(circleRadius, slowPointVelocity * fastCircleMultiplier);
    background(0);
}

function draw() {
    translate(width / 2, height / 2);
    slowPoint.update();
    fastPoint.update();
    noFill();
    stroke(255);
    circle(0, 0, circleRadius * 2);
    slowPoint.display();
    fastPoint.display();
    slowPoint.drawConnection(fastPoint);
    if (slowPoint.angle > TWO_PI) {
        noLoop();
    }
}
