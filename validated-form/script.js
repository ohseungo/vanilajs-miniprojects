const registerForm = document.getElementById("register-form");

const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

const PASSWORD_MIN_LENGTH = 6;

const showError = (inputElement, msg) => {
  if (!inputElement instanceof Element) return;
  const formGroup = inputElement.parentElement;
  formGroup.classList.add("error");

  const msgField = formGroup.querySelector("small");
  if (msgField instanceof Element) {
    msgField.innerHTML = msg;
  }
};

const clearError = (inputElement, msg) => {
  if (!inputElement instanceof Element) return;
  const formGroup = inputElement.parentElement;
  formGroup.classList.remove("error");
};

const checkAllRequiredFieldFilled = (inputElements) => {
  let isFilled = true;

  inputElements.forEach((inputElement) => {
    if (inputElement.value.trim() === "") {
      isFilled = false;
      showError(inputElement, "This field is required.");
    } else {
      clearError(inputElement);
    }
  });

  return isFilled;
};

const checkEmail = (inputElement) => {
  if (!inputElement instanceof Element) return false;
  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  if (regEmail.test(inputElement.value.trim())) {
    clearError(inputElement);
    return true;
  } else {
    showError(inputElement, "Please input valid email.");
    return false;
  }
};

const checkPassword = (inputElement) => {
  if (!inputElement instanceof Element) return false;
  const password = inputElement.value;
  if (password.length < PASSWORD_MIN_LENGTH) {
    showError(
      inputElement,
      `Password must be at least ${PASSWORD_MIN_LENGTH} characters.`
    );
    return false;
  } else {
    clearError(inputElement);
    return true;
  }
};

const checkPasswordConfirm = (inputElement, inputElementConfirm) => {
  if (
    !inputElement instanceof Element ||
    !inputElementConfirm instanceof Element
  )
    return false;
  if (!(inputElement.value === inputElementConfirm.value)) {
    showError(inputElementConfirm, "Please check again.");
    return false;
  } else {
    clearError(inputElementConfirm);
    return true;
  }
};

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!checkAllRequiredFieldFilled([email, password, passwordConfirm])) return;
  if (!checkEmail(email)) return;
  if (!checkPassword(password)) return;
  if (!checkPasswordConfirm(password, passwordConfirm)) return;
});
