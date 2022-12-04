const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  if (input.dataset.length == input.value.length) {
    input.classList.add(`valid`);
  } else {
    input.classList.replace(`valid`, `invalid`);
  }
});
