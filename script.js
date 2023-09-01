// document.body.onload = addElement;

function greatSquares(num) {
  const width = 700;
  const outerSect = document.querySelector(".outerSect");
  const section = document.querySelector(".sectionOne");
  const button = document.createElement("button");
  button.innerHTML = "Change Size";
  button.addEventListener("click", promptSize);

  section.prepend(button);
  outerSect.style.width = `${width}px`;
  outerSect.style.height = `${width}px`;
  outerSect.style.border = "1px solid red";

  //create

  for (let i = 0; i < num ** 2; i++) {
    const square = document.createElement("div");
    const grid = document.querySelector(".grid-cont");
    const gridLimit = document.querySelector(".gridLimit");

    square.style.minHeight = `${width / num}px`;
    square.style.minWidth = `${width / num}px`;
    // square.style.backgroundColor = "pink";
    square.style.border = "1px solid black";
    square.classList.add("square");
    square.addEventListener("mouseover", changeColor);

    function changeColor() {
      this.classList.remove("square");
      this.classList.add("hover");
    }

    gridLimit.style.width = `${width}px`;
    grid.appendChild(square);
  }
}

greatSquares(13);
