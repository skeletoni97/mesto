class Card {
  constructor(cardText, cardImage) {
    this._cardText = cardText;
    this._cardImage = cardImage;
  }
  _getTemplate() {
    const directorTemplate = document
    .querySelector('.element-template')
    .content
    .querySelector('.element')
    .cloneNode(true);
    return directorTemplate; 
  }
  createCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__image').alt = this._cardText;
    this._element.querySelector('.element__image').src = this._cardImage;
    this._element.querySelector('.element__title').textContent = this._cardText;
    this._setListenersForButtons();
    return this._element;
  }

  _setListenersForButtons() {
    const cardLikeButton = this._element.querySelector(".element__like");
    cardLikeButton.addEventListener("click", this._handleLike);
    const cardDeleteButton = this._element.querySelector(".element__delete-card");
    cardDeleteButton.addEventListener("click", this._handleDelete);
    const openImgButton = this._element.querySelector(".element__image");
    openImgButton.addEventListener("click", this._handleOpenImgFullScreen);
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

  _handleOpenImgFullScreen(add) {
    popupImage.src = add.target.src;
    popupText.textContent = add.target.alt;
    popupImage.alt = popupText.textContent;
    openPopup(popupShowPhoto);
  }
 }

function handleAddCard() {
  const card = new Card()
  const item = card.createCard()
  elements.prepend(item)
}

initialCards.forEach((element) => {
  const card = new Card(element.name, element.link)
  const cardElement = card.createCard()
  elements.prepend(cardElement)
})

function openPopupAddImg() {
  openPopup(popupAddPhoto);
  inputCardName.value = "";
  inputCardLink.value = "";
  buttonAddFoto.classList.add('popup__button_disabled');
  buttonAddFoto.setAttribute("disabled", true);
}

function submitEditPhotoForm(evt) {
  evt.preventDefault();
  const element = {
    name: inputCardName.value,
    link: inputCardLink.value,
  };
  handleAddCard(element.name, element.link);
  closePopup(popupAddPhoto);
}

profileAddButton.addEventListener("click", openPopupAddImg);
popupButtonAdd.addEventListener("submit", submitEditPhotoForm);

function openPopupProfile() {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeByEscape);
}

function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
          closePopup(popup)
        }
    })
})

profileButton.addEventListener("click", openPopupProfile);
formElement.addEventListener("submit", submitEditProfileForm);



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