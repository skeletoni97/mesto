import Popup from '../components/Popup';

export default class PopupConfirm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm
    this._form = this._popupSelector.querySelector('.popup__content')
  };



  // публичный метод задания колбека для слушателя кнопки
  changeSubmit(newchangeSubmit){
    this._submitForm = newchangeSubmit;
}


      setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._submitForm();
            
        });
    }
}