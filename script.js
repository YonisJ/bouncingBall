"use strict";
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let x = 100;
let y = 100;
let radius = 20;
let dy = 10;
let dx = 5;
requestAnimationFrame(cycle);
function cycle() {
    ctx.clearRect(0, 0, c.width, c.height); //Clears the canvas
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
    if (x < radius || x > c.width - radius) {
        dx = -dx;
    }
    if (y < radius || y > c.height - radius) {
        dy = -dy;
    }
    requestAnimationFrame(cycle);
}
//# sourceMappingURL=script.js.map