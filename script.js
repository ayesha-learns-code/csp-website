function submitForm(event) {
  event.preventDefault();
  alert("Thank you for your feedback!");
}
// Hamburger toggle
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".nav-links");
  const toggle = document.getElementById("mobile-menu");

  toggle.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
});
// Toggle mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
