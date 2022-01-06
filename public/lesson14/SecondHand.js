class SecondHand extends ClockHand {
    constructor(center, length) {
        super(center, length)
    }

    display(date) {
        stroke(255, 0, 0);
        strokeWeight(1);
        const seconds = date.getSeconds() + date.getMilliseconds() / 1000;
        this.drawLine((-PI / 2) + (TWO_PI * seconds / 60));
    }

}
