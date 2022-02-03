// Function that draws a square of divs

const container = document.querySelector("div.container");
drawGrid();

function drawGrid() {
  // set correct amount of rows and columns
  container.style.cssText += 'grid-template-columns:repeat(4, 1fr);grid-template-rows:repeat(4, 1fr)';
  for (let i = 0; i < 16; i++) {
    // create div with number
    box = document.createElement('div.box');
    box.textContent = `This is box ${i}`;
    container.appendChild(box);
  }
}