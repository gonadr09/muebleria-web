const menu = () => {
  const openButton = document.querySelector(".nav__menu");
  const menu = document.querySelector(".nav__link");
  const closeMenu = document.querySelector(".nav__close");
  const links = document.querySelectorAll(".nav__links");

  openButton.addEventListener("click", () => {
    menu.classList.add("nav__link--show");
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("nav__link--show");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("nav__link--show");
    });
  });
};

menu();
