const mobileMenu = document.getElementById("mobile-menu");
const menuOpen = document.getElementsByClassName("open-menu");
const menuClose = document.getElementsByClassName("close");
const overlay = document.querySelector(".overlay");

// menu open section
menuOpen[0].addEventListener("click", () => {
  mobileMenu.style.right = "0";
  mobileMenu.style.display = "block";
  menuOpen[0].style.display = "none";
  menuClose[0].style.display = "block";
  overlay.style.right = "0";
});

// menu close section
menuClose[0].addEventListener("click", () => {
  mobileMenu.style.right = "-100%";
  menuOpen[0].style.display = "block";
  menuClose[0].style.display = "none";
  overlay.style.right = "-100%";
});
