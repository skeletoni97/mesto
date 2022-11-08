export default class FormValidator {
  constructor(setting, form) {
    this._form = form;
    this._setting = setting;
  }
  _resetValidation() {
    this._setSubmitButton();

    this._inputList.forEach((input) => {
      this._isValidField(input)
    });

  } 

  _setSubmitButton() {
    console.log();
    if (this._form.checkValidity()) {
      this._submitButton.removeAttribute("disabled");
      this._submitButton.classList.remove(this._setting.inactiveButtonClass);
    } else {
      this._submitButton.setAttribute("disabled", true);
      this._submitButton.classList.add(this._setting.inactiveButtonClass);
    }
  }

  _anValidField(input) {
    const { inputErrorClass, errorClass } = this._setting;
    const errorElement = this._form.querySelector(`#${input.id}-error`); //добавит часть id
    errorElement.textContent = input.validationMessage; //хранит поля ошибок
    input.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
    

  }

  _isValidField(input) {
    const { inputErrorClass, errorClass } = this._setting;
    const errorElement = this._form.querySelector(`#${input.id}-error`); //добавит часть id
    errorElement.textContent = input.validationMessage; //хранит поля ошибок
    input.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    
  }

  _checkInputValidity(input) {
    if (!input.checkValidity) {
      this._anValidField(input);
      
    } else {
      this._isValidField(input);
    }
  }

  _setFormEventListeners() {
    this._inputList = this._form.querySelectorAll(
      this._setting.inputSelector
    );
    this._submitButton = this._form.querySelector(
      this._setting.submitButtonSelector
    );
    console.log(this._submitButton + "кнопка");

    for (let input of this._inputList) {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._setSubmitButton();
      });
    }
  }

  enableValidation() {
    this._setFormEventListeners();
    this._resetValidation()
  }
}

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
