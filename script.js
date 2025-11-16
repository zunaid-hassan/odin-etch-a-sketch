const gridNumber = Number(prompt("Enter grid number between 1-100: "));
// gridNumber = 5;
let gridContainer = document.querySelector(".grid-container");
gridContainer.addEventListener("mouseover", colorGrid);

function createGrids() {
  if (gridNumber > 0 && gridNumber <= 100) {
    let gridContainer = document.querySelector(".grid-container");
    gridContainer.addEventListener("mouseover", colorGrid);
    for (let i = 0; i < gridNumber; i++) {
      const grid = document.createElement("div");
      grid.classList = "grid";
      gridContainer.appendChild(grid);
    }
  } else {
    alert("Sorry, refresh and give a number between 1 and 100!");
    return;
  }
}

function colorGrid(event) {
  const target = event.target;
  const id = target.id;

  if (!target.classList.contains("grid")) {
    return;
  }
  // Set colour change transition duration
  target.style.transitionDuration = "0.1s";

  //   Get randomized RGB values
  let r = Math.ceil(256 * Math.random());
  let g = Math.ceil(256 * Math.random());
  let b = Math.ceil(256 * Math.random());

  target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  //   target.style.backgroundColor = `slategray`;
}

createGrids();
