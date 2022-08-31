// mobile navbar
const mobileNavbar = document.querySelector(".mobile-navbar");
const openNavbar = document.querySelector(".open-navbar");
const closeNavbar = document.querySelector(".close-navbar");
openNavbar.addEventListener("click", function () {
  mobileNavbar.classList.add("active");
});
closeNavbar.addEventListener("click", function () {
  mobileNavbar.classList.remove("active");
});