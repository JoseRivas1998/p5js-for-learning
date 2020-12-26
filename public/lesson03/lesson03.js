/*
 * A boolean is a type of value that can only have two possible values: true and false.
 *
 * Booleans are very useful to make different decisions in programming, they allow us to ask yes and now questions
 * to the computer and do different things based on the answer. We will get into this today but first lets explore
 * booleans a bit further.
 *
 * So a boolean is a type of value, like a number is, we can store booleans in variables. For example, we can make
 * a simple boolean like this:
 *
 * let firstBoolean = true;
 *
 * Here, firstBoolean has a value of true, here is another:
 *
 * let secondBoolean = false;
 *
 * Here, secondBoolean has a value of false. These are the two values that a boolean can be. However, we can create
 * booleans without just writing the words true or false. We can create booleans using boolean expressions.
 * A boolean expression is an expression that produces a boolean value, similar to how we used arithmetic expressions
 * last time to create a number value. Like arithmetic expressions, boolean expressions take literals and operators
 * to produce the value. For example, there are some operators that allow us to ask questions about numbers:
 *
 * let x = 35;
 * let booleanValue = x > 10;
 *
 * This here is asking the question, is x greater than 10? In this case, the answer is obviously yes, so the value
 * will be true. Here is a table of these comparison operators and what they mean:
 *
 * Boolean Expression   | Meaning
 * x > y                | Is x greater than y
 * x < y                | Is x less than y
 * x >= y               | Is x greater than or equal to y
 * x <= y               | Is x less than or equal to y
 * x == y               | Is x equal to y
 * x != y               | Is x not equal to y
 *
 * Next, let's take a look at boolean operations. These are operations that combine booleans similarly to how
 * operations like addition and multiplication combines numbers. Since booleans can only have two values, it's easy to
 * show all the possible outcomes using what is called a truth table. We will look at a truth table soon.
 *
 * The first boolean operation is the NOT operation. This takes in a single boolean, and produces its opposite value.
 * In JavaScript, the NOT operator is the ! here is an example of using it:
 *
 * let a = true;
 * let b = !a;
 *
 * In this case, since a is true, b is the opposite of a, which would be false. Here is a truth table for a boolean A,
 * and what happens when we apply the not operation:
 *
 * A | !A
 * T | F
 * F | T
 *
 * Here, we shortened the word true to T and false t F, this is how we will be doing each truth table.
 *
 * The next boolean operation takes in two booleans, its called OR. The way OR works, is it takes two booleans, and
 * produces true if either one of them is true, and false if they are both false. In JavaScript, the operator is ||,
 * here is an example:
 *
 * let a = true;
 * let b = false;
 * let c = a || b;
 *
 * In this case, a is true, and b is false, so at least one of them is true, which would make c true.
 *
 * Here is the truth table:
 *
 * A | B | A || B
 * T | T | T
 * T | F | T
 * F | T | T
 * F | F | F
 *
 * As you can see, there is only one case in which the OR operator will produce false, and that is only when both
 * input booleans are false.
 *
 * The last boolean operations we will look at is AND. Similar to OR, AND takes in two boolean values. However, AND
 * produces true only when both input booleans are true. Meaning if only one of them is true, AND will produce false.
 * In JavaScript, the AND operator is &&, here is an example:
 *
 * let a = true;
 * let b = false;
 * let c = a && b;
 *
 * In this case, only one of the input booleans is true, so c will have the value of false.
 *
 * Here is a full truth table:
 *
 * A | B | A && B
 * T | T | T
 * T | F | F
 * F | T | F
 * F | F | F
 *
 * So here, there is only one way to get true out of AND, and that is when both inputs are true.
 *
 * Finally let's talk about how to make decisions using booleans. That is done JavaScript using an if statement.
 * Here is the basic syntax for an if statement:
 *
 * if (<bool>) {
 *      <code>
 * }
 *
 * Here, the <bool> represents a boolean expression, and the <code> represents what will happen if that <boo> produces
 * the value true. If <bool> is false, then the <code> is not run, and the computer moves on.
 *
 * Sometimes, we want to
 * do something for when <bool> is true, and then something else for when <bool> is false. To do that, an if-else
 * statement is used. Here is the syntax:
 *
 * if (<bool>) {
 *      <code_1>
 * } else {
 *      <code_2>
 * }
 *
 * So here, if <bool> is true, <code_1> is run, but <code_2> is not run. If <bool> is false, then <code_1> is not run
 * and <code_2> is run.
 *
 * Sometimes, we want to use an if statement, but then instead of always doing something else, only do something else
 * if another condition is also met. This is an if-else-if statement. Here is the syntax:
 *
 * if (<bool_1>) {
 *      <code_1>
 * } else if (<bool_2>) {
 *      <code_2>
 * } else if (<bool_3>) {
 *      <code_3>
 * }
 *
 * So in this case, if <bool_1> is true, <code_1> will be run and the rest of the statement is completely ignored.
 * So <code_2> and <code_3> will never run if <bool_1> is true, regardless of whether <bool_2> and <bool_3> are true or
 * not. If <bool_1> is false, and <bool_2> is true, then <code_2> is run, and the rest is ignored. Lastly, if <bool_1>
 * is false, <bool_2> is false, AND <bool_3> is true, then <code_3> will be run. This means that the only <code> that
 * is run is the code that corresponds to the first <bool> in the chain that is true. Because of this, put the higher
 * priority conditions before the lower priority ones. Also keep in mind that you can have as many "else if"'s as you
 * would like, I used two here as an example, but there could be zero, one, two, or even a million.
 *
 * So what if all the <bool>'s in an if-else-if chain are false? In the case above, none of the <code> is run and the
 * computer just moves on. If you want something to happen, you need to use an if-else-if-else statement. Here is the
 * syntax:
 *
 * if (<bool_1>) {
 *      <code_1>
 * } else if (<bool_2>) {
 *      <code_2>
 * } else if (<bool_3>) {
 *      <code_3>
 * } else {
 *      <code_4>
 * }
 *
 * In this case, every works the exact same as before, the only difference is that if <bool_1>, <bool_2>, and <bool_3>
 * are all false, then <code_4> will be run. Again, you can have as many "else if"'s as you want. In this case though,
 * the else has to be at the very end.
 *
 * Ok that was very long, let's get into some code.
 */

