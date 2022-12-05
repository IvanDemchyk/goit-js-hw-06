const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  if (Number(input.dataset.length) === Number(input.value.length)) {
    input.classList.add(`valid`);
    input.classList.replace("invalid", "valid");
  } else {
    input.classList.add("invalid");
    input.classList.replace(`valid`, `invalid`);
  }
});
