/*
 * Functions can be made more flexible when they are given parameters. Parameters are variables that are passed into
 * a function that are different everytime the function is called. Parameters exists just like any variable and can be
 * used anywhere within the function itself. When calling the function, the values of the parameters are passed into
 * the function, here they are called arguments. Another term for these things are formal parameters, which are the
 * variables when writing the function, and actual parameters, which are the values passed into a function call. Here
 * we will call formal parameters just parameters, and actual parameters arguments. We have passed arguments into a
 * function countless times up to this point, for example the createCanvas() function takes two parameters, the width
 * and the height. We pass in the arguments in the correct order each time we call the function. The arguments must be
 * passed in the same order as the parameters, as the variables are assigned their values based on the the order the
 * arguments are passed. Before getting into the syntax of functions with parameters, let's take a look at the
 * createCanvas() function. This function is defined like this: createCanvas(width, height). The parameters are the
 * width and the height. The first argument will be the width of the canvas, and the second argument will be the height
 * of the canvas. Including the parameters with the name of the function will describe the function signature. The
 * signature of a function includes both the name of the function and its parameters, fully describing the function.
 * So let's create a function with parameters. Lets say for instance we have a function with n parameters, n can be any
 * integer that is at least zero. This means that a function can take no parameters, or as many as we need. Here is the
 * syntax for creating a function with n parameters:
 *
 *      function <function_name>(<param_1>, <param_2>, ... , <param_n>) {
 *          <code>
 *      }
 *
 * What this means is that each parameter is given a name that follows variable naming rules, in order, and separated by
 * commas. The parameter list goes inside the parenthesis following the <function_name>. So when calling a function
 * that takes parameters, the arguments are passed in the same order as they correspond to the parameters. Here is the
 * syntax:
 *
 *      <function_name>(<arg_1>, <arg_2>, ..., <arg_m>);
 *
 * Each argument must be a valid value. It can be a constant value, a variable, a variable expression, or even another
 * function call! It is just important to pass the arguments in order. If the arguments are passed out of order, then
 * the function won't work as intended. Sometimes, the function might just not work at all and crash the entire program.
 *
 * Here is an example of creating a function and calling it:
 *
 * function printQuotient(a, b) {
 *      console.log(a / b);
 * }
 *
 * printQuotient(3, 6):
 * >> 0.5
 * printQuotient(6, 3);
 * >> 2
 *
 * In division, the issue of passing in the arguments out of order was not that big of a deal, the number was just
 * wrong, but calling sometimes calling a function wrong can lead to major issues. Make sure to call them in order!
 *
 * In this example we will be reusing a function that draws the same blob from lesson 4 bonus. The difference is that
 * this time, we can vary where the blob is located, it's radius, and even how big the bumps are. You can see how this
 * may lead to increasingly complicated programs and even games!
 */

let zOff = 0;

const bouncingBlobRadius = 30;
const bouncingBlobBumpHeight = 15;
const bouncingBlobSpeed = 2.5;

let bouncingBlobX;
let bouncingBlobY;
let bouncingBlobVelX;
let bouncingBlobVelY;

function setup() {
    createCanvas(400, 400);

    bouncingBlobX = random(width);
    bouncingBlobY = random(height);
    const angle = random(TWO_PI);

    bouncingBlobVelX = bouncingBlobSpeed * cos(angle);
    bouncingBlobVelY = bouncingBlobSpeed * sin(angle);

}

function draw() {
    background(120);

    strokeWeight(1);
    stroke(0);
    fill(255);
    drawBlob(300, 200, 50, 15, zOff);

    noStroke();
    fill(255, 120, 255);
    drawBlob(75, 125, 25, 10, zOff);

    stroke(120, 255, 0);
    noFill();
    drawBlob(100, 250, 75, 20, zOff);

    updateBouncingBlob();
    displayBouncingBlob();

    zOff += 0.01;
}

function displayBouncingBlob() {
    strokeWeight(5);
    stroke(0, 0, 255);
    fill(255, 0, 0);
    drawBlob(bouncingBlobX, bouncingBlobY, bouncingBlobRadius, bouncingBlobBumpHeight, zOff);
}

function updateBouncingBlob() {
    moveBouncingBlob();
    bounceBouncingBlob();
}

function moveBouncingBlob() {
    bouncingBlobX += bouncingBlobVelX;
    bouncingBlobY += bouncingBlobVelY;
}

function bounceBouncingBlob() {
    if (bouncingBlobX < 0 || bouncingBlobX > width) {
        bouncingBlobVelX *= -1;
    }
    if (bouncingBlobY < 0 || bouncingBlobY > height) {
        bouncingBlobVelY *= -1;
    }
}

function drawBlob(x, y, averageRadius, bumpHeight, zOff) {
    beginShape();
    for (let i = 0; i < 360; i++) {
        const theta = map(i, 0, 360, 0, TWO_PI);
        const xOff = map(x, 0, width, 0, 10) +  map(cos(theta), -1, 1, 0, 2);
        const yOff = map(y, 0, height, 0, 10) +  map(sin(theta), -1, 1, 0, 2);
        const r = averageRadius + map(noise(xOff, yOff, zOff), 0, 1, -bumpHeight, bumpHeight);
        vertex(x + r * cos(theta), y + r * sin(theta));
    }
    endShape(CLOSE);
}