const hoverCircleX = 150;
const hoverCircleY = 200;
const hoverCircleRadius = 45;

const clickCircleX = 275;
const clickCircleY = 50;
const clickCircleRadius = 20;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(210);

    fill(255);

    // So here, we are only going to draw the ellipse if the mouse is pressed.
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 15, 15);
    }

    // A circle is defined by its radius, which is the distance between the center and the points on the edge of
    // the circle. So if we want to tell if a point is inside a circle, then we get the distance between that point
    // and the center of the circle. If it less than the radius, then the point is inside the circle.

    // To get the distance between two points, use the dist function, which takes four parameters. The first two
    // parameters are the x and y coordinates of the first point, and the second two parameters are the x and y of the
    // second point. So this line gives us the distance between hoverCircle and the mouse.
    const distanceBetweenHoverCircleAndMouse = dist(mouseX, mouseY, hoverCircleX, hoverCircleY);

    // So lets make an if-else statement that will make the fill color red if the mouse is in or on the circle, or
    // green if it is outside the circle.

    if (distanceBetweenHoverCircleAndMouse <= hoverCircleRadius) {
        fill(255, 0, 0);
    } else {
        fill(0, 255, 0);
    }
    ellipse(hoverCircleX, hoverCircleY, hoverCircleRadius * 2, hoverCircleRadius * 2);

    // Here, lets make a circle that is red when you are hovering over it, and also clicking it, and then blue if
    // you are just hovering over it, and then green when you are outside of it. To do this, we need and if-else-if-else
    // Statement

    const distanceBetweenClickCircleAndMouse = dist(mouseX, mouseY, clickCircleX, clickCircleY);

    // Since we need to check this twice, lets do the comparison only once and save it in a variable.
    const mouseInClickCircle = distanceBetweenClickCircleAndMouse <= clickCircleRadius;

    if (mouseInClickCircle && mouseIsPressed) {
        fill(255, 0, 0);
    } else if (mouseInClickCircle) {
        fill(0, 0, 255);
    } else {
        fill(0, 255, 0);
    }

    ellipse(clickCircleX, clickCircleY, clickCircleRadius * 2, clickCircleRadius * 2);
}
