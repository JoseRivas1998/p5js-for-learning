
function rotateVertex(vector, angle) {
    // This uses matrix multiplication to rotate a vector around the origin.
    // https://en.wikipedia.org/wiki/Rotation_matrix
    const sinAngle = sin(angle);
    const cosAngle = cos(angle);
    const x = vector.x * cosAngle - vector.y * sinAngle;
    const y = vector.x * sinAngle + vector.y * cosAngle;
    return createVector(x, y);
}

const ship = {
    maxSpeed: 5,
    maxForce: 0.1,
    init: function() {
        this.location = createVector(random(width), random(height));
        this.velocity = createVector();
        this.acceleration = createVector();
        this.vertices = [
            createVector(10, 0),
            createVector(-10, -7.5),
            createVector(-10, 7.5)
        ];
    },
    display: function () {
        noFill();
        stroke(255);
        beginShape();
        const heading = this.velocity.heading();
        for (let i = 0; i < this.vertices.length; i++) {
            const transformedVertex = rotateVertex(this.vertices[i], heading);
            transformedVertex.add(this.location);
            vertex(transformedVertex.x, transformedVertex.y);
        }
        endShape(CLOSE);
    },
    update() {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.acceleration.set(0, 0);
    },
    seek: function(target) {
        const desired = p5.Vector.sub(target, this.location);
        desired.normalize();
        desired.mult(this.maxSpeed);
        const steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxForce);
        this.applyForce(steer);
    },
    applyForce: function (force) {
        this.acceleration.add(force);
    }
};

let mouseLocation;

function setup() {
    createCanvas(400, 400);
    ship.init();
    mouseLocation = createVector();
}

function draw() {
    background(0);

    mouseLocation.set(mouseX, mouseY);
    ship.seek(mouseLocation);
    ship.update();
    ship.display();
}
