const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let canvasWidth = (canvas.width = window.innerWidth);
let canvasHeight = (canvas.height = window.innerHeight);

function resizeCanvas() {
  canvasWidth = canvas.width = window.innerWidth;
  canvasHeight = canvas.height = window.innerHeight;
  ctx.clearRect(0, 0, canvasWidth, canvasHeight); 
  drawAnimatedLines();
}

function draw(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}

function drawAnimatedLines() {
  let alt = 30;
  let intervalId = setInterval(() => {
    if (alt < canvasWidth * 2) {
      draw(0, alt, alt, 0);
      draw(canvasWidth, alt, canvasWidth - alt, 0);
      alt += 30;
    } else {
      clearInterval(intervalId);
    }
  }, 100); 
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);
