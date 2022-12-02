
export default class Card {
  constructor(data, templateSelector, handleOpenImgFullScreen) {
    this._cardText = data.name;
    this._cardImage = data.link;
    this._templateSelector = templateSelector ;
    this.handleOpenImgFullScreen = handleOpenImgFullScreen;
  }
  _getTemplate() {
    const directorTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return directorTemplate;
  }
  createCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector(".element__image");
    this._elementImage.alt = this._cardText;
    this._elementImage.src = this._cardImage;
    this._elementLike = this._element.querySelector(".element__like");
    this.elementDeleteCard = this._element.querySelector(".element__delete-card");
    this._element.querySelector(".element__title").textContent = this._cardText;
    this._setListenersForButtons();
    return this._element;
  }

  _setListenersForButtons() {
    this._elementLike.addEventListener("click", () => this._handleLike());
    this.elementDeleteCard.addEventListener("click", () => this._handleDelete());
    this._elementImage.addEventListener("click", () => this.handleOpenImgFullScreen(this._cardText, this._cardImage));
  }
  _handleDelete() {
    this._element.remove();
    this._element = null;
  }
  _handleLike() {
    this._elementLike.classList.toggle("element__like_active");
  }
}
