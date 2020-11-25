function setup() {
    // Crates the canvas. The parameters are the width and height of the canvas

    createCanvas(400, 400);
}

function draw() {
    // put drawing code here

    // Draws the background as a grey color
    background(220);

    // the strokeWeight function makes the outline
    // of everything drawn to be one pixel.
    strokeWeight(1);

    // The fill function will determine the color that shapes
    // will be filled in with. When only given one parameter,
    // it fills it with shades of gray. The number value
    // determines how bright the color is, 0 is black, and 255 is white.
    fill(255);

    // The stroke function determines the color of the shapes.
    // The parameter is the same as for the fill function
    stroke(0);

    // To draw rectangles, use the rect function
    // The first two parameters are x, y coordinates that
    // will tell where on the screen the top left of the
    // rectangle goes. The second two parameters are width
    // and height, which determine how wide and how tall
    // the rectangle will be.
    rect(200, 300, 50, 30);

    // To draw circles and ellipses, use the ellipse function
    // The first two parameters are x, y coordinates that
    // will tell where on the screen the center of the
    // ellipse goes. The second two parameters are width
    // and height, which determine how wide and how tall
    // the ellipse will be.
    ellipse(150, 75, 100, 100);

    // To draw lines, use the line function
    // The first two parameters are x, y coordinates that tell
    // the screen where to start the line. The second two
    // parameters are also x, y coordinates that tell the screen
    // where to end the line.
    line(75, 200, 300, 100);

    // Setting the strokeWeight to zero makes it so that there is no outline
    strokeWeight(0);
    // 0, 0 is the top left of the entire canvas
    rect(0, 0, 50, 100);

    // When passing three numbers into the fill function, they refer
    // to RGB values, which stands for red green and blue. With a
    // combination of these colors, all other colors are possible
    // since red green and blue are the colors the human eye can
    // actually see. So we mix them to trick the eye into seeing
    // those colors. The numbers are between 0 to 255. The lower
    // the number, the less of that color there will be, and the
    // higher the color, the more of that color there will be.
    fill(255, 100, 75);
    ellipse(350, 200, 20, 30);

    // The stroke function also can be used to change the color
    // of the stroke with three parameters the same way the fill
    // function can
    strokeWeight(3);
    stroke(0, 255, 150);
    fill(100, 30, 210);
    rect(50, 275, 100, 100);


}
