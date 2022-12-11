
export default class Card {
  constructor(data, templateSelector, handleOpenImgFullScreen, handeleDeleteClick) {
    this._cardText = data.name;
    this._cardImage = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userID = data.userID;
    this._owner = data.owner


    this.handeleDeleteClick = handeleDeleteClick
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

  // _stLikes(){
  //   const elementLikeCounter = this._element.querySelector('.element__like_counter');
  //   elementLikeCounter.textContent = this._likes.lenght
  // }

  createCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector(".element__image");
    this._elementImage.alt = this._cardText;
    this._elementImage.src = this._cardImage;
    this._elementLike = this._element.querySelector(".element__like");
    this.elementDeleteCard = this._element.querySelector(".element__delete-card");
    this._element.querySelector(".element__title").textContent = this._cardText;
    this._setListenersForButtons();
    if(this._owner !== this._userID) {
      this.elementDeleteCard.style.display = 'none'
    }
    // this._stLikes();
    return this._element;
  }

 

  _setListenersForButtons() {
    this._elementLike.addEventListener("click", () => this._handleLike());
    this.elementDeleteCard.addEventListener("click", () => this.handeleDeleteClick(this._id));
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
