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

// click navbar item
function home() {
  const element = document.getElementById("home");
  element.scrollIntoView();
  mobileNavbar.classList.remove("active");
}
function product() {
  const element = document.getElementById("workus");
  element.scrollIntoView();
  mobileNavbar.classList.remove("active");
}
function pricing() {
  const element = document.getElementById("impression");
  element.scrollIntoView();
  mobileNavbar.classList.remove("active");
}
function features() {
  const element = document.getElementById("features");
  element.scrollIntoView();
  mobileNavbar.classList.remove("active");
}
function team() {
  const element = document.getElementById("team");
  element.scrollIntoView();
  mobileNavbar.classList.remove("active");
}