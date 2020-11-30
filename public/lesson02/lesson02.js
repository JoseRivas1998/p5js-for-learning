/*
 * A variable is a named bucket of data. A variable has three things that defines it: its name, its value, and its type.
 *
 * The name of a variable is case sensitive and must be unique within its scope (more on that later). The name must
 * start with an english letter (a-z or A-Z), _ or $. After the first letter, a variable name can has as many letters,
 * _'s, $'s, and even numbers as needed.
 *
 * The type and value of a variable are what goes inside the bucket. A variable can be many different types of data,
 * which we will be exploring throughout this course, which are numbers, strings, booleans, arrays, and objects. The
 * value of a variable is assigned to a variable using the '=' operator.
 *
 * The value of a variable can be reassigned, or changed, at any time, which is one of many reasons to use variables.
 * In JavaScript, unlike many other languages, the type of a variable can change when the value changes. Meaning that
 * a variable that is holding a number can be reassigned to hold something else.
 *
 * Each variable exists within a scope. The scope of a variable is the area of code that can use that variable. The more
 * code that can access a variable, the higher its scope, the less code that can access a variable, the lower its scope.
 * A scope is created by curly brackets (these symbols: {}). A variable can be used in any line after it has been
 * declared within the curly brackets that is created. When a variable is created outside of any curly brackets, then
 * it is considered a global variable, which means the entire program can use it. p5.js has many built in global
 * variables that can be used. Variables made inside curly brackets are called local variables. When accessing a
 * variable, the variable with the smallest scope will be used.
 */

// To declare variables, use the word "let" followed by the name of the variable.
let circleX;
let circleY;

// A constant is declared with the word "const" followed by the name of the variable. Constants cannot be reassigned.
const circleDiameter = 60;

const cornerDiameter = 100000;

// Using longer, more descriptive variables is always more preferable than using short names like "x" or "y"
let movingCircleX;
let movingCircleY;

const movingCircleHorizontalSpeed = 5;
const movingCircleVerticalSpeed = -2.5;

function setup() {
    createCanvas(400, 400);

    // When assigning a variable, using the assignment operator, there is a left hand side and a right hand side.
    // On the right hand side, there can be an expression, which is a snippet of code that produces a value. An
    // expression can be a direct value, or a literal, a variable, the result of a function, or a combination of those
    // using operators. Operators include plus/concat (+), minus/negate (-), multiply (*), divide (/), power (**), and
    // many more.
    circleX = 120;
    circleY = 75;

    // "width" and "height" are global variables created by p5.js which refer to the width and height of the screen.
    // Here we are initializing the variables to be the width and height divided by two, using an expression, in order
    // to always initialize the circle in the center of the canvas, no matter what the size of the canvas is.
    movingCircleX = width / 2;
    movingCircleY = height / 2;

}

function draw() {
    // put drawing code here
    background(210);

    fill(209, 41, 209);

    ellipse(circleX, circleY, circleDiameter, circleDiameter);

    // The global variable declared above has a higher scope than this local variable, but has the same name. When this
    // happens, we are "hiding" the global variable because the variable used is always the one with the lowest scope.
    const cornerDiameter = 100;
    ellipse(0, 0, cornerDiameter, cornerDiameter);

    // Assignment operations are done right to left. This means that the entire expression on the right side is
    // evaluated before putting the result in the bucket. In other words, the value in the bucket does not change until
    // the computer is completely done figuring out a value for the right hand side. Because of this, a variable can
    // end up on both sides of an assignment. In this case, it is because we are taking the value of the variable,
    // adding something to it, and then storing it back to the variable, essentially just adding to the variable.
    movingCircleX = movingCircleX + movingCircleHorizontalSpeed;
    movingCircleY = movingCircleY + movingCircleVerticalSpeed;
    ellipse(movingCircleX, movingCircleY, circleDiameter, circleDiameter);

    // "mouseX" and "mouseY" are global variables created by p5.js that will let us know where the mouse is on the
    // screen. This can be do for many reasons, including making buttons, or clicking games.
    ellipse(mouseX, mouseY, circleDiameter, circleDiameter);

}
