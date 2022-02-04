const container = document.querySelector("div.container");
drawGrid(16);

const btn = document.getElementById("btnCreate");
btn.addEventListener("click", promptForSize);

function drawGrid(num) {
  eraseGrid();
  container.style.cssText += `grid-template-columns:repeat(${num}, 1fr);grid-template-rows:repeat(${num}, 1fr)`;
  for (let i = 0; i < num*num; i++) {
    box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = "black";
    box.style.opacity = 0;
    container.appendChild(box);
  }
  const boxes = document.querySelectorAll("div.box");
  boxes.forEach(box => box.addEventListener("mouseover", applyGreyscale));
}

function eraseGrid() {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function applyBlack(e) {
  e.target.style.backgroundColor = "black";
}

function promptForSize() {
  num = prompt("How wide should the new grid be?");
  if (num < 1 || num > 100) promptForSize();
  drawGrid(num);
}

function applyRandomColor(e) {
  randomColor = `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`;
  e.target.style.backgroundColor = randomColor;
}

function applyGreyscale (e) {
  let currentOpacity = parseFloat(e.target.style.opacity);
  if (currentOpacity < 1) {
    e.target.style.opacity = currentOpacity + 0.1;
  }
}

function randomNum(num) {
  return Math.floor(Math.random()*num) + 1;
}