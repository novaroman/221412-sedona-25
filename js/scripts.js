// Показ и вскрытие попапа

var link = document.querySelector(".search-hotel-button");
var popup = document.querySelector(".search-form");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    form.classList.remove("modal-error");
});

// Состояние ошибки отправки формы

var form = document.querySelector(".search-form-wrapper");

var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");
var calcAdults = popup.querySelector("[name=adults]");
var calcChildren = popup.querySelector("[name=children]");

popup.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !calcAdults.value || !calcChildren.value) {
    evt.preventDefault();
    form.classList.remove("modal-error");
    form.offsetWidth = popup.offsetWidth;
    form.classList.add("modal-error");
  }
});
