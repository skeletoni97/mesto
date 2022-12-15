import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._cardImage = this._popupSelector.querySelector(".popup__image");
    this._cardText = this._popupSelector.querySelector(".popup__text");
  }
  open(title, link) {
    this._cardImage.src = link;
    this._cardText.textContent = title;
    this._cardImage.alt = title;
    super.open();
  }
}
