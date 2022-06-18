let profileButton = document.querySelector(".profile__button");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
let formElement = document.querySelector(".popup__content");
let nameInput = document.querySelector(".popup__name");
let jobInput = document.querySelector(".popup__status");
let profileName = document.querySelector(".profile__name");
let profileStatus = document.querySelector(".profile__status");

function openPopup(e) {
  popup.classList.add("popup_open");
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
}

profileButton.addEventListener("click", openPopup);

function closePopup(e) {
  popup.classList.remove("popup_open");
}

popupClose.addEventListener("click", closePopup);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener("submit", formSubmitHandler);
