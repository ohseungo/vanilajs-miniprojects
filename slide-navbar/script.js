var menuToggleButton = document.getElementById("menu-toggle");
var mainContainer = document.getElementById("main-container");

menuToggleButton.addEventListener("click", () => {
  mainContainer.classList.toggle("show-side-menu");
});
