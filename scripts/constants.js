const profileButton = document.querySelector(".profile__button");

const popupEditProfile = document.querySelector(".popup-edit-profile");
const formElement = document.querySelector(".popup__content");
const nameInput = document.querySelector(".popup__input_field_name");
const jobInput = document.querySelector(".popup__input_field_status");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const popupButtonAdd = document.querySelector("#popup__content_foto");
const profileAddButton = document.querySelector(".profile__add-button");
const popupAddPhoto = document.querySelector(".popup-add-photo");
const closeTypeAddImg = document.querySelector("#popup__close_add");
const elements = document.querySelector(".elements");
const directorTemplate = document.querySelector(".element-template").content;
const inputCardName = document.querySelector(".popup__input_card_name");
const inputCardLink = document.querySelector(".popup__input_card_link");
const buttonAddFoto = document.querySelector('.popup__button-profil-add');

const popups = document.querySelectorAll('.popup')
const popupShowPhoto = document.querySelector(".popup-show-photo");
const elementImageList = document.querySelector(".element__image");
const popupImage = document.querySelector(".popup__image");
const popupText = document.querySelector(".popup__text");

const initialCards = [
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
//   if (Array.isArray(value)) {
//     return value.map(function (num) {
//       return num * 2;
//     });
//   }