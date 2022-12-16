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
  popupcContentAvatar,
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

// api.getProfile().then((res) => {
//   userInfo.setUserInfo(res.name, res.about, res.avatar);
//   userID = res._id;
// });

// api.getInitialCards().then((cardList) => {
//   const listItem = new Section(
//     {
//       items: cardList,
//       renderer: (data) => {
//         const newCard = createCardLayout(data, ".element-template");
//         listItem.addItem(newCard);
//         console.log()
//       },
//     },
//     elements
//   );
//   listItem.renderer();
// });
Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([res, items]) => {
      userInfo.setUserInfo(res.name, res.about, res.avatar);
      userID = res._id;
      // items.forEach(data => {
      //   const newCard = createCardLayout(data, ".element-template");
      //   listItem.addItem(newCard);
      // })
      listItem.renderItems(items)
  })
  .catch((err) => {
    console.log(err);
  });

// api.getInitialCards().then((items) => {
//   console.log(items);
//   items.forEach(data => {
//     const newCard = createCardLayout(data, ".element-template");
//     listItem.addItem(newCard);
//   })
//   listItem.renderer();
// })

const listItem = new Section(
  {
   
    renderer: (items) => {
      const newCard = createCardLayout(items, ".element-template");
      listItem.addListItem(newCard);
    },
  },
  elements
);
// listItem.renderer();

function createCardLayout(data, templateSelector) {
  const card = new Card(userID,
    data,
    templateSelector,
    handleOpenImgFullScreen,
    (id) => {
      popupDeliteCard.open();
      popupDeliteCard.changeSubmit(() => {
        api
          .deleteCard(id)
          .then((res) => {
            card.handleDelete();
            popupDeliteCard.close();
          })
          .catch((error) =>
            console.log(`Ошибка при удалении карточки: ${error}`)
          );
      });
    },

    (_id) => {
      if (card.isLiked()) {
        api
          .deleteLike(_id)
          .then((res) => {
            card.setLikes(res.likes);
          })
          .catch((error) => console.log(error));
      } else {
        api
          .addLike(_id)
          .then((res) => {
            card.setLikes(res.likes);
          })
          .catch((error) => console.log(error));
      }
    }
  );
  const newcard = card.createCard();

  return newcard;
}

const popupImg = new PopupWithImage(
  document.querySelector(".popup-show-photo")
);
popupImg.setEventListeners();

function handleOpenImgFullScreen(title, link) {
  popupImg.open(title, link);
}

const popupAddCard = new PopupWithForm(popupAddPhoto, (evt, data) => {
  popupAddCard.renderLoading(true);
  api
    .addCard(data)
    .then((res) => {
      const card = createCardLayout(res, ".element-template");
      listItem.addNewItem(card);
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
      popupProfile.close();
    })
    .catch((error) => console.log(error))
    .finally(() => {
      popupProfile.renderLoading(false);
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
  avatarPopup.renderLoading(true);
  api
    .updateAvatar(name, about, avatar)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about, res.avatar);
      avatarPopup.close();
    })
    .catch((error) => console.log(error))
    .finally(() => {
      avatarPopup.renderLoading(false);
    });
});

avatarPopup.setEventListeners();
document
  .querySelector(".profile__avatar-hover")
  .addEventListener("click", () => {
    avatarPopup.open();
    formAvatarValidator.disabledButton();
  });

const popupDeliteImg = document.querySelector(".popup-delite-img");

const popupDeliteCard = new PopupConfirm(popupDeliteImg);
popupDeliteCard.setEventListeners();

const profileAvatarSelector = document.querySelector(".profile__avatar-foto");
const userInfo = new UserInfo(
  profileName,
  profileStatus,
  profileAvatarSelector,
);

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

const formAvatarValidator = new FormValidator(
  enableValidationConfig,
  popupcContentAvatar
);
formAvatarValidator.enableValidation();

