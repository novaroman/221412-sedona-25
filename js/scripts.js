// Показ и вскрытие попапа

var link = document.querySelector(".search-hotel-button");
var popup = document.querySelector(".search-form");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
});