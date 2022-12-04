const form = document.querySelector(".login-form");

function submitForm(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const data = event.currentTarget.elements;
  const mail = data.email.value;
  const pass = data.password.value;
  const formData = {
    mail,
    pass,
  };
  console.log(formData);
  event.currentTarget.reset();
}

form.addEventListener("submit", submitForm);
