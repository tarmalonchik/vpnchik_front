const popupElement = document.querySelector('.popup');

let buttons = document.querySelectorAll('.element__pay')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        console.log("some text")
        popupElement.classList.add('popup_opened');
    });
}

let closeButton = document.querySelector('.popup__close')
closeButton.addEventListener('click', function () {
    popupElement.classList.remove('popup_opened');
})