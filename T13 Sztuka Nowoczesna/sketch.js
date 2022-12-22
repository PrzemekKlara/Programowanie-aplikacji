let rectWidth;
let rectHeight;


function setup() {
    createCanvas(1600, 800);
    noStroke();
    background(230);
    rectWidth = width / 20;
    rectHeight = height / 10;
}

function draw() {
}

function keyPressed() {
    let keyIndex = -1;
    if (key >= 'a' && key <= 'z') {
        keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    if (keyIndex === -1) {
        background(230);
    } else {
        randFill_r = Math.floor(Math.random() * 255 + 1);
        randFill_g = Math.floor(Math.random() * 255 + 1);
        randFill_b = Math.floor(Math.random() * 255 + 1);
        fill(randFill_r, randFill_g, randFill_b);
        let x = map(keyIndex, 0, 25, 0, width - rectWidth);
        rect(x, 0, rectWidth, height);

        let y = map(keyIndex, 25, 0, 0, height - rectHeight);
        rect(0, y, width, rectHeight);
    }
}
