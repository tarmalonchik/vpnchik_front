const popupElement = document.querySelector('.popup');

function emailIsValid(input){
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !!input.value.match(validRegex);
}

let buttons = document.querySelectorAll('.element__button-container_pay')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        popupElement.classList.add('popup_opened');
    });
}

let closeButton = document.querySelector('.popup__close')
closeButton.addEventListener('click', function () {
    popupElement.classList.remove('popup_opened');
})

let sendButton = document.querySelector('.popup__save')
sendButton.addEventListener('click', function (event) {
    event.preventDefault();

    let emailField = popupElement.querySelector('.popup__input')
    if (!emailIsValid(emailField)){
        popupElement.querySelector('.popup__error').innerHTML = '❗email is not valid'
        return
    }

    console.log('some')
    popupElement.querySelector('.popup__input').value = '';
    console.log('some')

    popupElement.classList.remove('popup_opened');
})

let editEmail = popupElement.querySelector('.popup__input')
editEmail.addEventListener('input', function (event) {
    popupElement.querySelector('.popup__error').innerHTML = ''
})
