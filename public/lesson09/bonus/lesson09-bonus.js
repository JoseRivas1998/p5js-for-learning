// There is a more elegant way of doing this that requires objects, more on that later, for now each color is an array
// of three numbers between 0 and 255. These colors represent red, green, and blue values like what we have been passing
// into the fill() function
const colors = [
    [255, 0, 0],
    [255, 127, 0],
    [255, 255, 0],
    [0, 255, 0],
    [0, 0, 255],
    [75, 0, 130],
    [148, 0, 211]
];

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(210);
    noStroke();
    renderAllCardioids();

}

function renderAllCardioids() {
    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        fill(color[0], color[1], color[2]);
        const a = map(i, 0, colors.length - 1, width / 6, width / 12);
        renderCardioid(width / 2, height / 4, a, 1000);
    }
}

function renderCardioid(centerX, centerY, a, vertices) {
    beginShape();
    for (let i = 0; i < vertices; i++) {
        const theta = map(i, 0, vertices, 0, TWO_PI);
        const radius = 2 * a * (1 - cos(theta + PI / 2));
        const x = centerX + radius * cos(theta);
        const y = centerY + radius * sin(theta);
        vertex(x, y);
    }
    endShape(CLOSE);
}

