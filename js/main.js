var elBtn = document.querySelector(".header-burger__btn");
var elHeader = document.querySelector(".header__container");

elBtn.addEventListener("click", function () {
    elHeader.classList.toggle("header__container--active")
})

// modal
var elBtnModal = document.querySelector(".result__btn");
var elModalHeading = document.querySelector(".modal__heading");
var elModal = document.querySelector(".modal");

elBtnModal.addEventListener("click", function () {
    elModal.classList.add("modal--active")
})

elModalHeading.addEventListener("click", function () {
    elModal.classList.remove("modal--active")
})