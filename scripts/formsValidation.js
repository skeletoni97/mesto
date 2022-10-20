enableValidation ({
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

function enableValidation(setting) {
  const allForms = document.querySelectorAll(setting.formSelector);
  for (const form of allForms) {
    hendValiditeImput(setting, form);
  }
} 

function isValidField(setting, input) {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`);//добавит часть id

  errorElement.textContent = input.validationMessage; //хранит поля ошибок

  if (errorElement.textContent !== "") {
    input.classList.add(setting.inputErrorClass);
    errorElement.classList.add(setting.errorClass);
  } 
  if (errorElement.textContent === "")
  {
    input.classList.remove(setting.inputErrorClass);
    errorElement.classList.remove(setting.errorClass);
  }
}

function setSubmitButton(setting, button, state) {
  if (state) {
    button.removeAttribute("disabled");
    button.classList.remove(setting.inactiveButtonClass);
  } else {
    button.setAttribute("disabled", true);
    button.classList.add(setting.inactiveButtonClass);
  }
}

function hendValiditeImput(setting, form) {
  const currentForm = Array.from(form.querySelectorAll(setting.inputSelector));
  const submitButton = form.querySelector(setting.submitButtonSelector);

  for (let input of currentForm) {
    input.addEventListener("input", () => {
      isValidField(setting, input);
      setSubmitButton(setting, submitButton, form.checkValidity());
    });
  }
}