class HourHand extends ClockHand {
    constructor(center, length) {
        super(center, length)
    }

    display(date) {
        stroke(0);
        strokeWeight(3);
        const hours = (date.getHours() % 12) + date.getMinutes() / 60;
        this.drawLine((-PI / 2) + (TWO_PI * hours / 12));
    }
}
