let profileButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupCloseList = document.querySelectorAll('.popup__close');
let formElement = document.querySelector('.popup__content');
let nameInput = document.querySelector('.popup__input_field_name');
let jobInput = document.querySelector('.popup__input_field_status');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');

let popupButtonAdd = document.querySelector('#popup__content_foto');
const profileAddButton = document.querySelector('.profile__add-button');
const popupAddPhoto = document.querySelector('.popup-add-photo');
let popupTitle = document.querySelector('popup__title')
let closeTypeAddImg = document.querySelector('#popup__close_add');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 


const elements = document.querySelector('.elements');
const directorTemplate = document.querySelector('.element-template').content;
let inputCardName = document.querySelector('.popup__input_card_name');
let inputCardLink = document.querySelector('.popup__input_card_link');
//перебор массива 
initialCards.forEach(function(element) {
  addCard(element);
})
function addCard(element) {
    const card = directorTemplate.cloneNode(true);
  
    card.querySelector('.element__title').textContent = element.name;
    card.querySelector('.element__image').src = element.link;
    card.querySelector('.element__image').alt = element.name;
    card.alt = element.textContent;
    setListenersForButtons(card);
    elements.prepend(card);
}

function setListenersForButtons(element) {
  const cardLikeButton = element.querySelector('.element__like');
  cardLikeButton.addEventListener('click', handleLike);
  const cardDeleteButton = element.querySelector('.element__delete-card');
  cardDeleteButton.addEventListener('click', handleDelete);
  const openImgButton = element.querySelector('.element__image');
  openImgButton.addEventListener('click', handleOpenImgFullScreen);
}
let popupShowPhoto = document.querySelector('.popup-show-photo');
let elementImageList = document.querySelector('.element__image');
let popupImage = document.querySelector('.popup__image')
let popupText = document.querySelector('.popup__text')

function handleOpenImgFullScreen(add) {
popupImage.src = add.target.src;
popupText.textContent = add.target.alt;
openPopupImg()
}

function openPopupImg() {
  openPopup(popupShowPhoto);
  console.log()
}

function handleLike (evt) {
  const currentLike =  evt.target.closest('.element__like'); //только первый родитель 
  currentLike.classList.toggle('element__like_active');
}

function handleDelete (evt) {
  const currentCard = evt.target.closest('.element') //только первый родитель 
  currentCard.remove();
}

function openPopupAddImg() {
  openPopup(popupAddPhoto);
  inputCardName.value = '';
  inputCardLink.value = '';
}

function formSubmitHandlerr(evt) {
  evt.preventDefault();
  const element = {
    name:inputCardName.value,
    link:inputCardLink.value
    };
  addCard(element);
  closePopup(evt);;
}

profileAddButton.addEventListener('click', openPopupAddImg);
popupButtonAdd.addEventListener('submit', formSubmitHandlerr);

// Попап профиль//
function openPopupProfile() {
  openPopup(popup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;
  closePopup(evt);
}

popupCloseList.forEach(popupClose => {
  popupClose.addEventListener('click', evt => {
    evt.target.closest('.popup_opened').classList.remove('popup_opened');
  });

})
function closePopup (evt) {
  evt.target.closest('.popup_opened').classList.remove('popup_opened')
}

profileButton.addEventListener('click', openPopupProfile);
formElement.addEventListener('submit', formSubmitHandler);




//comment

/*
big comment
*/
/**
 * 
 * @param {*} evt - is thebset 
 */
