enableValidation ({
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

function enableValidation(set) {
  const allForms = document.querySelectorAll(set.formSelector);
  for (const form of allForms) {
    hendValiditeImput(set, form);
  }
} 

function isValidField(set, input) {
  const errorElement = input.parentNode.querySelector(`#${input.id}-error`);//добавит часть id

  errorElement.textContent = input.validationMessage; //хранит поля ошибок

  if (errorElement.textContent !== "") {
    input.classList.add(set.inputErrorClass);
    errorElement.classList.add(set.errorClass);
  } 
  if (errorElement.textContent === "")
  {
    input.classList.remove(set.inputErrorClass);
    errorElement.classList.remove(set.errorClass);
  }
}

function setSubmitButton(set, button, state) {
  if (state) {
    button.removeAttribute("disabled");
    button.classList.remove(set.inactiveButtonClass);
  } else {
    button.setAttribute("disabled", true);
    button.classList.add(set.inactiveButtonClass);
  }
}

function hendValiditeImput(set, form) {
  const currentForm = Array.from(form.querySelectorAll(set.inputSelector));
  const submitButton = form.querySelector(set.submitButtonSelector);

  for (let input of currentForm) {
    input.addEventListener("input", () => {
      isValidField(set, input);
      setSubmitButton(set, submitButton, form.checkValidity());
    });
  }
}