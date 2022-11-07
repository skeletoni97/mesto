import FormValidator from "./FormValidator.js";
import Card from "./card.js";

const profileButton = document.querySelector(".profile__button");
const popupEditProfile = document.querySelector(".popup-edit-profile");
const formElement = document.querySelector(".popup__content");
const nameInput = document.querySelector(".popup__input_field_name");
const jobInput = document.querySelector(".popup__input_field_status");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const formAddFoto = document.querySelector("#popup__content_foto");
const profileAddButton = document.querySelector(".profile__add-button");
const popupAddPhoto = document.querySelector(".popup-add-photo");
const closeTypeAddImg = document.querySelector("#popup__close_add");
const elements = document.querySelector(".elements");
const directorTemplate = document.querySelector(".element-template").content;
const inputCardName = document.querySelector(".popup__input_card_name");
const inputCardLink = document.querySelector(".popup__input_card_link");
const buttonAddFoto = document.querySelector(".popup__button-profil-add");

const popups = document.querySelectorAll(".popup");

export { popupShowPhoto, popupImage, popupText, openPopup };
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

const enableValidationConfig = {
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

function handleAddCard(cardText, cardImage, template) {
  const card = new Card(cardText, cardImage, template);
  const newcard = card.createCard();
  addCard(newcard);
}

function addCard(card) {
  elements.prepend(card);
}

initialCards.forEach((element) => {
  const card = new Card(element.name, element.link, ".element-template");
  const cardElement = card.createCard();
  elements.prepend(cardElement);
});

function submitEditPhotoForm(evt) {
  evt.preventDefault();
  const element = {
    name: inputCardName.value,
    link: inputCardLink.value,
  };
  handleAddCard(element.name, element.link, ".element-template");
  closePopup(popupAddPhoto);
}

profileAddButton.addEventListener("click", openPopupAddImg);
formAddFoto.addEventListener("submit", submitEditPhotoForm);

function openPopupAddImg() {
  const addcaedValidator = new FormValidator(
    enableValidationConfig,
    formAddFoto
  );
  addcaedValidator.enableValidation(enableValidationConfig, formAddFoto);

  openPopup(popupAddPhoto);
  inputCardName.value = "";
  inputCardLink.value = "";
  buttonAddFoto.classList.add("popup__button_disabled");
  buttonAddFoto.setAttribute("disabled", true);
}

function openPopupProfile() {
  openPopup(popupEditProfile);
  const formCard = new FormValidator(enableValidationConfig, formElement);
  formCard.enableValidation(enableValidationConfig, formElement);
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});

profileButton.addEventListener("click", openPopupProfile);
formElement.addEventListener("submit", submitEditProfileForm);
