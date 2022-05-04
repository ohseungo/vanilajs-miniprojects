const modalOpenButton = document.getElementById("modal-open-button");
const modalCloseButton = document.getElementById("modal-close-button");
const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

modalOpenButton.addEventListener("click", () => {
  modalContainer.classList.add("modal-show");
});

modalOverlay.addEventListener("click", () => {
  modalContainer.classList.remove("modal-show");
});

modalCloseButton.addEventListener("click", () => {
  modalContainer.classList.remove("modal-show");
});
