/*
 * Objects do more than just contain data. In broader computer science, an Object is an abstract concept which is
 * supposed to have both state and behavior. We have already looked at state, the variables and data that make up the
 * object. In a previous lesson, we mentioned that JavaScript functions can actually be put in variables. This is
 * useful in many ways, but think about what that means for our objects. This means that we can store the behavior of an
 * object in a key-value pair just like we store the state. By doing this, we have started our journey in Object
 * Oriented Programming (OOP), a programming paradigm that revolves around objects and how they interact.There are three
 * major pillars of OOP, and the first one is Encapsulation. Encapsulation is the process of combining the state and
 * behavior of an object in a single coding construct. We do this in JavaScript by putting the behavior of an object in
 * a key-value pair along with variables. Functions inside an object are called methods. The syntax for creating a
 * method is the same as making any key-value pair in an object, the only difference being that the value is an
 * anonymous function.
 *
 * const person = {
 *      firstName: 'John',
 *      lastName: 'Doe',
 *      fullName: function() {
 *          return this.firstName + ' ' + this.lastName;
 *      }
 * };
 *
 * person.fullName
 * >> [Function: fullName]
 * person.fullName();
 * >> John Doe
 *
 * A lot to unpack here. First, notice the function syntax is slightly different, after the function keyword there is
 * no name, just the parentheses for the parameters. This means that the function is an anonymous function. The function
 * itself does not have a name, however a reference to the function is stored in the fullName property of the person
 * object. Notice how the first line referencing just the fullName property returns the function reference. To actually
 * call the function, we still need to use the parenthesis and pass in arguments as usual.
 *
 * The next thing to keep in mind is very important, remember the assignment operations goes from right to left. This
 * means that inside that object, the variable 'person' does not exist because the computer has not created it yet. So
 * how do we access the state of an object inside the behavior? In JavaScript, the "this" keyword does exactly that.
 * The this keyword is a special variable that exists inside all objects that basically refers to the object itself.
 * Note that the "this" rabbit hole in JavaScript is very deep and will cause you a headache in larger projects, but
 * for now, just think about it as a reference to the object itself. Using this allows us to access variables within
 * the object, including both reading and writing, it even allows for the creation of new variables after the object
 * has been created.
 *
 * Methods are incredibly important because they allow us to organize our code even further, and you will see in later
 * lessons how they let us even reuse the same code for similar objects.
 *
 */

const blob = {
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    zOff: 0,
    r: 50,
    bumpHeight: 12,
    noiseRadius: 1.5,
    noiseOffset: 10,
    iterations: 360,
    // having an init function is not the best practice, we will learn later on how to actually initialize objects
    init: function () {
        this.position.x = random(width);
        this.position.y = random(height);
        const speed = 5;
        const angle = random(TWO_PI);
        this.velocity.x = cos(angle) * speed;
        this.velocity.y = sin(angle) * speed;
    },
    display() {
        strokeWeight(5);
        fill(255, 153, 0);
        stroke(227, 130, 28);
        beginShape();
        for (let i = 0; i < this.iterations; i++) {
            const angle = map(i, 0, this.iterations, 0, TWO_PI);
            const cosAngle = cos(angle);
            const sinAngle = sin(angle);
            const xOff = this.noiseOffset + cosAngle * this.noiseRadius;
            const yOff = this.noiseOffset + sinAngle * this.noiseRadius;
            const bump = map(noise(xOff, yOff, this.zOff), 0, 1, -this.bumpHeight, this.bumpHeight);
            const x = this.position.x + ((this.r + bump) * cosAngle);
            const y = this.position.y + ((this.r + bump) * sinAngle);
            vertex(x, y);
        }
        endShape(CLOSE);
        this.zOff += 0.025;
    },
    update() {
        this.move();
        this.edges();
    },
    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    },
    edges() {
        if (this.position.x < this.r) {
            this.position.x = this.r;
            this.velocity.x *= -1;
        }
        if (this.position.x > width - this.r) {
            this.position.x = width - this.r;
            this.velocity.x *= -1;
        }
        if (this.position.y < this.r) {
            this.position.y = this.r;
            this.velocity.y *= -1;
        }
        if (this.position.y > height - this.r) {
            this.position.y = height - this.r;
            this.velocity.y *= -1;
        }
    }
};

// Notice how simple our sketch code is now! All because we move the actual code into the blob object.

function setup() {
    createCanvas(400, 400);
    blob.init();
}

function draw() {
    background(210);
    blob.display();
    blob.update();
}
