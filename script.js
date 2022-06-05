let btnMenu = document.querySelector(".header__menu");
let sidenav = document.querySelector(".header__sidenav");
let overlay = document.querySelector(".overlay");
let dropdownParent = document.querySelectorAll(".dropdown-parent");
let dropdownContent = document.querySelectorAll(".dropdown");
let arrowIcon = document.querySelectorAll(".dropdown-parent::after");

dropdownParent.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
    element.nextElementSibling.classList.toggle("active");
    console.log(element.nextElementSibling);
  });
});

// function toggleDropdown(element) {
//   console.log("clicked!");
// }

btnMenu.addEventListener("click", () => {
  sidenav.classList.toggle("active");
  overlay.classList.toggle("active");
  btnMenu.classList.toggle("active");
});
