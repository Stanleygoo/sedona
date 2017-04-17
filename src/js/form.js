'use strict';

var feedbackForm = document.querySelector('.feedback-form');
var firstName = feedbackForm.querySelector('#first-name');
var lastName = feedbackForm.querySelector('#last-name');
var patronymic = feedbackForm.querySelector('#patronymic');
var textarea = feedbackForm.querySelector('.feedback-form__textarea');
var tel = feedbackForm.querySelector('#tel');
var telErrorMsg = feedbackForm.querySelector('.feedback-form__error-msg');


console.log(tel.validity);
telErrorMsg.style.fontSize = '0px';

tel.addEventListener('change', function() {
debugger;
  if (!tel.validity.valid) {
    console.log(!tel.validity.valid);
    debugger;
    telErrorMsg.style.fontSize = '14px';
  }
});

firstName.required = true;
firstName.minLength = 3;
firstName.maxLength = 15;


lastName.required = true;
lastName.minLength = 3;
lastName.maxLength = 15;

patronymic.required = true;
patronymic.minLength = 5;
patronymic.maxLength = 15;


tel.required = true;
// tel.pattern = '^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$';
