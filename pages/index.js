import FormValidator from "../scripts/components/FormValidator.js";
import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import Popup from "../scripts/components/Popup.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";






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

export { popupShowPhoto, popupImage, popupText}; //openpopup
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
}
function createCardLayout(data, templateSelector) {
  const card = new Card(data, templateSelector, handleOpenImgFullScreen);
  const newcard = card.createCard();
  return newcard;
}

function handleAddCard(data, templateSelector) {
  const newcard = createCardLayout(data, templateSelector, );
  addCard(newcard);
}

function addCard(card) {
  elements.prepend(card);
}


const listItem = new Section({
  items: initialCards,
  renderer: (data) => {
    console.log(data);
      const newCard = handleAddCard(data, '.element-template' )
      listItem.addItem(newCard)
  }
}, elements)

listItem.renderer()



formAddFoto.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const element = {
    name: inputCardName.value,
    link: inputCardLink.value,
  };
  console.log(element);
  handleAddCard(element, '.element-template');
  popupAddCard.close();
});



function handleOpenImgFullScreen(title, link){
  popupImg.open(title, link)
}

const popupCloseShowPhoto = document.querySelector(".popup__close_show-photo")
popupCloseShowPhoto.addEventListener('click', () => {
  popupImg.close()
});

const popupImg = new PopupWithImage(document.querySelector('.popup-show-photo'));
popupImg.setEventListeners();
console.log(popupImg);

const popupAddCard = new PopupWithForm(popupAddPhoto, buttonAddFoto);
const values = popupAddCard._getInputValues()
document.querySelector('.profile__add-button')
    .addEventListener('click', () => {
      popupAddCard.open(values)
    })

    popupAddCard.setEventListeners();

const userInfo = new UserInfo({profileName, profileStatus});

const popupProfile = new PopupWithForm(popupEditProfile, function (evt, values) {
  userInfo.setUserInfo(values);
  this.close();
});
popupProfile.setEventListeners();

profileButton.addEventListener('click', () => {
  popupProfile.open(userInfo.getUserInfo());
});


const formAddFotoValidator = new FormValidator(enableValidationConfig, formAddFoto);
formAddFotoValidator.enableValidation();


const formProfileValidator = new FormValidator(enableValidationConfig, formElement);
formProfileValidator.enableValidation();


// formElement.addEventListener('submit', () => {
//   userInfo.setUserInfo(values);
  
// });




// initialCards.forEach((element) => {
//   const cardElement = createCardLayout(element.name, element.link, ".element-template");
//   elements.prepend(cardElement);
// });

// function submitEditPhotoForm(evt) {
//   evt.preventDefault();
//   const element = {
//     name: inputCardName.value,
//     link: inputCardLink.value,
//   };
//   handleAddCard(element.name, element.link, ".element-template");
//   closePopup(popupAddPhoto);
// }

// profileAddButton.addEventListener("click", openPopupAddImg);
// formAddFoto.addEventListener("submit", submitEditPhotoForm);


// function openPopupAddImg() {
//   openPopup(popupAddPhoto);
//   inputCardName.value = "";
//   inputCardLink.value = "";



//   formAddFotoValidator.resetValidation(); 
 
// }


// function openPopupProfile() {
//   openPopup(popupEditProfile);
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileStatus.textContent;
// }

// function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", closeByEscape);
// }

// function submitEditProfileForm(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileStatus.textContent = jobInput.value;
//   closePopup(popupEditProfile);
// }

// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keydown", closeByEscape);
// }

// function closeByEscape(evt) {
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector(".popup_opened");
//     closePopup(openedPopup);
//   }
// }

// popups.forEach((popup) => {
//   popup.addEventListener("mousedown", (evt) => {
//     if (evt.target.classList.contains("popup_opened")) {
//       closePopup(popup);
//     }
//     if (evt.target.classList.contains("popup__close")) {
//       closePopup(popup);
//     }
//   });
// });

// profileButton.addEventListener("click", () => {
//   popupEditProfile.open(userInfo.getUserInfo());
// });
// formElement.addEventListener("submit", submitEditProfileForm);