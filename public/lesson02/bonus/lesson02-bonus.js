let r;
let theta = 0;

const diameter = 5;
const a = 200;
const b = 0.4;
const speed = 0.05;

function setup() {
    // put setup code here
    createCanvas(400, 400);
    background(46, 6, 74);
}

function draw() {
    noStroke();
    fill(175, 35, 161);
    theta += speed;
    r = a * sin(b * theta);

    const x = (width / 2) + r * cos(theta);
    const y = (height / 2) + r * sin(theta);

    ellipse(x, y, diameter, diameter);

}
