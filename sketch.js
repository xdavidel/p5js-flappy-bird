var bird;

function setup() {
    createCanvas(300, 300);
    bird = new Bird();
}

function draw() {
    background(51);

    bird.update();
    bird.show();
}

function mousePressed() {
    bird.flapp();
}