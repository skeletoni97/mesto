import Popup from "./Popup.js"
export default class PopupWithForm extends Popup {
    constructor( popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm
        this._form = this._popupSelector.querySelector('.popup__content')
        this._formData = this._popupSelector.querySelectorAll ('.popup__input')
        this._submitButton = this._popupSelector.querySelector('.popup__submit')
        this._buttonDefaultText = this._submitButton.textContent

    }
    setInputValues(values) {
        
            this._formData.forEach((input) => {
                input.value = values[input.name];
            });
        
            super.open();
    }

    close() {
        super.close();
        this._form.reset();
    }
    
    _getInputValues(){
        const inputValues = {};
        this._formData.forEach( (input) => {
            inputValues[input.name] = input.value;
        });
    return inputValues;
    }
    
    // changeSubmit(newchangeSubmit){
    //     this._submitForm = newchangeSubmit;
    // }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._submitForm(this.form, this._getInputValues());
            
        });
    }
    renderLoading(isLoading) {
        if(isLoading) {
          this._submitButton.textContent = 'Загрузка...'
        } else {
          this._submitButton.textContent = this._buttonDefaultText;
        }
      }
}
