export default class Card {
  constructor(userID,
    data,
    templateSelector,
    handleOpenImgFullScreen,
    handeleDeleteClick,
    handeleLikeClick
  ) {
    
    this._data = data;
    this._cardText = data.name;
    this._cardImage = data.link;
    this._myId = userID;
    
    this.handeleLikeClick = handeleLikeClick;
    this.handeleDeleteClick = handeleDeleteClick;
    this._templateSelector = templateSelector;
    this.handleOpenImgFullScreen = handleOpenImgFullScreen;
  }
  _getTemplate() {
    const directorTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return directorTemplate;
  }

  isLiked() {
    const userlikes = this._data.likes.find((user) => user._id === this._myId);
    return userlikes;
  }

  setLikes(newLikes) {
    this._data.likes = newLikes;
    
    this._elementLikeCounter.textContent = this._data.likes.length;

    if (this.isLiked()) {
      this._Like();
    } else {
      this._unlike();
    }
  }

  _unlike() {
    this._elementLike.classList.remove("element__like_active");
  }
  _Like() {
    this._elementLike.classList.add("element__like_active");
  }

  createCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector(".element__image");
    this._elementImage.alt = this._cardText;
    this._elementImage.src = this._cardImage;
    this._elementLike = this._element.querySelector(".element__like");
    this.elementDeleteCard = this._element.querySelector( ".element__delete-card");
    this.elementDeleteCardNone = this._element.querySelector( ".element__delete-card_none");
    this._elementLikeCounter = this._element.querySelector(".element__like_counter");
    this._element.querySelector(".element__title").textContent = this._cardText;
    this._setListenersForButtons();
    this.setLikes(this._data.likes);
    this._deleteIfmyCard()

    return this._element;
  }
  _deleteIfmyCard () {
    if (this._data.owner._id !== this._myId) {
      this.elementDeleteCardNone.style.display = "none";
    }
  }

  _setListenersForButtons() {
    this._elementLike.addEventListener("click", () =>
      this.handeleLikeClick(this._data._id)
    );
    this.elementDeleteCard.addEventListener("click", () =>
      this.handeleDeleteClick(this._data._id)
    );
    this._elementImage.addEventListener("click", () =>
      this.handleOpenImgFullScreen(this._cardText, this._cardImage)
    );
  }
  handleDelete() {
    this._element.remove();
    this._element = null;
  }
}
