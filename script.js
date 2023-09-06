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
  const message = "Please enter grid size required";
  let size = Number(prompt(message));
  while (size > 100 || size < 1 || !Number.isInteger(size)) {
    size = Number(prompt(`${message} (maximum 100)`));
  }
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
    square.style.border = "1px solid grey";
    square.style.backgroundColor = "rgb(255, 255, 255)";

    //function that progressively changes colour of tiles to black after 10 iterations.
    function changeColor() {
      const color = this.style.backgroundColor;
      const rgbArray = color.match(/\d+/g);
      const r = Number(rgbArray[0]);
      const g = Number(rgbArray[1]);
      const b = Number(rgbArray[2]);
      this.style.backgroundColor = `rgb(${r - 25.5}, ${g - 25.5},${b - 25.5})`;
    }

    square.addEventListener("mouseover", changeColor);

    grid.appendChild(square);
  }
}

greatSquares(24);
