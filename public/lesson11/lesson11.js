/*
 * We have gone over various types of JavaScript data. We have seen simple data such as numbers, booleans, and strings.
 * We have also seen a complex data type when we looked at the array. Now, we will look at the last type of data in
 * JavaScript, and by far the most versatile and powerful. This data type is an object. JavaScript objects are an
 * implementation of a data structure known as a dictionary. A Dictionary consists of key value pairs. A key is a unique
 * identifier for a value in a dictionary. Each key can have exactly one value, however there can be duplicate values.
 *
 * This may be confusing but think of an array. Arrays are also key value pairs, but with a specific rule. The rule is
 * that the keys of an array are all ascending integers. In a dictionary, the key can be anything, including strings,
 * numbers, and so on. In fact, a JavaScript array is simply a special instance of an object.
 *
 * So what are objects good for? Well think about when you need multiple variables to describe a single thing. For
 * example, a car is described by multiple values. The type of the car, the model, the color, and so on are all
 * different variables that would be very annoying to hold individually. With an object, we can group those values
 * into a single object for the car.
 *
 * How do we do this? Well let's fist look at how to create an empty object. To do this, use curly brackets like this:
 *
 * const car = {};
 *
 * So what is happening here? Well, first we created a variable called car. The value of that variable is called a
 * reference, basically instead of holding the object itself, it just stores where in memory the object is. This will
 * be important later but do not worry about that right now. However right now, the object that car references is
 * completely empty. This means that there are no key value pairs, or mappings, in the object. How do we create these?
 * There are two ways to manipulate the data within an object, both with square bracket notation, like an array, or
 * with dot notation. Here is an example:
 *
 * obj[key_expression] = value;
 * obj.key = value;
 *
 * With square brackets, absolutely any value can be used as a key, even a reference to an object can be used. You will
 * only ever see this be used when the key is some dynamic value, or something that is not a string. Otherwise, the dot
 * notation will be the most commonly used notation. Dot notation can be used whenever the key is a string that follows
 * typical JavaScript variable rules. These two notations are used for both reading and writing to the object. Using
 * an assignment like above, if the key does not already exist in the dictionary, it will be added with the value
 * on the right of the equals sign. If the key already exists, then the value in the key value pair will be replaced
 * with the value on the right of the equals sign. Just using the dot notation or square bracket notation without an
 * assignment operator will return the value that the given key maps to. Here is an example where we will create the
 * car object and then set all the values:
 *
 * const car = {};
 * car.name = 'Fiat';
 * car.model = 500;
 * car.weight = 850;
 * car.color = 'white';
 *
 * console.log(car.name);
 * >> Fiat
 *
 * So here all the key value pairs were creates as separate instructions, then in the console log, only the name is
 * referenced, so only the name is printed. However, we don't even have to do this. We do not have to initialize the
 * object as empty and then add each key value pair as an instruction, we can actually initialize an object with data
 * to begin with using JSON. JSON stands for JavaScript Object Notation. Instead of initializing an object with empty
 * curly brackets, we can put key value pairs between those curly brackets. In JSON, the format for the pairs is simply
 * key : value separated by commas. Let's create a person object using JSON:
 *
 * const person = {
 *      firstName: 'John',
 *      lastName: 'Doe',
 *      age: 50,
 *      eyeColor: 'blue'
 * };
 *
 * console.log(person.firstName);
 * >> John
 *
 * So here, person is completely initialized during the declaration. Note that even though the person variable is const,
 * any of those values can be changed at any time. The only thing the const does in this case is make sure that the
 * person variable does not reference a different object.
 *
 * Objects are incredibly powerful and from this point on they will be present in almost every single example and
 * project for the rest of the course.
 *
 */

// This ball object consists of its position, velocity, radius, and even an array that represents the color. Keep in
// mind that the values in an object can be anything, including arrays and objects. Think about how the position data
// can be put in a single position object and the velocity can as well.
const ball = {
    x: 0,
    y: 0,
    velocityX: 0,
    velocityY: 0,
    radius: 20,
    color: [255, 255, 255]
};

function setup() {
    createCanvas(400, 400);
    ball.x = random(width);
    ball.y = random(height);

    const speed = 5;
    const angle = random(TWO_PI);
    ball.velocityX = speed * cos(angle);
    ball.velocityY = speed * sin(angle);

    randomizeColor();
}

function draw() {
    background(220);

    move();
    bounce();
    display();

}

function display() {
    fill(ball.color[0], ball.color[1], ball.color[2]);
    circle(ball.x, ball.y, ball.radius * 2);
}

function move() {
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
}

function bounce() {
    bounceX();
    bounceY();
}

function bounceY() {
    if (ball.y - ball.radius < 0) {
        randomizeColor();
        ball.y = ball.radius;
        ball.velocityY *= -1;
    }
    if (ball.y + ball.radius > height) {
        randomizeColor();
        ball.y = height - ball.radius;
        ball.velocityY *= -1;
    }
}

function bounceX() {
    if (ball.x - ball.radius < 0) {
        randomizeColor();
        ball.x = ball.radius;
        ball.velocityX *= -1;
    }
    if (ball.x + ball.radius > width) {
        randomizeColor();
        ball.x = width - ball.radius;
        ball.velocityX *= -1;
    }
}

function randomizeColor() {
    ball.color[0] = random(255);
    ball.color[1] = random(255);
    ball.color[2] = random(255);
}
