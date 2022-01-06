class MinuteHand extends ClockHand {
    constructor(center, length) {
        super(center, length)
    }

    display(date) {
        stroke(0);
        strokeWeight(3);
        const minutes = date.getMinutes() + date.getSeconds() / 60;
        this.drawLine((-PI / 2) + (TWO_PI * minutes / 60));
    }
}
