import Popup from '../components/Popup';

export default class PopupConfirm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm
    this._confirmButton = this._popup.querySelector('.popup__submit');
    this._form = this._popup.querySelector('.popup__content');
  };



  // публичный метод задания колбека для слушателя кнопки
  changeSubmitHandlers(newSubmitHandler) {
    this._submitForm = newSubmitHandler
      }

  setEventListeners() {
// наследует логику родителя и обрабатывает также сабмит формы
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitForm();
      //this.close();
    });
  }
}