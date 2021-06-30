/*
 * Functions can be split into two major categories: non-void and void. All the functions we have written so far have
 * been void functions. This means that the functions themselves do not produce a value. This basically means that the
 * function performs some operation but there is no result that is reported when it is completed. This is useful for
 * functions like draw and setup, but void functions can only get us so far. Let's say, we wanted to write a function
 * that took two numbers, and calculates the midpoint between the two. The code expression for this would be something
 * like this:
 *
 * const average = (num1 + num2) / 2;
 *
 * But what if we just wanted to write this like this?
 *
 * average(num1, num2)
 *
 * We can absolutely do that, and we have been using non-void functions pretty frequently up until now, think of the
 * random() function which always gives a random number. So how does JavaScript know what a value a function should
 * produce? Simply with a new keyword, "return". The syntax for return is as follows:
 *
 * return <expr>;
 *
 * Simple right? When a return statement is reached in a function, the function immediately ends and the value produced
 * by <expr> is the result of the function call. If there is no <expr>, then the function returns "undefined", behaving
 * like a void function would when it runs out of code. Keep in mind that the return statement will always end the
 * execution of a function, so any code under a return statement will not execute at all.
 *
 * Non-void functions can return any kind of value, including numbers, booleans, arrays, and even objects which we will
 * talk about next time. Here is how we would write our average function:
 *
 * function average(num1, num2) {
 *      return (num1 + num2) / 2;
 * }
 *
 * Yes, it is a simple one-line function, which actually makes it ideal in the eyes of many software engineers. Either
 * way, the syntax for creating a non-void function is exactly the same as for a void function in JavaScript, the only
 * difference is that there is a return statement with a value. Here is how we would actually use this function:
 *
 * const avg = average(3, 5);
 * console.log(avg);
 * >> 4
 *
 * Having functions return values will complete our look into the subroutine. We are not done with functions all
 * together as JavaScript has some interesting features that allow us to do some pretty powerful stuff with functions,
 * but in the next lesson we will be moving on and we will return to do more advanced lessons with functions.
 *
 */
const fixedX = 50;
const fixedRadius = 25;
const restLength = 150;
const restPosition = fixedX + restLength;

const springRadius = 15;

let springX;
let springVel = 0;

let isMoving = false;

let springConstantSlider;

function setup() {
    createCanvas(400, 400);
    springX = fixedX + restLength;
    springConstantSlider = createSlider(0, 1, 0.1, 0.01);
}

function draw() {
    background(210);

    const k = springConstantSlider.value();

    noStroke();
    fill(0);
    textSize(24);
    text("K = " + k, 10, 30);

    if (isMoving) {
        springX = constrain(mouseX, fixedX + fixedRadius + springRadius, width);
        springVel = 0;
    } else {
        const force = springForce(k);
        springVel += force;
        springX += springVel;
        springVel *= 0.9;
    }

    stroke(0);
    line(fixedX, height / 2, springX, height / 2);
    stroke(255);
    line(restPosition, height / 4, restPosition, height * 3 / 4);
    noStroke();
    fill(255, 0, 0);
    circle(fixedX, height / 2, fixedRadius * 2);
    if (isMoving) {
        fill(0, 255, 0);
    } else {
        fill(0, 255, 255);
    }
    circle(springX, height / 2, springRadius * 2);
}

function mousePressed() {
    if (dist(springX, height / 2, mouseX, mouseY) < springRadius) {
        isMoving = true;
    }
}

function mouseReleased() {
    isMoving = false;
}

function springForce(k) {
    const x = springX - restPosition;
    return -k * x;
}
