let gridColourRGB = true;
const startingGridSize = 24;
let currentGridSize = startingGridSize;

//create container div for grid and add to html
const div = document.createElement("div");
div.classList.add("grid-cont");
const gridLimit = document.querySelector(".gridLimit");
gridLimit.appendChild(div);

//create buttons and add to html
const button = document.createElement("button");
const buttonColor = document.createElement("button");
button.innerHTML = "Change Size";
buttonColor.innerHTML = "RGB/Greyscale";
buttonColor.addEventListener("click", pressToChangeColor);
button.addEventListener("click", promptSize);
const header = document.querySelector(".header");
header.prepend(button);
header.prepend(buttonColor);

//create function to change size of grid
function promptSize() {
  const message = "Please enter grid size required";
  currentGridSize = Number(prompt(message));
  while (
    currentGridSize > 100 ||
    currentGridSize < 1 ||
    !Number.isInteger(currentGridSize)
  ) {
    currentGridSize = Number(prompt(`${message} (maximum 100)`));
  }
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  greatSquares(currentGridSize);
}

//create function to change colour of grid
function pressToChangeColor() {
  gridColourRGB ? (gridColourRGB = false) : (gridColourRGB = true);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  greatSquares(currentGridSize);
}

//create function to populate grid
function greatSquares(num) {
  const grid = document.querySelector(".grid-cont");
  const width = 580;
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

    //function that changes colour of tiles to random colour
    function changeColorRGB() {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      const color = `rgb(${r}, ${g}, ${b})`;
      this.style.backgroundColor = color;
    }

    square.addEventListener(
      "mouseover",
      gridColourRGB ? changeColorRGB : changeColor
    );

    grid.appendChild(square);
  }
}

greatSquares(startingGridSize);
