/*
 * The next fundamental part of writing computer code is the subroutine. A subroutine is a sequence of code that is
 * used within a larger program. Typically, a subroutine is given a name. Subroutines can be given parameters, and may
 * also return a value. More on those things in the next two lessons. Using sub routines allows us to write code that
 * is flexible, readable, and reusable. Since subroutines are given names, when we call subroutines in our code, the
 * code itself tells us exactly what it is doing, granted the subroutine is given a good name. In JavaScript,
 * subroutines are called functions. As you may have noticed, we have used functions a whole lot already. Everytime we
 * have drawn a shape, created the canvas, the background, used math functions like sin and cos, called random and
 * noise, and etc., we were calling functions that are built into p5.js. We have also written our own functions. The
 * setup and draw are functions that we write that p5.js is expecting in our JavaScript code in order to perform the
 * programs we want. We can however write other functions that can make our code much more readable and flexible. In
 * this lesson and the bonus, we will focus on writing simple functions that we will just use once to make our code a
 * lot more readable. In this lesson, we will just be writing functions that take no parameters and return no value.
 * Since the functions we are writing do not return a value, they are known as void functions. There is no special name
 * given to functions based on their parameters, so we are just writing void functions. Here is the syntax for how to
 * create a function:
 *
 * function <function_name>() {
 *      <code>
 * }
 *
 * The rules for <function_name> are the same rule as variable names. In a future lesson, we will see how a function in
 * JavaScript can even be a variable and passed into other functions but we will worry about that then. The <code> part
 * is any number of lines of JavaScript code. We can run the code in the function by calling the function. We have
 * called functions so many times already but to formally review the syntax, it's this:
 *
 * <function_name>();
 *
 * We also pass arguments into a function call, but since we have not looked at functions with parameters, we will
 * ignore that for now. So let's look at an example of creating a function and then calling it somewhere else:
 *
 * function sayHello() {
 *      console.log("Hello world!");
 * }
 *
 * sayHello();
 * >> Hello World!
 *
 * Often time, if a sequence of code gets really complicated, it can be broken up into subroutines. When this is the
 * case, we can create a function, move the subroutine into to the new function, and call the function in place of the
 * original code. This is called extracting. To make our code as readable as possible and write what is known as clean
 * code, extracting functions over and over until all of our functions are small and readable is incredibly important.
 * Today, we will start by writing a sketch without functions, and then "extract until we drop" to make our code much
 * more readable.
 */

const radius = 100;
const speed = 5;

let x;
let y;
let velX;
let velY;

function setup() {
    createCanvas(400, 400);
    randomize();
}

function randomize() {
    randomizePosition();
    randomizeVelocity();
}

function randomizePosition() {
    x = random(width);
    y = random(height);
}

function randomizeVelocity() {
    const angle = random(TWO_PI);
    velX = speed * cos(angle);
    velY = speed * sin(angle);
}

function draw() {
    background(210);
    update();
    display();
}

function update() {
    move();
    bounce();
}

function move() {
    x += velX;
    y += velY;
}

function bounce() {
    bounceX();
    bounceY();
}

function bounceX() {
    if (x < 0 || x > width) {
        velX *= -1;
    }
}

function bounceY() {
    if (y < 0 || y > height) {
        velY *= -1;
    }
}

function display() {
    strokeWeight(5);
    fill(255, 87, 51);
    stroke(255, 189, 51);
    circle(x, y, radius * 2);
}
