let counterValue = 0;
const btnplus = document.querySelector('button[data-action="increment"]');
const btnminus = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector("#value");

const decrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

btnminus.addEventListener("click", decrement);
btnplus.addEventListener("click", increment);
