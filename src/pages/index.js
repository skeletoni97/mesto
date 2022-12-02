import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import "../pages/index.css";
import {
  profileButton,
  popupEditProfile,
  formElement,
  profileName,
  profileStatus,
  formAddFoto,
  popupAddPhoto,
  elements,
  inputCardName,
  inputCardLink,
  buttonAddFoto,
  initialCards,
  enableValidationConfig,
} from "../utils/сonstans.js";

formAddFoto.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const element = {
    name: inputCardName.value,
    link: inputCardLink.value,
  };
  handleAddCard(element, ".element-template");
});

function handleAddCard(elements) {
  const newcard = createCardLayout(elements, ".element-template");
  addCard(newcard);
}

function addCard(card) {
  listItem.addItem(card);
}

function createCardLayout(data, templateSelector) {
  const card = new Card(data, templateSelector, handleOpenImgFullScreen);
  const newcard = card.createCard();
  return newcard;
}

const listItem = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const newCard = createCardLayout(data, ".element-template");
      listItem.addItem(newCard);
    },
  },
  elements
);

listItem.renderer();

const popupImg = new PopupWithImage(
  document.querySelector(".popup-show-photo")
);
popupImg.setEventListeners();

function handleOpenImgFullScreen(title, link) {
  popupImg.open(title, link);
}

const popupAddCard = new PopupWithForm(popupAddPhoto, () => {

});
popupAddCard.setEventListeners();

const values = popupAddCard._getInputValues();
document.querySelector(".profile__add-button").addEventListener("click", () => {
  buttonAddFoto.classList.add('popup__button_disabled');
  buttonAddFoto.setAttribute("disabled", true);
  popupAddCard.open(values);
});

const popupProfile = new PopupWithForm(popupEditProfile, function ( evt, values ) {
  userInfo.setUserInfo(values);
});
popupProfile.setEventListeners();

const userInfo = new UserInfo({ profileName, profileStatus });

profileButton.addEventListener("click", () => {
  popupProfile.open(userInfo.getUserInfo());
});

const formAddFotoValidator = new FormValidator(
  enableValidationConfig,
  formAddFoto
);
formAddFotoValidator.enableValidation();

const formProfileValidator = new FormValidator(
  enableValidationConfig,
  formElement
);
formProfileValidator.enableValidation();
