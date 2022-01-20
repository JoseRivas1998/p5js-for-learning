class Firework {

    constructor(position) {
        this.position = position.copy();
        this.velocity = createVector(0, -1 * random(5, 10));
        this.targetY = random(height * 0.1, height * 0.75);
        this.startFrame = frameCount;
        this.exploded = false;
        this.thrustParticles = [];
        this.fireworkParticles = [];
    }

    timeAlive() {
        return (frameCount - this.startFrame) / frameRate();
    }

    shouldRemove() {
        return this.exploded && this.fireworkParticles.length === 0;
    }

    update() {
        this.position.add(this.velocity);

        if (this.shouldThrust()) {
            this.thrustParticles.push(new ThrustParticle(this.position));
        } else if (!this.exploded) {
            this.explode();
        }

        this.updateThrust();
        this.updateFireworkParticles();
    }

    updateFireworkParticles() {
        for (let i = this.fireworkParticles.length - 1; i >= 0; i--) {
            const fireworkParticle = this.fireworkParticles[i];
            if (fireworkParticle.shouldRemove()) {
                this.fireworkParticles.splice(i, 1);
            } else {
                fireworkParticle.update();
            }
        }
    }

    updateThrust() {
        for (let i = this.thrustParticles.length - 1; i >= 0; i--) {
            const thrustParticle = this.thrustParticles[i];
            if (thrustParticle.shouldRemove()) {
                this.thrustParticles.splice(i, 1);
            } else {
                thrustParticle.update();
            }
        }
    }

    shouldThrust() {
        return this.position.y > this.targetY;
    }

    explode() {
        const particles = random(50, 100);
        const particleColor = color(random(360), 100, 100);
        for (let i = 0; i < particles; i++) {
            this.fireworkParticles.push(new FireworkParticle(this.position, particleColor));
        }
        this.exploded = true;
    }

    display() {
        this.displayThrust();
        this.displayFireworkParticles();
    }

    displayFireworkParticles() {
        for (let i = 0; i < this.fireworkParticles.length; i++) {
            this.fireworkParticles[i].display();
        }
    }

    displayThrust() {
        for (let i = 0; i < this.thrustParticles.length; i++) {
            this.thrustParticles[i].display();
        }
    }
}
