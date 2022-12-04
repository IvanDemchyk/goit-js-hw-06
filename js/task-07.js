const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

const start = `${input.value}px`;
span.style.fontSize = start;

input.addEventListener("input", (event) => {
  let size = `${input.value}px`;
  span.style.fontSize = size;
});
