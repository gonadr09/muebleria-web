const registerValider = (e) => {
  e.preventDefault();
  console.log("hola");
  const email = document.querySelector(".footer__input");
  if (email.validity.valid) {
    swal("Registrado correctamente", "", "success");
  } else {
    swal("Email incorrecto", "", "error");
  }
};

const register = document.querySelector("#register-submit");
register.addEventListener("click", registerValider);
