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



function userPlay() {
    let n = document.getElementById("no").value;
    let r = document.getElementById("ratio").value;
    if(n <= 2)
        alert("Vertex should be greater than 2");
    else if(r <= 0 || r >= 100)
        alert("ratio should be between 1 to 99, try 61.8");
    else{
        N = n;
        ratio = r / 100;
        play();
    }
}


function makeCircle(centerX, centerY, radius, colour) {
    // console.log(centerX, centerY)
    ctx.beginPath();
    ctx.fillStyle = colour;
    ctx.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    ctx.fill();
    ctx.closePath();
}

function draw() {
    let radius = height/2 - 40 * RAD;
    let x = width/2, y = height/2;
    let theta = (Math.PI*2)/N; 
    let target = Math.floor(Math.random() * N);
    let calX, calY;
    for(let i = 0; i < N; ++i) {
        let currentTheta = i * theta - (Math.PI/2);
        let pointX = x + radius * Math.cos(currentTheta);
        let pointY = y + radius * Math.sin(currentTheta);
        let currentColor = i == target ? red : blue;
        makeCircle(pointX, pointY, 10 * RAD, currentColor);
        if(i == target) {
            calX = pointX;
            calY = pointY;
        }     
    }
    makeCircle(centerX, centerY, RAD, blue);
    centerY = (ratio * calY) + (1 - ratio) * centerY;
    centerX = (ratio * calX) + (1 - ratio) * centerX;
    const myTimer = setTimeout(draw, 1);
}

function clear() {
    ctx.fillStyle = dark;
    ctx.fillRect(0, 0, width, height);
}

window.addEventListener("load", play);

function play() {
    clear();
    draw();
}