var elChanger = document.querySelector(".temperature-converter__button-changer");

var elCelsius = document.querySelector(".amazing");

var elFahreinheit = document.querySelector(".exciting")

var elButton = document.querySelector(".trickyy")

elChanger.addEventListener("click", function() {
    elCelsius.classList.toggle("changer--tricky")

    elFahreinheit.classList.toggle("changer--tricky")

    elButton.classList.toggle(".changer--tricky")
});

var elChangerr = document.querySelector(".something--tricky");

var elCelsius = document.querySelector(".amazing");

var elFahreinheit = document.querySelector(".exciting")

var elButton = document.querySelector(".trickyy")

elChangerr.addEventListener("click", function() {
    elCelsius.classList.toggle("changer--tricky")

    elFahreinheit.classList.toggle("changer--tricky")

    elButton.classList.toggle(".changer--tricky")
});

var elForm = document.querySelector(".temperature-converter__form");

var elInputCelsius = document.querySelector(".temperature-converter__input-temperature-celsius");

var elOutcomeCelsius = document.querySelector(".temperature-converter__outcome--text");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    var celsius = elInputCelsius.value;

    elOutcomeCelsius.textContent = celsius * 1.8 + 32;
});

var elForm = document.querySelector(".temperature-converter__form-f");

var elInputFahreinheit = document.querySelector(".temperature-converter__input-temperature-fahreinheit");

var elOutcomeFahreinheit = document.querySelector(".temperature-converter__outcome--text-fahreinheit");

elForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var fahreinheit = elInputFahreinheit.value;

    elOutcomeFahreinheit.textContent = Math.round((fahreinheit - 32) / 1.8);
});