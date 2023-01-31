const popupElement = document.querySelector('.popup');

let buttons = document.querySelectorAll('.element__button-container_pay')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        console.log("text")
        popupElement.classList.add('popup_opened');
        console.log("text")
    });
}

let closeButton = document.querySelector('.popup__close')
closeButton.addEventListener('click', function () {
    popupElement.classList.remove('popup_opened');
})