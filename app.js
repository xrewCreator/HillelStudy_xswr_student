let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let colorVal = document.getElementById("color");
let opacityVal = document.getElementById("alpha");
let clearBtn = document.getElementById("clearBtn");

let draw = false;
let lastX = 0;
let img = new Image();
img.src = "photo.jpg";

img.onload = () => {
  let pattern = ctx.createPattern(img, "repeat");
  ctx.fillStyle = pattern;

  ctx.fillRect(0, 0, canvas.width, canvas.height);
};
function drawRect(sx, ex) {
  let color = colorVal.value;
  let alpha = opacityVal.value;

  ctx.fillStyle = color;
  ctx.globalAlpha = alpha;
  ctx.fillRect(sx, 0, ex - sx, canvas.height);
}

canvas.addEventListener("mousedown", (e) => {
  draw = true;
  lastX = e.offsetX;
});
canvas.addEventListener("mouseup", (e) => {
  draw = false;
});
canvas.addEventListener("mousemove", (e) => {
  if (draw) {
    drawRect(lastX, e.offsetX);
    lastX = e.offsetX;
  }
});
clearBtn.addEventListener("click", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let img = new Image();
  img.src = "photo.jpg";
  img.onload = () => {
    let pattern = ctx.createPattern(img, "repeat");
    ctx.fillStyle = pattern;
    ctx.globalAlpha = 1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };
});
