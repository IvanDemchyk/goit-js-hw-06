function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const div = document.querySelector("#boxes");

btnCreate.addEventListener("click", (event) => createBoxes(input.value));

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    let size = `${30 + 10 * i}px`;
    box.style.width = size;
    box.style.height = size;
    box.style.backgroundColor = getRandomHexColor();
    div.append(box);
  }
}

function destroyBoxes() {
  div.innerHTML = "";
  input.value = "";
}

btnDestroy.addEventListener("click", destroyBoxes);
