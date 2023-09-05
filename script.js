//create container div for grid and add to html
const div = document.createElement("div");
div.classList.add("grid-cont");
const gridLimit = document.querySelector(".gridLimit");
gridLimit.appendChild(div);

//create button and add to html
const button = document.createElement("button");
button.innerHTML = "Change Size";
button.addEventListener("click", promptSize);
const section = document.querySelector(".sectionOne");
section.prepend(button);

//create function to change size of grid
function promptSize() {
  let size = Number(prompt("Please enter grid size required"));
  while (size > 100 || size < 1) {
    size = Number(prompt("Please enter grid size required (maximum 100)"));
  }
  //CHECK why div === grid-cont???
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  greatSquares(size);
}

//create function to populate grid
function greatSquares(num) {
  const grid = document.querySelector(".grid-cont");
  const width = 750;
  gridLimit.style.width = `${width}px`;

  for (let i = 0; i < num ** 2; i++) {
    const square = document.createElement("div");
    square.style.minHeight = `${width / num}px`;
    square.style.minWidth = `${width / num}px`;
    square.style.border = "1px solid black";
    square.classList.add("square");

    function changeColor() {
      this.classList.remove("square");
      this.classList.add("hover");
    }

    square.addEventListener("mouseover", changeColor);

    grid.appendChild(square);
  }
}

greatSquares(24);
