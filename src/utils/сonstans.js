
export const profileButton = document.querySelector(".profile__button");
export const popupEditProfile = document.querySelector(".popup-edit-profile");
export const formElement = document.querySelector(".popup__content");
export const profileName = document.querySelector(".profile__name");
export const profileStatus = document.querySelector(".profile__status");
export const formAddFoto = document.querySelector("#popup__content_foto");
export const popupcContentAvatar = document.querySelector("#popup__content_avatar")
export const popupAddPhoto = document.querySelector(".popup-add-photo");
export const elements = document.querySelector(".elements");
export const inputCardName = document.querySelector(".popup__input_card_name");
export const inputCardLink = document.querySelector(".popup__input_card_link");
export const buttonAddFoto = document.querySelector(".popup__button-profil-add");
export const buttonDeletevisabiliti = document.querySelector(".element__delete-card_visabiliti");

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const enableValidationConfig = {
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
}

export const userInfoConfig = {
  nameSelector: '.profile__name',
  aboutSelector: '.profile__status',
  avatarSelector: '.profile__avatar-foto'
}

export const popupSelectors = {
  popupImage: ".popup-show-photo",
  popupEdit: ".popup-edit-profile",
  popupAddCard: ".popup-add-photo",
  popupDelete: ".popup-delite-img",
  popupAvatar: ".popup-avatar"
}