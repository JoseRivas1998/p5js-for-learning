class FireworkParticle {

    constructor(position, particleColor) {
        this.position = position.copy();
        this.size = random(2, 6);
        this.color = color(particleColor);
        const angle = random(TWO_PI);
        this.velocity = createVector(cos(angle), sin(angle));
        this.velocity.mult(random(1, 2.5));
        this.lifespan = map(this.size, 2, 6, 0.5, 1);
        this.startFrame = frameCount;
    }

    timeAlive() {
        return (frameCount - this.startFrame) / frameRate();
    }

    shouldRemove() {
        return this.timeAlive() > this.lifespan;
    }

    update() {
        this.position.add(this.velocity);
    }

    display() {
        noStroke();
        const timeLived = this.timeAlive();
        if (timeLived >= this.lifespan * 0.5){
            this.color.setAlpha(map(timeLived, this.lifespan * 0.5, this.lifespan, 255, 0));
        }
        fill(this.color);
        circle(this.position.x, this.position.y, this.size);
    }


}
