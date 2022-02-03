// Function that draws a square of divs

const container = document.querySelector("div.container");
drawGrid(16);

function drawGrid(num) {
  eraseGrid();
  // set correct amount of rows and columns
  container.style.cssText += `grid-template-columns:repeat(${num}, 1fr);grid-template-rows:repeat(${num}, 1fr)`;
  for (let i = 0; i < num*num; i++) {
    // create div with number
    box = document.createElement('div.box');
    box.style.cssText = "border:1px solid black"
    container.appendChild(box);
  }
}

function eraseGrid() {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}