class ClockHand {
    constructor(center, length) {
        this.center = createVector(center.x, center.y);
        this.length = length;
    }

    display(date) {
        throw new Error("display(date) method not implemented.");
    }

    drawLine(theta) {
        const endX = this.center.x + this.length * cos(theta);
        const endY = this.center.y + this.length * sin(theta);
        line(this.center.x, this.center.y, endX, endY);
    }

}
