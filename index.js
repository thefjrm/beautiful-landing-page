const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});
