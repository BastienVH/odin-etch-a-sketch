// Function that draws a square of divs

const container = document.querySelector("div.container");
drawGrid(16);

const btn = document.getElementById("btnCreate");
btn.addEventListener("click", promptForSize);

function drawGrid(num) {
  eraseGrid();
  // set correct amount of rows and columns
  container.style.cssText += `grid-template-columns:repeat(${num}, 1fr);grid-template-rows:repeat(${num}, 1fr)`;
  for (let i = 0; i < num*num; i++) {
    // create div with number
    box = document.createElement("div");
    box.classList.add("box");
    box.style.cssText = "border:1px solid black"
    container.appendChild(box);
    const boxes = document.querySelectorAll("div.box");
    boxes.forEach(box => box.addEventListener("mouseover", applyColor));
  }
}

function eraseGrid() {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function applyColor(e) {
  e.target.style.backgroundColor = "black";
}

function promptForSize() {
  num = prompt("How wide should the new grid be?");
  drawGrid(num);
}