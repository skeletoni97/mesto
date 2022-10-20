const profileButton = document.querySelector(".profile__button");
const popup = document.querySelector(".popup");
const popupEditProfile = document.querySelector(".popup-edit-profile");
const popupCloseList = document.querySelectorAll(".popup__close");
const formElement = document.querySelector(".popup__content");
const nameInput = document.querySelector(".popup__input_field_name");
const jobInput = document.querySelector(".popup__input_field_status");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const popupButtonAdd = document.querySelector("#popup__content_foto");
const profileAddButton = document.querySelector(".profile__add-button");
const popupAddPhoto = document.querySelector(".popup-add-photo");
const popupTitle = document.querySelector("popup__title");
const closeTypeAddImg = document.querySelector("#popup__close_add");
const elements = document.querySelector(".elements");
const directorTemplate = document.querySelector(".element-template").content;
const inputCardName = document.querySelector(".popup__input_card_name");
const inputCardLink = document.querySelector(".popup__input_card_link");
const buttonAddFoto = document.querySelector('.popup__button-profil-add');

initialCards.forEach(element => addCard(createCard(element.name, element.link)));

function createCard(title, link) {
  const card = directorTemplate.cloneNode(true);
  const cardImage = card.querySelector(".element__image");
  card.querySelector(".element__title").textContent = title;
  cardImage.src = link;
  cardImage.alt = title;
  setListenersForButtons(card);
  return card;
}

function addCard(card) {
  elements.prepend(card);
}

function setListenersForButtons(element) {
  const cardDeleteButton = element.querySelector(".element__delete-card");
  cardDeleteButton.addEventListener("click", handleDelete);
  const openImgButton = element.querySelector(".element__image");
  openImgButton.addEventListener("click", handleOpenImgFullScreen);
}
const popupShowPhoto = document.querySelector(".popup-show-photo");
const elementImageList = document.querySelector(".element__image");
const popupImage = document.querySelector(".popup__image");
const popupText = document.querySelector(".popup__text");

function handleOpenImgFullScreen(add) {
  popupImage.src = add.target.src;
  popupText.textContent = add.target.alt;
  popupImage.alt = popupText.textContent;
  openPopup(popupShowPhoto);
}

function handleDelete(evt) {
  const currentCard = evt.target.closest(".element"); //только первый родитель
  currentCard.remove();
}

function openPopupAddImg() {
  openPopup(popupAddPhoto);
  inputCardName.value = "";
  inputCardLink.value = "";
  buttonAddFoto.classList.add('popup__button_disabled');
}

function submitEditPhotoForm(evt) {
  evt.preventDefault();
  const element = {
    name: inputCardName.value,
    link: inputCardLink.value,
  };
  addCard(createCard(element.name, element.link));
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
}

function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;
  closePopup(popupEditProfile);
}


function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

document.addEventListener('keydown', evt => {
  if (evt.keyCode123 === 27 || evt.key === 'Escape') {
    popupArray = [
      popupShowPhoto,
      popupAddPhoto, 
      popupEditProfile
    ];
    popupArray.forEach(closePopup);
  }
});

const popupClosePhoto = document.querySelector('.popup__close_show-photo');
popupClosePhoto.addEventListener("click", () => closePopup(popupShowPhoto));

popupShowPhoto.addEventListener('mousedown', (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    closePopup(popupShowPhoto);
  }
});

const popupCloseAddPhoto = document.querySelector('.popup__close-add-photo');
popupCloseAddPhoto.addEventListener("click", () => closePopup(popupAddPhoto));

popupAddPhoto.addEventListener('mousedown', (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    closePopup(popupAddPhoto);
  }
});

const popupCloseProfile = document.querySelector('.popup__close-profile');
popupCloseProfile.addEventListener("click", () => closePopup(popupEditProfile));

popupEditProfile.addEventListener('mousedown', (evt) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    closePopup(popupEditProfile);
  }
});

profileButton.addEventListener("click", openPopupProfile);
formElement.addEventListener("submit", submitEditProfileForm);

elements.addEventListener('click', function (evt) {
  console.log(evt)
  if (evt.target.classList.contains('element__like'))
   evt.target.classList.toggle('element__like_active');
 });





















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