const fireworks = [];

let lastFrameSpawned = 0;
let timeToNextSpawn;

function setup() {
    createCanvas(displayWidth * 0.825, displayHeight * 0.825);
    colorMode(HSB, 360, 100, 100, 255);
    timeToNextSpawn = random(0.25);
}

function draw() {
    background(0);

    if (timeSinceLastSpawn() >= timeToNextSpawn) {
        timeToNextSpawn = random(0.5);
        spawnFirework();
    }

    updateFireworks();
}

function updateFireworks() {
    for (let i = fireworks.length - 1; i >= 0; i--) {
        const firework = fireworks[i];
        if (firework.shouldRemove()) {
            fireworks.splice(i, 1);
        } else {
            firework.update();
            firework.display();
        }
    }
}

function timeSinceLastSpawn() {
    return (frameCount - lastFrameSpawned) / frameRate();
}

function spawnFirework() {
    lastFrameSpawned = frameCount;
    fireworks.push(new Firework(createVector(random(20, width - 20), height)));
}
