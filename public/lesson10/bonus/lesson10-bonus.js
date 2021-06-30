/*
 * Simple butterfly curve demonstration, it is another polar graph similar to the lesson 1 bonus. Here is some
 * more information on the formula used to generate the curve:
 * https://en.wikipedia.org/wiki/Butterfly_curve_(transcendental)
 */

let angle = 0;
function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 360, 100, 100);
}

function draw() {
    background(0, 0, 100);

    const iterations = 10000;
    const period = 12 * PI;

    translate(width / 2, height / 2);
    scale(-1);

    noFill();
    // strokeWeight(1.5);
    for (let i = 0; i < iterations; i++) {
        const theta1 = map(i, 0, iterations, 0, angle);
        const theta2 = map(i + 1, 0, iterations, 0, angle);

        const r1 = butterfly(theta1) * 45;
        const r2 = butterfly(theta2) * 45;

        const x1 = polarToX(r1, theta1);
        const y1 = polarToY(r1, theta1);

        const x2 = polarToX(r2, theta2);
        const y2 = polarToY(r2, theta2);

        stroke(map(i, 0, iterations, 0, 360), 100, 100);
        line(x1, y1, x2, y2);
    }

    if (angle < period) {
        angle += 0.075;
    }

}

function polarToX(r, theta) {
    return r * cos(theta);
}

function polarToY(r, theta) {
    return r * sin(theta);
}

function butterfly(theta) {
    const t1 = exp(sin(theta));
    const t2 = 2 * cos(4 * theta);
    const t3 = pow(sin((2 * theta - PI) / 24), 5);
    return t1 - t2 + t3;

}
