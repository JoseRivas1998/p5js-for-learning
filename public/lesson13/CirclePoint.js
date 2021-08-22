class CirclePoint {

    constructor(radius, angularVelocity) {
        this.radius = radius;
        this.pos = createVector(radius, 0);
        this.angle = 0;
        this.angularVelocity = angularVelocity;
    }

    update() {
        this.angle += this.angularVelocity;
        this.pos.x = this.radius * cos(this.angle);
        this.pos.y = this.radius * sin(this.angle);
    }

    display() {
        fill(255);
        noStroke();
        circle(this.pos.x, this.pos.y, 2.5);
    }

    drawConnection(otherPoint) {
        noFill();
        stroke(255, 255, 0);
        line(this.pos.x, this.pos.y, otherPoint.pos.x, otherPoint.pos.y);
    }

}
