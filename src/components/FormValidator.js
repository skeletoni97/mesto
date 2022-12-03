export default class FormValidator {
  constructor(setting, form) {
    this._form = form;
    this._setting = setting;
  }

  resetValidation() {
    this._setSubmitButton();
    this._inputList.forEach((input) => {
      this._isValidField(input)
    });
  } 

  _setSubmitButton() {
    if (this._form.checkValidity()) {
      this._submitButton.removeAttribute("disabled");
      this._submitButton.classList.remove(this._setting.inactiveButtonClass);
    } else {
      this.disabledButton()
    }
  }

  disabledButton() {
    this._submitButton.setAttribute("disabled", true);
    this._submitButton.classList.add(this._setting.inactiveButtonClass);
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
    errorElement.textContent = "";
    input.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    
  }

  _checkInputValidity(input) {
    
    if (!input.checkValidity()) {
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
    
    this._inputList.forEach((input) =>  {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._setSubmitButton();
      });
    });
    
  }

  enableValidation() {
    this._setFormEventListeners();
  }
}
