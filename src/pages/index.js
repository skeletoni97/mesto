import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirm from "../components/PopupConfirm.js";
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

let userID;
api.getProfile().then((res) => {
  userInfo.setUserInfo(res.name, res.about, res.avatar);

  userID = res._id;
});

api
  .getInitialCards()

  .then((cardList) => {
    cardList.forEach(data => {
      const card = handleAddCard({
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id,
        userID: userID,
        owner: data.owner._id,
      });
      // listItem.addItem(card)
    });
  });

function handleAddCard(elements) {
  const newcard = createCardLayout(elements, ".element-template");
  console.log(elements, "elements v addcard")
  addCard(newcard);
}

function addCard(card) {
  listItem.addItem(card);
}

function createCardLayout(data, templateSelector) {
  console.log(data)
  const card = new Card(
    data,
    templateSelector,
    handleOpenImgFullScreen,
    (id) => {
      popupDeliteCard.open();
      popupDeliteCard.changeSubmit(() => {
        api
          .deleteCard(id)
          .then(res => {
            card._handleDelete();
            popupDeliteCard.close();
          })
          .catch((error) =>
            console.log(`Ошибка при удалении карточки: ${error}`)
          );
      });
    },

    (id) => {
      if (card.isLiked()) {
        api.deleteLike(id).then((res) => {
          card.stLikes(res.likes);
        });
      } else {
        api.addLike(id).then((res) => {
          card.stLikes(res.likes);
        });
      }
    }
  );
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

const popupAddCard = new PopupWithForm(popupAddPhoto, (evt, data) => {
  console.log(data)
   
    ".element-template"
    

  popupAddCard.renderLoading(true);
  api.addCard(data)
  .then(res => {
    const card = handleAddCard({
      name: res.name,
      link: res.link,
      likes: res.likes,
      id: res._id,
      userID: res.userID,
      owner: res.owner,
    })
    
  })
  .catch((error) => console.log(error))
    .finally(() => {
      popupAddCard.renderLoading(false);
      popupAddCard.close();
    });
});
popupAddCard.setEventListeners();

document.querySelector(".profile__add-button").addEventListener("click", () => {
  formAddFotoValidator.disabledButton();
  popupAddCard.open();
});

const popupProfile = new PopupWithForm(popupEditProfile, function (
  evt,
  name,
  about,
  avatar
) {
  popupProfile.renderLoading(true);
  api
    .editProfile(name, about, avatar)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about, res.avatar);
    })
    .catch((error) => console.log(error))
    .finally(() => {
      popupProfile.renderLoading(false);
      popupProfile.close();
    });
});
popupProfile.setEventListeners();

const popupAvatar = document.querySelector(".popup-avatar");
const avatarPopup = new PopupWithForm(popupAvatar, function (
  evt,
  name,
  about,
  avatar
) {
  avatarPopup.renderLoading(true)
  api.updateAvatar(name, about, avatar).then((res) => {
    userInfo.setUserInfo(res.name, res.about, res.avatar);
  })
  .catch((error) => console.log(error))
    .finally(() => {
      avatarPopup.renderLoading(false);
      avatarPopup.close();
    });
    
});

avatarPopup.setEventListeners();
document
  .querySelector(".profile__avatar_hover")
  .addEventListener("click", () => {
    // formAddFotoValidator.disabledButton();
    avatarPopup.open();
  });

const popupDeliteImg = document.querySelector(".popup-delite-img");

const popupDeliteCard = new PopupConfirm(popupDeliteImg, (id) => {
  api
  .deleteCard(id)
});
popupDeliteCard.setEventListeners();



const profileAvatarSelector = document.querySelector(".profile__avatar_foto");
const userInfo = new UserInfo({
  profileName,
  profileStatus,
  profileAvatarSelector,
});

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


