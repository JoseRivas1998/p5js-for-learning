/*
 * This example will consist of an array of objects. Which is an incredible powerful way to have many similar objects
 * in one program. We are also using functions to generate many objects, such as a function that generates a velocity,
 * the position, the vertices of each asteroid and the asteroid itself. As you can tell, our examples are getting
 * closer and closer to contain all of the concepts we will need to start making games.
 */

const astroids = [];

function setup() {
    createCanvas(500, 500);
    for (let i = 0; i < 10; i++) {
        astroids.push(createAsteroid());
    }
    console.log(astroids);
}

function createAsteroid() {
    const radius = random(50);
    return {
        center: getRandomPosition(),
        velocity: getRandomVelocity(map(radius, 0, 50, 3, 1)),
        rotation: 0,
        angularVelocity: map(radius, 0, 50, 0.05, 0.025) * getRandomDirection(),
        vertices: createVertices(radius)
    };
}

function createVertices(radius) {
    const vertices = [];
    const bumpHeight = map(radius, 0, 50, 0, 25);
    for (let j = 0; j < 20; j++) {
        const theta = map(j, 0, 20, 0, TWO_PI);
        const vertexDist = radius + random(bumpHeight);
        const newVertex = {
            x: vertexDist * Math.cos(theta),
            y: vertexDist * Math.sin(theta)
        };
        vertices.push(newVertex);
    }
    return vertices;
}

function getRandomPosition() {
    return {
        x: random(width),
        y: random(height)
    };
}

function getRandomVelocity(speed) {
    const direction = random(TWO_PI);
    return {
        x: speed * Math.cos(direction),
        y: speed * Math.sin(direction)
    };
}

function getRandomDirection() {
    let rotationDirection = 1;
    if (random(1) > 0.5) {
        rotationDirection = -1;
    }
    return rotationDirection;
}

function draw() {
    background(0);

    stroke(255);
    strokeWeight(2);
    noFill();
    for (let i = 0; i < astroids.length; i++) {
        const asteroid = astroids[i];
        updateAsteroid(asteroid);
        displayAsteroid(asteroid);
    }

}

function updateAsteroid(asteroid) {
    moveAsteroid(asteroid);
    asteroidEdge(asteroid);
    rotateAsteroid(asteroid);
}

function moveAsteroid(asteroid) {
    asteroid.center.x += asteroid.velocity.x;
    asteroid.center.y += asteroid.velocity.y;
}

function asteroidEdge(asteroid) {
    if (asteroid.center.x < -75) {
        asteroid.center.x += width + 75;
    } else if (asteroid.center.x > width + 75) {
        asteroid.center.x -= width + 75;
    }
    if (asteroid.center.y < -75) {
        asteroid.center.y += height + 75;
    } else if (asteroid.center.y > height + 75) {
        asteroid.center.y -= height + 75;
    }
}

function rotateAsteroid(asteroid) {
    asteroid.rotation += asteroid.angularVelocity;
    if (asteroid.rotation > TWO_PI) {
        asteroid.rotation -= TWO_PI;
    } else if (asteroid.rotation < 0) {
        asteroid.rotation += TWO_PI;
    }
}

function displayAsteroid(asteroid) {
    beginShape();
    for (let i = 0; i < asteroid.vertices.length; i++) {
        const rotatedVertex = rotateVertex(asteroid.vertices[i], asteroid.rotation);
        vertex(asteroid.center.x + rotatedVertex.x, asteroid.center.y + rotatedVertex.y);
    }
    endShape(CLOSE);
}

function rotateVertex(v, theta) {
    const sinTheta = Math.sin(theta);
    const cosTheta = Math.cos(theta);
    return {
        x: v.x * cosTheta - v.y * sinTheta,
        y: v.x * sinTheta + v.y * cosTheta
    };
}
