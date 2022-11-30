import { popupShowPhoto, popupImage, popupText } from "../../pages/index.js";
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
    this._element.querySelector(".element__image").alt = this._cardText;
    this._element.querySelector(".element__image").src = this._cardImage;
    this._elementImage = this._element.querySelector(".element__image");
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

  // _handleOpenImgFullScreen() {
  //   popupImage.src = this._cardImage;
  //   popupText.textContent = this._cardText;
  //   popupImage.alt = this._cardImage;
  //   this.open();
  // }
}

// initialCards.forEach(element => addCard(createCard(element.name, element.link)));

// function createCard(title, dlink) {
//   const card = directorTemplate.cloneNode(true);
//   const cardImage = card.querySelector(".element__image");
//   card.querySelector(".element__title").textContent = title;
//   cardImage.src = link;
//   cardImage.alt = title;
//   setListenersForButtons(card);
//   return card;
// }
// initialCards.forEach(element => addCard(createCard(element.name, element.link)));

// function addCard(card) {
//   elements.prepend(card);
// }

// function setListenersForButtons(element) {
//   const cardDeleteButton = element.querySelector(".element__delete-card");
//   cardDeleteButton.addEventListener("click", handleDelete);
//   const openImgButton = element.querySelector(".element__image");
//   openImgButton.addEventListener("click", handleOpenImgFullScreen);
// }

// document.addEventListener('keydown', evt => {
//   if (evt.keyCode123 === 27 || evt.key === 'Escape') {
//     popupArray = [
//       popupShowPhoto,
//       popupAddPhoto,
//       popupEditProfile
//     ];
//     popupArray.forEach(closePopup);
//   }
// });

// const popupClosePhoto = document.querySelector('.popup__close_show-photo');
// popupClosePhoto.addEventListener("click", () => closePopup(popupShowPhoto));

// popupShowPhoto.addEventListener('mousedown', (evt) => {
//   if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
//     closePopup(popupShowPhoto);
//   }
// });

// const popupCloseAddPhoto = document.querySelector('.popup__close-add-photo');
// popupCloseAddPhoto.addEventListener("click", () => closePopup(popupAddPhoto));

// popupAddPhoto.addEventListener('mousedown', (evt) => {
//   if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
//     closePopup(popupAddPhoto);
//   }
// });

// const popupCloseProfile = document.querySelector('.popup__close-profile');
// popupCloseProfile.addEventListener("click", () => closePopup(popupEditProfile));

// popupEditProfile.addEventListener('mousedown', (evt) => {
//   if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
//     closePopup(popupEditProfile);
//   }
// });

// elements.addEventListener('click', function (evt) {
//   if (evt.target.classList.contains('element__like'))
//    evt.target.classList.toggle('element__like_active');
//  });

//comment

/*
big comment
*/
/**
 *
 * @param {*} evt - is thebset
 */
//  document.addEventListener('keydown', function () {
//   console.log('На что ни нажми — я появлюсь');
// });
