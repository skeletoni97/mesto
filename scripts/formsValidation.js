const formProfile = document.forms.form_profile;
const formAddCard = document.forms.form_add;

function isValidField(settings, input) {
  const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
  errorSpan.textContent = input.validationMessage;
  if (errorSpan.textContent !== "") {
    input.classList.add(settings.inputErrorClass);
    errorSpan.classList.add(settings.errorClass);
  } else {
    input.classList.remove(settings.inputErrorClass);
    errorSpan.classList.remove(settings.errorClass);
  }
}

function setSubmitButton(settings, button, state) {
  if (state) {
    console.log(state);
    button.removeAttribute("disabled");
    button.classList.remove(settings.inactiveButtonClass);
  } else {
    button.setAttribute("disabled", true);
    button.classList.add(settings.inactiveButtonClass);
  }
}

function hendValiditeImput(settings, form) {
  const currentForm = Array.from(form.querySelectorAll(settings.inputSelector));
  const submitButton = form.querySelector(settings.submitButtonSelector);

  for (let input of currentForm) {
    input.addEventListener("input", () => {
      isValidField(settings, input);
      setSubmitButton(settings, submitButton, form.checkValidity());
    });
  }
}

// // function sendForm (evt) {
// //   evt.preventDefault();

//   const currentForm = evt.target;

//   if (currentForm.checkValidity()) {
//     console.log('успех');
//     evt.target.reset();
//   } else {
//     console.log('Форма луззз');
//   }
// }
// formProfile.addEventListener('input', function (evt) {
//     hendValiditeImput(evt)
//   });

// formAddCard.addEventListener('submit', sendForm);
// formAddCard.addEventListener('input', hendValiditeImput);

// formProfile.addEventListener('submit', sendForm);
// formProfile.addEventListener('input', hendValiditeImput);

// // включение валидации вызовом enableValidation
// // все настройки передаются при вызове

function enableValidation(settings) {
  const allForms = document.querySelectorAll(settings.formSelector);
  for (const form of allForms) {
    hendValiditeImput(settings, form);
  }
}
//  console.log(enableValidation(settings))

// const formProfile = document.forms.form_profile;
// const formAddCard = document.forms.form_add;

// formAddCard.addEventListener('submit', sendForm);
// // formAddCard.addEventListener('input', hendValiditeImput);

// formProfile.addEventListener('submit', sendForm);
// // formProfile.addEventListener('input', hendValiditeImput);

// function enableValidation(settings){
//     const allForms = document.querySelectorAll(settings.formSelector)
//     for (const form of allForms) {
//         hendValiditeImput(settings, form);
//     }
//  }

// function sendForm (evt) {
//   evt.preventDefault();

//   const currentForm = evt.target;

//   if (currentForm.checkValidity()) {
//     console.log('успех');
//     evt.target.reset();
//   } else {
//     console.log('Форма луззз');
//   }
// }
enableValidation({
  formSelector: ".popup__content",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

//   const showInputError = (formElement, inputElement, errorMessage) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add('popup__input_type_error');
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add('popup__error_visible');
//   };
