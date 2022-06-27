let profileButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__content');
let nameInput = document.querySelector('.popup__input_field_name');
let jobInput = document.querySelector('.popup__input_field_status');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');



const elements = document.querySelector('.elements');
const directorTemplate = document.querySelector('.element-template').content;
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

initialCards.forEach(function(element) {
  const card = directorTemplate.cloneNode(true);

  card.querySelector('.element__title').textContent = element.name;
  card.querySelector('.element__image').src = element.link;
 card.querySelector('.element__like').addEventListener('click', function (element) {
    element.target.classList.toggle('element__like_active');
  });
  elements.append(card);
})

const profileAddButton = document.querySelector('.profile__add-button')

function openPopupp() {
  popup.classList.add('popup_opened');
  nameInput.value = '';
  jobInput.value = '' ;
}

profileAddButton.addEventListener('click', openPopupp);






function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;
  closePopup();
}



profileButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
