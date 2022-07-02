const popup = document.querySelector (".popup");
const openPopupButton = document.querySelector (".profile__edit-button");
const closePopupButton = document.querySelector (".popup__close-icon");
const popupSubmitButton = document.querySelector(".popup__form");

const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");

let popupName = document.querySelector(".popup__input_type_name");
let popupProfession = document.querySelector(".popup__input_type_profession");

const openPopup = function () {
    popup.classList.add("popup_opened");
    popupName.value = profileName.textContent;
    popupProfession.value = profileProfession.textContent;
};

const closePopup = function () {
    popup.classList.remove("popup_opened");
};


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileProfession.textContent = popupProfession.value;
    closePopup();
};

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
popupSubmitButton.addEventListener('submit', formSubmitHandler);
