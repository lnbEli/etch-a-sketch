// document.body.onload = addElement;

function greatSquares(num) {
  for (let i = 0; i < num ** 2; i++) {
    const square = document.createElement("div");
    const grid = document.querySelector(".grid-cont");
    const sectOne = document.querySelector(".gridLimit");
    square.classList.add("sqStyle");
    sectOne.style.width = `${num * 52}px`;
    grid.appendChild(square);
  }
}

greatSquares(100);
