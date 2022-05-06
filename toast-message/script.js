const toastArea = document.getElementById("toast-list");
const toastInfoButton = document.getElementById("toast-info-button");
const toastErrorButton = document.getElementById("toast-error-button");
const toastWarningButton = document.getElementById("toast-warning-button");

var ToastMessage = function (message, type) {
  this.type = type ? type : "info";
  this.message = message;

  const container = document.createElement("div");
  container.classList.add("toast-container");
  container.classList.add("toast-" + type);

  const closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "X";
  closeButton.addEventListener("click", () => {
    container.classList.add("fade-out");
    container.addEventListener("animationend", () => {
      container.remove();
    });
  });
  setTimeout(() => {
    container.classList.add("fade-out");
    container.addEventListener("animationend", () => {
      container.remove();
    });
  }, 3000);

  const messageBox = document.createElement("div");
  messageBox.innerHTML = message;

  container.appendChild(closeButton);
  container.appendChild(messageBox);

  this.element = container;
};

ToastMessage.prototype.show = function () {
  toastArea.appendChild(this.element);
};

toastInfoButton.addEventListener("click", () => {
  const infoMessage = new ToastMessage("This is Info Message!");
  infoMessage.show();
});
toastErrorButton.addEventListener("click", () => {
  const errorMessage = new ToastMessage("This is Error Message!", "error");
  errorMessage.show();
});
toastWarningButton.addEventListener("click", () => {
  const warningMessage = new ToastMessage(
    "This is Warning Message!",
    "warning"
  );
  warningMessage.show();
});
