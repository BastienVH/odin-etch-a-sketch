const container = document.querySelector("div.container");
drawGrid(16); // draw starter grid

// add event listener to container div
container.addEventListener("mouseover", (e) => {
  let target = event.target.closest("div.box");
  if (!target) return; //if no box is targetted, return

  let activeButton = getActiveButton();
  if (activeButton === "black") {
    target.style.backgroundColor = "black";
    target.style.opacity = 1;
  } else if (activeButton === "random") {
    target.style.backgroundColor = getRandomColor();
    target.style.opacity = 1;
  } else {
    target.style.backgroundColor = "black";
    let currentOpacity = parseFloat(target.style.opacity);
    if (currentOpacity < 1) {
      target.style.opacity = currentOpacity + 0.1;
    }
  }
  
});

const btn = document.getElementById("btnCreate");
btn.addEventListener("click", promptForSize);

const colorBtns = document.querySelectorAll(".colorSelector");

// add active class to clicked button
colorBtns.forEach(btn => btn.addEventListener("click", () => {
  let currentActiveBtn = document.querySelector("button.active");
  currentActiveBtn.classList.remove("active");
  btn.classList.add("active");
}));

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
}

function eraseGrid() {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function promptForSize() {
  num = prompt("How wide should the new grid be?");
  if (num < 1 || num > 100) promptForSize();
  drawGrid(num);
}

function getRandomColor() {
  return `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`;
}

function randomNum(num) {
  return Math.floor(Math.random()*num) + 1;
}

//function to return which button is set to active
function getActiveButton() {
  return document.querySelector("button.active").value;
}