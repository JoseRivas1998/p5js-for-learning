/*
 * Often times we need to be able to make multiple objects with the same properties. In past examples, functions were
 * used to create similar objects but there are better ways of doing this. JavaScript provides a way to create templates
 * for objects that encapsulate both data and behavior in the form of Classes. A class is a template for a JavaScript
 * object, think of it as the blueprint for the object, not the object itself. So, let's say that we want a blueprint
 * for an object that represents a point in space that can move. So let's start that by creating a class with the
 * following syntax:
 *
 * class Point {
 * }
 *
 * This is all that is needed to create a class. In general, this code would go in a dedicated file with the same name
 * as the class. In this case, Point.js would be the name of the file that holds the Point class. We will need to
 * include that file in the same html as our sketch, we will see that in this example. Right now, the object this class
 * would create is completely empty. Let's see how to make such an object:
 *
 * const p1 = new Point();
 * console.log(p1);
 * >> Point {}
 *
 * So what is p1 exactly? This is what is called instantiating an instance of a class. This means that p1 is an instance
 * of the Point class. It is a JavaScript object that is created from a class, notice how classes and objects are two
 * different things. An instance is created using the new keyword and is a special type of JavaScript object, a class
 * is a blueprint for making these instances. You can have many homes built from the same blueprint, in the same way
 * that you can have many instances of the same class. Each instance is unique and has its own data. So how do we say
 * what data is stored in the object? We create what are called instance variables. You will see these called field
 * and members as well, they are all the same. An instance variable is a variable that every instance of a class has
 * its own unique version of. Think of a Person class, each person would have a name instance variable, so each person
 * has a name, but the name itself is unique to the person. How do we add those in JavaScript? We use that using what
 * is called a constructor. A constructor is a function that is called when an instance is created. When we use the
 * new keyword, you can see it looks like we are calling a function, that is because we are, that is the constructor
 * function. Here is how we define the constructor method:
 *
 * class Point {
 *      constructor() {
 *          this.pos = {x: 0, y: 0};
 *      }
 * }
 *
 * So we can see here that the constructor creates a new key value pair in the "this" object. "this" refers to the
 * current instance of the Point class. JavaScript can get confusing with that, but just think of "this" as "me" in
 * every method. So by adding a key value pair to the "this" object, we now have an instance variable, and since it
 * is created in the constructor, that instance variable will be created for all instances of the Point class. Let's
 * see what this looks like:
 *
 * const p1 = new Point();
 * console.log(p1);
 * >> Point { pos: { x: 0, y: 0 } }
 *
 * So you can see here that the point now has the instance variable that we want, it is no longer an empty object.
 * But what if we wanted to initialize a point at a specific location? Right now the only option we have is to start at
 * (0, 0). Well the constructor method is like any other method, and can take in parameters, so let's change our
 * constructor to have parameters:
 *
 * class Point {
 *      constructor(initial_x, initial_y) {
 *          this.pos = {x: initial_x, y: initial_y};
 *      }
 * }
 *
 * And now to use this new constructor:
 *
 * const p1 = new Point(1, 3);
 * console.log(p1);
 * >> Point { point: { x: 1, y: 3 } }
 * const p2 = new Point(0, 6);
 * console.log(p2);
 * Point { point: { x: 0, y: 6 } }
 *
 * And just like that, we have two points with different x, y locations created without any additional mutation code.
 * Constructor functions are incredibly powerful, but right now we only have state in our object, we can add behavior
 * by creating a method in the class. Let's see how we do that:
 *
 * class Point {
 *      constructor(initial_x, initial_y) {
 *          this.pos = {x: initial_x, y: initial_y};
 *      }
 *
 *      moveBy(x, y) {
 *          this.pos.x += x;
 *          this.pos.y += y;
 *      }
 * }
 *
 * The moveBy method will now be created with every object created from the Point class. So we can use it like we used
 * any method before:
 *
 * const p1 = new Point(0, 0);
 * console.log(p1);
 * >> Point { pos: { x: 0, y: 0 } }
 * p1.moveBy(5, 6);
 * console.log(p1);
 * >> Point { pos: { x: 5, y: 6 } }
 * p1.moveBy(-4, 1);
 * console.log(p1);
 * >> Point { pos: { x: 1, y: 7 } }
 *
 * And thus, our Point class is done! It can start anywhere, and then we can use the moveBy function to translate
 * the point any number of units. You can see that the moveBy method changes the state of the point, so we have
 * successfully create a blueprint for objects with both state and behavior, and thus have completed the first major
 * pillar of Object-Oriented Programming called "Encapsulation".
 *
 */
let slowPoint;
let fastPoint;

const circleRadius = 190;
const animationSeconds = 10;

function setup() {
    createCanvas(400, 400);
    const slowPointVelocity = TWO_PI * ((1 / 60) / animationSeconds);
    const fastCircleMultiplier = 8;
    slowPoint = new CirclePoint(circleRadius, slowPointVelocity);
    fastPoint = new CirclePoint(circleRadius, slowPointVelocity * fastCircleMultiplier);
    background(0);
}

function draw() {
    translate(width / 2, height / 2);
    slowPoint.update();
    fastPoint.update();
    noFill();
    stroke(255);
    circle(0, 0, circleRadius * 2);
    slowPoint.display();
    fastPoint.display();
    slowPoint.drawConnection(fastPoint);
    if (slowPoint.angle > TWO_PI) {
        noLoop();
    }
}
