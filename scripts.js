// Function that draws a square of divs

const container = document.querySelector("div.container");
drawGrid(16);

// select each box
// add a eventlistener to each box
// on hover: change css to have background color black

const boxes = document.querySelectorAll("div.box");
console.log(boxes);
boxes.forEach(box => box.addEventListener("mouseover", applyColor));

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