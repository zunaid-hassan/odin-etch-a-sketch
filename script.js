let gridContainer = document.querySelector(".grid-container");

gridContainer.addEventListener("mouseover", colorGrid);

function colorGrid(event) {
  const target = event.target;
  const id = target.id;

  if (!target.classList.contains("grid")) {
    return;
  }
  let r = Math.ceil(256 * Math.random());
  let g = Math.ceil(256 * Math.random());
  let b = Math.ceil(256 * Math.random());

  target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
