// document.body.onload = addElement;

function greatSquares(num) {
  const width = 650;
  const outerSect = document.querySelector(".outerSect");

  outerSect.style.width = `${width}px`;
  outerSect.style.height = `${width}px`;
  outerSect.style.border = "1px solid red";

  //create

  for (let i = 0; i < num ** 2; i++) {
    const square = document.createElement("div");
    const grid = document.querySelector(".grid-cont");
    const sectOne = document.querySelector(".gridLimit");

    square.style.minHeight = `${width / num}px`;
    square.style.minWidth = `${width / num}px`;
    square.style.backgroundColor = "pink";
    square.style.border = "1px solid black";

    sectOne.style.width = `${width}px`;
    grid.appendChild(square);
  }
}

greatSquares(9);
