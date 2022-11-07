import {popupShowPhoto, popupImage, popupText, openPopup} from "./index.js" 
export default class Card {
  constructor(cardText, cardImage, template) {
    this._cardText = cardText;
    this._cardImage = cardImage;
    this._Template = template;
   }
  _getTemplate() {
    const directorTemplate = document
    .querySelector(this._Template)
    .content
    .querySelector('.element')
    .cloneNode(true);
    return directorTemplate; 
  }
  createCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__image').alt = this._cardText;
    this._element.querySelector('.element__image').src = this._cardImage;
    this._elementImage = this._element.querySelector('.element__image');
    this._elementLike = this._element.querySelector('.element__like');
    this.elementDeleteCard = this._element.querySelector('.element__delete-card');
    this._element.querySelector('.element__title').textContent = this._cardText;
    this._setListenersForButtons();
    return this._element;
  }

  _setListenersForButtons() {
    this._elementLike.addEventListener("click", this._handleLike);
    this.elementDeleteCard.addEventListener("click", this._handleDelete);
    this._elementImage.addEventListener("click", this._handleOpenImgFullScreen);
  }
  _handleDelete(evt) {
    const currentCard = evt.target.closest(".element"); //только первый родитель
    currentCard.remove();
  }
  _handleLike(evt) {
    if (evt.target.classList.contains('element__like'))
    evt.target.classList.toggle('element__like_active');
  }

  _handleOpenImgFullScreen(add) {
    popupImage.src = add.target.src;
    popupText.textContent = add.target.alt;
    popupImage.alt = popupText.textContent;
    openPopup(popupShowPhoto);
  }
 }





// initialCards.forEach(element => addCard(createCard(element.name, element.link)));

// function createCard(title, link) {
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