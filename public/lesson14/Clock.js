class Clock {
    constructor(center, radius) {
        this.center = createVector(center.x, center.y);
        this.radius = radius;
        this.clock_hands = [
            new MinuteHand(center, radius * 0.75),
            new HourHand(center, radius * 0.55),
            new SecondHand(center, radius * 0.9)
        ];
    }

    display() {
        noFill();
        stroke(0);
        strokeWeight(1);
        circle(this.center.x, this.center.y, this.radius * 2);
        this.displayDashes();
        this.displayHands();
    }

    displayDashes() {
        for (let i = 0; i < 60; i++) {
            const theta = (-PI / 2) + (TWO_PI * i / 60);
            const cosTheta = cos(theta);
            const sinTheta = sin(theta);
            const p1 = createVector(this.radius * cosTheta, this.radius * sinTheta);
            const p2 = createVector();
            if (i % 5 === 0) {
                strokeWeight(2);
                p2.set(this.radius * 0.85 * cosTheta, this.radius * 0.85 * sinTheta);
            } else {
                strokeWeight(1);
                p2.set(this.radius * 0.9 * cosTheta, this.radius * 0.9 * sinTheta);
            }
            p1.add(this.center);
            p2.add(this.center);
            line(p1.x, p1.y, p2.x, p2.y);
        }
    }

    displayHands() {
        const date = new Date();
        for (let i = 0; i < this.clock_hands.length; i++) {
            this.clock_hands[i].display(date);
        }
    }

}
