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

    popupElement.querySelector('.popup__input').value = '';
    popupElement.classList.remove('popup_opened');
})

let editEmail = popupElement.querySelector('.popup__input')
editEmail.addEventListener('input', function (event) {
    console.log('some')
    popupElement.querySelector('.popup__error').innerHTML = ''
})





// sidebar
const headerSidebar = document.querySelector('.header__sidebar');
const headerSidebarClose = headerSidebar.querySelector('.header__sidebar_close');

headerSidebarClose.addEventListener('click', function (event) {
    headerSidebar.classList.remove('header__sidebar_opened');
})





// menu
const headerMenu = document.querySelector('.header__item_menu-img')
headerMenu.addEventListener('click', function (event){
    headerSidebar.classList.add('header__sidebar_opened');
})




// logo
document.querySelector('.header__item_logo-img').addEventListener('click', function (event){
    window.location.href = 'index.html'
})
