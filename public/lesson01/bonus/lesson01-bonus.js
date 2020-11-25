function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0, 255, 255);

    strokeWeight(0);

    fill(255, 208, 175);
    ellipse(200, 100, 100, 100);

    fill(0);
    ellipse(185, 95, 15, 15);
    ellipse(215, 95, 15, 15);

    strokeWeight(1);

    line(190, 120, 195, 125);
    line(195, 125, 205, 125);
    line(205, 125, 210, 120);

    line(200, 150, 200, 275);
    line(200, 190, 150, 150);
    line(200, 190, 250, 150);
    line(200, 275, 150, 350);
    line(200, 275, 250, 350);

}
