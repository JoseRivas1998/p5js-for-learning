/*
 * Here we are, the final lesson in this series. Go ahead and give yourself a pat on the back because after this lesson
 * our JavaScript learning will transition from being example based to project based. You have learned enough
 * fundamental JavaScript concepts to start putting them together to make all sorts of projects, including games.
 *
 * There are two more pillars of Object-Oriented Programming, in the last lesson we looked at Encapsulation, in this
 * lesson we will look at Inheritance and Polymorphism. It's quite difficult to teach these two on their own because
 * they heavily rely on each other. So, let's say we had a bunch of classes that are very similar to each other, so
 * we created them by copying and pasting a bunch of similar code for their methods and instance variables.
 */

let clock;

function setup() {
    createCanvas(windowWidth, windowHeight);
    clock = new Clock(createVector(width / 2, height / 2), min(width / 2, height / 2) * 0.95);
}

function draw() {
    background(220);
    clock.display();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    clock = new Clock(createVector(width / 2, height / 2), min(width / 2, height / 2) * 0.95);
}
