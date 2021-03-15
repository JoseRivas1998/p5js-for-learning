/*
 * Just as computers are great at doing math and logic, they are also great at doing the same thing over and over
 * again. A computer is just as effective as doing a task once as it is doing a task a hundred times.
 *
 * We can tell computers to do these tasks using loops. In a loop, a sequence of code is repeated until the computer
 * reaches a point which we tell it to stop. Each time the code is ran, it is called an iteration. Each iteration can
 * be exactly the same, or slightly different based on how far along the loop the computer has gone. Imagine coding
 * facebook's birthday email system. It's completely impossible to code each individual birthday to send out the emails
 * on each user's birthday. Instead of doing this, there is an loop that sends an email for each user whose birthday
 * is today. So how do we code a loop? Well there are two ways, a while-loop and a for-loop.
 *
 * Similar to an if statement, a while loop works based on a boolean expression. The difference between a while loop
 * and an if statement, is that after the code in the while loop is ran, if the boolean expression is still true, then
 * it runs the loop again. Here is the syntax:
 *
 * while (<bool>) {
 *      <code>
 * }
 *
 * So here is how it works: first the <bool> is evaluated, if the result was false, it will move on. If the result was
 * true, then <code> is executed. After <code> is executed, the <bool> is checked again, if it is false, it will move
 * on, if it is true again, <code> will executed again, and the <bool> will be checked again. This happens constantly
 * until the <bool> is false. If the <bool> never becomes false, then the loop will go on forever until the program
 * is killed or the computer is turned off. Within the <code>, there should be logic that will make the <bool>
 * eventually false. There is a common structure to a while loop that will make sure this happens:
 *
 * <initializer>
 * while (<bool>) {
 *      <code>
 *      <incrementer>
 * }
 *
 * The idea here is that the <initializer> will create a variable, the <bool> will check the value of that variable,
 * typically comparing it to some number, and the <incrementer> is a statement that will make the variable approach
 * the condition. So a while loop can be written this way, or have a more complex structure. If your while loop looks
 * like the code above, then it is possible that it should be converted into a for loop.
 *
 * A for loop takes the idea of an initializer, bool, and incrementer and formalizes it as a part of the syntax. Here
 * is that syntax:
 *
 * for (<initializer>; <bool>; <incrementer>) {
 *      <code>
 * }
 *
 * In a for loop, the <initializer> is first ran, then the <bool> is checked, if it is true, the <code> is ran and
 * the <incrementer> is ran. It then loops back to check the <bool> again, if the <bool> is ever false, the <code> will
 * not be ran and the loop will exit. This works the same way that the while loop above works. A for loop is sometimes
 * called a counting loop, because it is typically used if we want to run code a specific amount of time that we can
 * know ahead of time.
 *
 * A for loop can behave exactly as a while loop when written like this:
 *
 * for (;<bool>;) {
 *      <code>
 * }
 *
 * Here, there is no <initializer> and <incrementer>, so the for loop just checks the <bool> and runs the <code> exactly
 * as a while loop would.
 *
 * Having a while loop behave like a for loop and a for loop behave like a while loop hopefully shows that for most
 * cases which loop to use is interchangeable. An experienced programmer will know based on the situation which one
 * would be the easiest and more logical to write. By rule of thumb, here is a way to know: if it can be known when
 * the loop starts exactly how many times the loop will run, use a for loop, if the amount of times the loop will run
 * is determined by the code within the loop itself and it cannot be necessarily known ahead of time, use a while loop.
 * In today's code example, we will be writing a while loop and for loop to basically do the same thing just to get a
 * feel for what loops are like.
 *
 */

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
