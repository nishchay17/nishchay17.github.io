const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");
const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const mandelbrotBtn = document.getElementById("ms");
const sierpinskiBtn = document.getElementById("st");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const blue = "#29b6f6";
const red = "#ff3d00";
const green = "#64ffda";
const dark = "#212121";
let centerX = Math.random() * width;
let centerY = Math.random() * height;
const RAD = 1;
let N = 3;
let ratio = .5;
let magnificationFactor = 200;
let px = 1.8, py = 1.3;
let ms = true;


function isMandelbrot(x, y) {
    let maxIterations = 400;
    let cx = x, cy = y;
    for(let i = 0; i < maxIterations; ++i) {
        let tempX = (x * x) - (y * y);
        let tempY = 2 * x * y;
        x = tempX + cx;
        y = tempY + cy;
    }
    if(Math.abs(x + y) < 16)
        return true;
    return false;
}

function draw() {
    for(let x = 0; x < width; ++x) {
        for(let y = 0; y < height; ++y) {
            if(isMandelbrot(x / magnificationFactor - px, y / magnificationFactor - py)) {
                makeCircle(x, y, 1, red);
            }
            else {
                makeCircle(x, y, 1, dark);
            }
        }
    }
    document.getElementById("spin").style.display = "none";
}

function makeCircle(centerX, centerY, radius, colour) {
    ctx.beginPath();
    ctx.fillStyle = colour;
    ctx.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    ctx.fill();
    ctx.closePath();
}

function clear() {
    ctx.fillStyle = dark;
    ctx.fillRect(0, 0, width, height);
}

plusBtn.addEventListener("click", () => {
    magnificationFactor += 10;
    draw();
});

minusBtn.addEventListener("click", () => {
    magnificationFactor -= 10;
    draw();
});

rightBtn.addEventListener("click", () => {
    px += 0.1;
    draw();
});

leftBtn.addEventListener("click", () => {
    px -= 0.1;
    draw();
});

downBtn.addEventListener("click", () => {
    py += 0.1;
    draw();
});

upBtn.addEventListener("click", () => {
    py -= 0.1;
    draw();
});

window.addEventListener("load", () => {
    clear();
    draw();
});