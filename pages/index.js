import FormValidator from "../scripts/components/FormValidator.js";
import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import Popup from "../scripts/components/Popup.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";

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
  enableValidationConfig

} from"../scripts/utils/Constans.js";

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