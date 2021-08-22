const thrustConeRadius = 10;

class ThrustParticle {

    constructor(spawnPosition) {
        this.position = spawnPosition.copy();
        this.size = random(2, 4);
        const angle = radians(random(90 - thrustConeRadius, 90 + thrustConeRadius));
        const speed = random(2, 5);
        this.velocity = createVector(cos(angle), sin(angle));
        this.velocity.mult(speed);
        this.color = color(random(360), 100, 100);
        this.startFrame = frameCount;
        this.lifeSpan = random(0.1, 0.25);
    }

    shouldRemove() {
        return this.timeAlive() > this.lifeSpan;
    }

    timeAlive() {
        return (frameCount - this.startFrame) / frameRate();
    }

    update() {
        this.position.add(this.velocity);
    }

    display() {
        noStroke();
        this.color.setAlpha(map(this.timeAlive(), 0, this.lifeSpan, 255, 0));
        fill(this.color);
        circle(this.position.x, this.position.y, this.size);
    }

}
