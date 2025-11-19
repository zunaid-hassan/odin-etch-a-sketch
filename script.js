log = console.log;

gridQtBtn = document.querySelector("#grid-quantity-button");
gridQtBtn.addEventListener("click", setGridQuantity);

// gridSzBtn = document.querySelector("#grid-container-size-button");
// gridSzBtn.addEventListener("click", setGridSize);

const gridContainer = document.querySelector(".grid-container");
gridContainer.addEventListener("mouseover", colorGrid);

function createDefaultGrid() {
  const nValue = 16;
  const dimension = nValue * nValue;
  gridWidth = gridContainer.clientWidth / nValue + "px";
  gridHeight = gridContainer.clientHeight / nValue + "px";
  for (let i = 0; i < dimension; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList = "grid-cell";
    gridCell.style.width = gridWidth;
    gridCell.style.height = gridHeight;
    gridContainer.appendChild(gridCell);
  }
}
createDefaultGrid();

let gridNumber;
function setGridQuantity() {
  while (true) {
    const input = prompt("Enter a value for n for n×n grid (1-100): ");
    if (input === null) {
      return;
    }

    gridNumber = Number(input);
    if (isNaN(gridNumber) || gridNumber < 1 || gridNumber > 100) {
      alert("Invalid input, give a number between 1 and 100.");
    } else {
      createGrids(gridNumber);
      return;
    }
  }
}

function createGrids(gridNumber) {
  log(gridNumber);
  clearGrid();
  gridWidth = gridContainer.clientWidth / gridNumber + "px";
  gridHeight = gridContainer.clientHeight / gridNumber + "px";
  dimension = gridNumber * gridNumber;
  for (let i = 0; i < dimension; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList = "grid-cell";
    gridCell.style.width = gridWidth;
    gridCell.style.height = gridHeight;
    gridContainer.appendChild(gridCell);
  }
}

function clearGrid() {
  gridList = document.querySelectorAll(".grid-cell");
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function colorGrid(event) {
  const target = event.target;
  const id = target.id;

  if (!target.classList.contains("grid-cell")) {
    return;
  }
  // Set colour change transition duration
  target.style.transitionDuration = "0.1s";

  //   Get randomized RGB values
  let r = Math.ceil(256 * Math.random());
  let g = Math.ceil(256 * Math.random());
  let b = Math.ceil(256 * Math.random());

  //   target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  target.style.backgroundColor = `lightgray`;
}
