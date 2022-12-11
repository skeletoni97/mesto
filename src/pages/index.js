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

import { api } from "../components/Api";
import { data } from "autoprefixer";


let userID
api.getProfile() 
.then(res =>{
  userInfo.setUserInfo(res.name, res.about);
  
  userID = res._id
  console.log(res)
})
  

 api.getCard()
 
 .then(cardList => {
  cardList.forEach(data => {
    const card = handleAddCard({
      name: data.name,
      link: data.link,
      likes: data.likes,
      id: data._id,
      userID: data.userID,
      owner: data.owner._id
    })
  });
 })

function handleAddCard(elements) {
  const newcard = createCardLayout(elements, ".element-template");
  addCard(newcard);
}

function addCard(card) {
  listItem.addItem(card);
}

function createCardLayout(data, templateSelector) {
  console.log(data)
  const card = new Card(data, templateSelector, handleOpenImgFullScreen, (id) => {
    console.log('klick', id)
    popupDeliteCard.open();
    popupDeliteCard.changeSubmit(() => {
      api.deleteCard(id)
      .then(res => {
        card._handleDelete()
      })
    })
    
  });
  const newcard = card.createCard();
  return newcard;
}

const listItem = new Section(
  {
    items: [],
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

const popupAddCard = new PopupWithForm(popupAddPhoto, (evt, values) => {
  handleAddCard(
    { name: values.nameCard, link: values.link, likes: values.likes,  id: values._id, me: values.me,  userID: values.userID,
      owner: values.owner._id },
    ".element-template"
  );
  console.log(addCard)
  api.addCard(
    values
  )
 
}); 
popupAddCard.setEventListeners();


document.querySelector(".profile__add-button").addEventListener("click", () => {
  formAddFotoValidator.disabledButton();
  popupAddCard.open();
});

const popupProfile = new PopupWithForm(popupEditProfile, function ( evt, name, about ) {
  console.log(name, about, 'rev')
  api.editProfile(name, about)
  .then(res => {
    userInfo.setUserInfo(res.name, res.about)
  })
});
popupProfile.setEventListeners();

const popupDeliteImg = document.querySelector('.popup-delite-img')
const popupDeliteCard = new PopupWithForm(popupDeliteImg);
popupDeliteCard.setEventListeners();


const userInfo = new UserInfo({ profileName, profileStatus });

profileButton.addEventListener("click", () => {
  popupProfile.setInputValues(userInfo.getUserInfo());
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


