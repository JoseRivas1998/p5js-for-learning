function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(210);

    fill(255);
    let x = 0;              // Initializer
    while (x <= width) {    // while (<condition>)
        circle(x, height * 0.25, 25);
        x += 50;            // Incrementer
    }

    fill(255, 0, 255);
    for (let x = 0; x <= width; x += 50) { // for (<initializer>; <condition>; <incremeter>) {
        circle(x, height * 0.75, 25);
    }

}
