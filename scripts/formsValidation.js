class FormValidator {
  constructor(setting, form) {
    this._form = form
    this._setting = setting
   
  }

  _setSubmitButton(button, state) {
    if (state) {
      button.removeAttribute("disabled");
      button.classList.remove(this._setting.inactiveButtonClass);
    } else {
      button.setAttribute("disabled", true);
      button.classList.add(this._setting.inactiveButtonClass);
    }
  }

  _isValidField(input) {
    const errorElement = this._form.parentNode.querySelector(`#${input.id}-error`);//добавит часть id
    errorElement.textContent = input.validationMessage; //хранит поля ошибок
  
    if (errorElement.textContent !== "") {
      input.classList.add(this._setting.inputErrorClass);
      errorElement.classList.add(this._setting.errorClass);
    } 
    if (errorElement.textContent === "") {
      input.classList.remove(this._setting.inputErrorClass);
      errorElement.classList.remove(this._setting.errorClass);
    }
  }

  _hendValiditeImput() {
    const currentForm = Array.from(this._form.querySelectorAll(this._setting.inputSelector));
    const submitButton = this._form.querySelector(this._setting.submitButtonSelector);
  
    for (let input of currentForm) {
      input.addEventListener("input", () => {
        this._isValidField(input);
        this._setSubmitButton(submitButton, input.checkValidity());
      });
    }
  }

  enableValidation() {
    const allForms = document.querySelectorAll(this._setting.formSelector);
    for (const form of allForms) {
      this._hendValiditeImput(form);
  } 
}
}

const enableValidationConfig = {
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const addcaedValidator = new FormValidator(enableValidationConfig, popupAddPhoto);
addcaedValidator.enableValidation(enableValidationConfig, popupAddPhoto);

const formCard = new FormValidator(enableValidationConfig, popupEditProfile);
formCard.enableValidation(enableValidationConfig, popupEditProfile);

// function enableValidation(setting) {
//   const allForms = document.querySelectorAll(setting.formSelector);
//   for (const form of allForms) {
//     hendValiditeImput(setting, form);
//   }
// } 

// function isValidField(setting, input) {
//   const errorElement = input.parentNode.querySelector(`#${input.id}-error`);//добавит часть id

//   errorElement.textContent = input.validationMessage; //хранит поля ошибок

//   if (errorElement.textContent !== "") {
//     input.classList.add(setting.inputErrorClass);
//     errorElement.classList.add(setting.errorClass);
//   } 
//   if (errorElement.textContent === "")
//   {
//     input.classList.remove(setting.inputErrorClass);
//     errorElement.classList.remove(setting.errorClass);
//   }
// }

// function setSubmitButton(setting, button, state) {
//   if (state) {
//     button.removeAttribute("disabled");
//     button.classList.remove(setting.inactiveButtonClass);
//   } else {
//     button.setAttribute("disabled", true);
//     button.classList.add(setting.inactiveButtonClass);
//   }
// }

// function hendValiditeImput(setting, form) {
//   const currentForm = Array.from(form.querySelectorAll(setting.inputSelector));
//   const submitButton = form.querySelector(setting.submitButtonSelector);

//   for (let input of currentForm) {
//     input.addEventListener("input", () => {
//       isValidField(setting, input);
//       setSubmitButton(setting, submitButton, form.checkValidity());
//     });
//   }
// }