let btnMenu = document.querySelector(".header__menu");
let sidenav = document.querySelector(".header__sidenav");
let overlay = document.querySelector(".overlay");

btnMenu.addEventListener("click", () => {
  sidenav.classList.toggle("active");
  overlay.classList.toggle("active");
  btnMenu.classList.toggle("active");
});
