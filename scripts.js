const container = document.querySelector("div.container");
drawGrid(16); // draw starter grid

// add event listener to container div
container.addEventListener("mouseover", function() {
  let target = event.target.closest("div.box");
  target.style.backgroundColor = getRandomColor();
});

const btn = document.getElementById("btnCreate");
btn.addEventListener("click", promptForSize);

const colorBtns = document.querySelectorAll(".colorSelector");
colorBtns.forEach(btn => btn.addEventListener("click", setColor));
// add click event to buttons where calue gets passed to function setColor

function drawGrid(num) {
  eraseGrid();
  container.style.cssText += `grid-template-columns:repeat(${num}, 1fr);grid-template-rows:repeat(${num}, 1fr)`;
  for (let i = 0; i < num*num; i++) {
    box = document.createElement("div");
    box.classList.add("box");
    // box.style.backgroundColor = "black";
    // box.style.opacity = 1;
    container.appendChild(box);
  }
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

function getRandomColor() {
  return `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`;
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

function setColor(e) {
  const boxes = document.querySelectorAll("div.box");
  if (e.target.value === "black") {
    console.log("You chose black");
    boxes.forEach(box => box.addEventListener("mouseover", applyBlack));
  } else if (e.target.value === "random") {
    console.log("You chose random");
    boxes.forEach(box => box.addEventListener("mouseover", applyRandomColor));
  } else {
    console.log("You chose greyscale");
    boxes.forEach(box => box.addEventListener("mouseover", applyGreyscale));
  }
}