
import Popup from "../components/Popup";

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popupElement.querySelector(".popup__content");
  }

  changeSubmit(newchangeSubmit) {
    this._submitForm = newchangeSubmit;
  }
  
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitForm();
    });
  }
}