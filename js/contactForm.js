const inputs = document.querySelectorAll(".contact__input");

const valider = (input) => {
  if (input.validity.valid) {
    input.parentElement.classList.remove("invalid_input");
    return true;
  } else {
    input.parentElement.classList.add("invalid_input");
    showMessageError(input);
    return false;
  }
};

const showMessageError = (input) => {
  let message = "";
  if (input.validity.valueMissing) {
    message = "*Este campo no puede estar vacío";
  } else if (input.validity.typeMismatch) {
    message = "*El correo no es válido";
  } else {
    message = "*Error en el campo";
  }
  input.parentElement.querySelector(".contact__error-message").innerHTML =
    message;
};

inputs.forEach((input) =>
  input.addEventListener("blur", (e) => valider(e.target))
);

const handleSendEmail = (e) => {
  e.preventDefault();
  let validForm = true;
  inputs.forEach((input) => {
    const validField = valider(input);
    if (validField == false) {
      validForm = validField;
    }
  });
  if (validForm) {
    swal(
      "Muchas gracias por contactarnos",
      "Te daremos una respuesta muy pronto",
      "success"
    );
    inputs.forEach((input) => (input.value = ""));
  }
};

const submit_button = document.querySelector("#submit_button");
submit_button.addEventListener("click", handleSendEmail);
