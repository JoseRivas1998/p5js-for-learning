let zOff = 0;
const inc = 0.005;

const averageRadius = 150;
const bumpHeight = 50;

const vertices = 360;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    fill(255, 0, 255)
    noStroke();
    beginShape();
    for (let i = 0; i < vertices; i++) {
        const theta = map(i, 0, vertices, 0, TWO_PI);
        const xOff = map(cos(theta), -1, 1, 0, 2.5);
        const yOff = map(sin(theta), -1, 1, 0, 2.5);
        // const r = averageRadius + map(random(1), 0, 1, -bumpHeight, bumpHeight);
        const r = averageRadius + map(noise(xOff, yOff, zOff), 0, 1, -bumpHeight, bumpHeight);
        const x = (width / 2) +  r * cos(theta);
        const y = (height / 2) + r * sin(theta);
        vertex(x, y);
    }
    endShape(CLOSE);
    zOff += inc;

}
